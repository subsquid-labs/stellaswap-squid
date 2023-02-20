import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x01834cf26717f0351d9762cc9cca7dc059d140df'
import {ZapEventOwnershipTransferred, ZapFunctionInitialize, ZapFunctionRemoveToken, ZapFunctionRenounceOwnership, ZapFunctionSetNotLp, ZapFunctionSetRoutePairAddress, ZapFunctionSetZapInFees, ZapFunctionSetZapOutFees, ZapFunctionSweep, ZapFunctionTransferOwnership, ZapFunctionWithdraw, ZapFunctionZapIn, ZapFunctionZapInToken, ZapFunctionZapOut} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x01834cf26717f0351d9762cc9cca7dc059d140df'

type EventItem = LogItem<{evmLog: {topics: true, data: true}, transaction: {hash: true}}>
type FunctionItem = TransactionItem<{transaction: {hash: true, input: true}}>

export function parse(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: EventItem | FunctionItem) {
    switch (item.kind) {
        case 'evmLog':
            return parseEvent(ctx, block, item)
        case 'transaction':
            return parseFunction(ctx, block, item)
    }
}

function parseEvent(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: EventItem) {
    try {
        switch (item.evmLog.topics[0]) {
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new ZapEventOwnershipTransferred({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'OwnershipTransferred',
                    previousOwner: e[0],
                    newOwner: e[1],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode event "${item.evmLog.topics[0]}"`)
    }
}

function parseFunction(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: FunctionItem) {
    try {
        switch (item.transaction.input.slice(0, 10)) {
            case abi.functions['initialize'].sighash: {
                let f = normalize(abi.functions['initialize'].decode(item.transaction.input))
                return new ZapFunctionInitialize({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'initialize',
                    stella: f[0],
                    router: f[1],
                })
            }
            case abi.functions['removeToken'].sighash: {
                let f = normalize(abi.functions['removeToken'].decode(item.transaction.input))
                return new ZapFunctionRemoveToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeToken',
                    i: f[0],
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new ZapFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['setNotLP'].sighash: {
                let f = normalize(abi.functions['setNotLP'].decode(item.transaction.input))
                return new ZapFunctionSetNotLp({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setNotLP',
                    token: f[0],
                })
            }
            case abi.functions['setRoutePairAddress'].sighash: {
                let f = normalize(abi.functions['setRoutePairAddress'].decode(item.transaction.input))
                return new ZapFunctionSetRoutePairAddress({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setRoutePairAddress',
                    asset: f[0],
                    route: f[1],
                })
            }
            case abi.functions['setZapInFees'].sighash: {
                let f = normalize(abi.functions['setZapInFees'].decode(item.transaction.input))
                return new ZapFunctionSetZapInFees({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setZapInFees',
                    newZapInFees: f[0],
                })
            }
            case abi.functions['setZapOutFees'].sighash: {
                let f = normalize(abi.functions['setZapOutFees'].decode(item.transaction.input))
                return new ZapFunctionSetZapOutFees({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setZapOutFees',
                    newZapOutFees: f[0],
                })
            }
            case abi.functions['sweep'].sighash: {
                return new ZapFunctionSweep({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'sweep',
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new ZapFunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
            case abi.functions['withdraw'].sighash: {
                let f = normalize(abi.functions['withdraw'].decode(item.transaction.input))
                return new ZapFunctionWithdraw({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdraw',
                    token: f[0],
                })
            }
            case abi.functions['zapIn'].sighash: {
                let f = normalize(abi.functions['zapIn'].decode(item.transaction.input))
                return new ZapFunctionZapIn({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'zapIn',
                    to: f[0],
                })
            }
            case abi.functions['zapInToken'].sighash: {
                let f = normalize(abi.functions['zapInToken'].decode(item.transaction.input))
                return new ZapFunctionZapInToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'zapInToken',
                    from: f[0],
                    amount: f[1],
                    to: f[2],
                })
            }
            case abi.functions['zapOut'].sighash: {
                let f = normalize(abi.functions['zapOut'].decode(item.transaction.input))
                return new ZapFunctionZapOut({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'zapOut',
                    from: f[0],
                    amount: f[1],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
