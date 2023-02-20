import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0xfffa340944ff32f50c7935e2b5d22a7c3393b313'
import {MaticIloEventClaimed, MaticIloEventDeposit, MaticIloEventOwnershipTransferred, MaticIloEventRefunded, MaticIloFunctionClaim, MaticIloFunctionCommit, MaticIloFunctionInCaseTokensGetStuck, MaticIloFunctionMoveRaisedBase, MaticIloFunctionRefund, MaticIloFunctionRenounceOwnership, MaticIloFunctionSetEndTime, MaticIloFunctionSetRaisingAmount, MaticIloFunctionSetStartTime, MaticIloFunctionSetStellaPerBase, MaticIloFunctionTransferOwnership} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xfffa340944ff32f50c7935e2b5d22a7c3393b313'

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
                return new MaticIloEventClaimed({
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
                return new MaticIloEventDeposit({
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
                return new MaticIloEventOwnershipTransferred({
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
                return new MaticIloEventRefunded({
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
                return new MaticIloFunctionClaim({
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
                return new MaticIloFunctionCommit({
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
                return new MaticIloFunctionInCaseTokensGetStuck({
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
                return new MaticIloFunctionMoveRaisedBase({
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
                return new MaticIloFunctionRefund({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'refund',
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new MaticIloFunctionRenounceOwnership({
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
                return new MaticIloFunctionSetEndTime({
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
                return new MaticIloFunctionSetRaisingAmount({
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
                return new MaticIloFunctionSetStartTime({
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
                return new MaticIloFunctionSetStellaPerBase({
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
                return new MaticIloFunctionTransferOwnership({
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
