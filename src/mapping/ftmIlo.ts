import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x096352f7ea415a336b41fc48b33142eff19a8ad8'
import {FtmIloEventClaimed, FtmIloEventDeposit, FtmIloEventOwnershipTransferred, FtmIloEventRefunded, FtmIloFunctionClaim, FtmIloFunctionCommit, FtmIloFunctionInCaseTokensGetStuck, FtmIloFunctionMoveRaisedBase, FtmIloFunctionRefund, FtmIloFunctionRenounceOwnership, FtmIloFunctionSetEndTime, FtmIloFunctionSetRaisingAmount, FtmIloFunctionSetStartTime, FtmIloFunctionSetStellaPerBase, FtmIloFunctionTransferOwnership} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x096352f7ea415a336b41fc48b33142eff19a8ad8'

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
                return new FtmIloEventClaimed({
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
                return new FtmIloEventDeposit({
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
                return new FtmIloEventOwnershipTransferred({
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
                return new FtmIloEventRefunded({
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
                return new FtmIloFunctionClaim({
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
                return new FtmIloFunctionCommit({
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
                return new FtmIloFunctionInCaseTokensGetStuck({
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
            case abi.functions['moveRaisedBase'].sighash: {
                let f = normalize(abi.functions['moveRaisedBase'].decode(item.transaction.input))
                return new FtmIloFunctionMoveRaisedBase({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'moveRaisedBase',
                    to: f[0],
                })
            }
            case abi.functions['refund'].sighash: {
                return new FtmIloFunctionRefund({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'refund',
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new FtmIloFunctionRenounceOwnership({
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
                return new FtmIloFunctionSetEndTime({
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
                return new FtmIloFunctionSetRaisingAmount({
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
                return new FtmIloFunctionSetStartTime({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setStartTime',
                    startTime: f[0],
                })
            }
            case abi.functions['setStellaPerBase'].sighash: {
                let f = normalize(abi.functions['setStellaPerBase'].decode(item.transaction.input))
                return new FtmIloFunctionSetStellaPerBase({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setStellaPerBase',
                    stellaPerBase: f[0],
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new FtmIloFunctionTransferOwnership({
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
