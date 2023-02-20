import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x96bef4719ae7c053113292e6aa7fc36e62b243e8'
import {AvaxIloEventClaimed, AvaxIloEventDeposit, AvaxIloEventOwnershipTransferred, AvaxIloEventRefunded, AvaxIloFunctionClaim, AvaxIloFunctionCommit, AvaxIloFunctionInCaseTokensGetStuck, AvaxIloFunctionRefund, AvaxIloFunctionRenounceOwnership, AvaxIloFunctionSetEndTime, AvaxIloFunctionSetRaisingAmount, AvaxIloFunctionSetStartTime, AvaxIloFunctionSetStellaPerAvax, AvaxIloFunctionTransferOwnership} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x96bef4719ae7c053113292e6aa7fc36e62b243e8'

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
            case abi.events['Claimed'].topic: {
                let e = normalize(abi.events['Claimed'].decode(item.evmLog))
                return new AvaxIloEventClaimed({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Claimed',
                    user: e[0],
                    amount: e[1],
                })
            }
            case abi.events['Deposit'].topic: {
                let e = normalize(abi.events['Deposit'].decode(item.evmLog))
                return new AvaxIloEventDeposit({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Deposit',
                    user: e[0],
                    amount: e[1],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new AvaxIloEventOwnershipTransferred({
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
            case abi.events['Refunded'].topic: {
                let e = normalize(abi.events['Refunded'].decode(item.evmLog))
                return new AvaxIloEventRefunded({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Refunded',
                    user: e[0],
                    amount: e[1],
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
            case abi.functions['claim'].sighash: {
                return new AvaxIloFunctionClaim({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'claim',
                })
            }
            case abi.functions['commit'].sighash: {
                let f = normalize(abi.functions['commit'].decode(item.transaction.input))
                return new AvaxIloFunctionCommit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'commit',
                    amount: f[0],
                })
            }
            case abi.functions['inCaseTokensGetStuck'].sighash: {
                let f = normalize(abi.functions['inCaseTokensGetStuck'].decode(item.transaction.input))
                return new AvaxIloFunctionInCaseTokensGetStuck({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'inCaseTokensGetStuck',
                    token: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['refund'].sighash: {
                return new AvaxIloFunctionRefund({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'refund',
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new AvaxIloFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['setEndTime'].sighash: {
                let f = normalize(abi.functions['setEndTime'].decode(item.transaction.input))
                return new AvaxIloFunctionSetEndTime({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setEndTime',
                    endTime: f[0],
                })
            }
            case abi.functions['setRaisingAmount'].sighash: {
                let f = normalize(abi.functions['setRaisingAmount'].decode(item.transaction.input))
                return new AvaxIloFunctionSetRaisingAmount({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setRaisingAmount',
                    raisingAmount: f[0],
                })
            }
            case abi.functions['setStartTime'].sighash: {
                let f = normalize(abi.functions['setStartTime'].decode(item.transaction.input))
                return new AvaxIloFunctionSetStartTime({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setStartTime',
                    startTime: f[0],
                })
            }
            case abi.functions['setStellaPerAvax'].sighash: {
                let f = normalize(abi.functions['setStellaPerAvax'].decode(item.transaction.input))
                return new AvaxIloFunctionSetStellaPerAvax({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setStellaPerAvax',
                    stellaPerAvax: f[0],
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new AvaxIloFunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
