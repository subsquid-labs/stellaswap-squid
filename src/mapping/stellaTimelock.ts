import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0xc6f73b028cd3154a5bb87f49aa43aa259a6522fb'
import {StellaTimelockEventCancelTransaction, StellaTimelockEventExecuteTransaction, StellaTimelockEventNewAdmin, StellaTimelockEventNewDelay, StellaTimelockEventNewPendingAdmin, StellaTimelockEventQueueTransaction, StellaTimelockFunctionAcceptAdmin, StellaTimelockFunctionCancelTransaction, StellaTimelockFunctionExecuteTransaction, StellaTimelockFunctionQueueTransaction, StellaTimelockFunctionSetDelay, StellaTimelockFunctionSetPendingAdmin} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xc6f73b028cd3154a5bb87f49aa43aa259a6522fb'

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
            case abi.events['CancelTransaction'].topic: {
                let e = normalize(abi.events['CancelTransaction'].decode(item.evmLog))
                return new StellaTimelockEventCancelTransaction({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'CancelTransaction',
                    txHash: e[0],
                    target: e[1],
                    value: e[2],
                    signature: e[3],
                    data: e[4],
                    eta: e[5],
                })
            }
            case abi.events['ExecuteTransaction'].topic: {
                let e = normalize(abi.events['ExecuteTransaction'].decode(item.evmLog))
                return new StellaTimelockEventExecuteTransaction({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'ExecuteTransaction',
                    txHash: e[0],
                    target: e[1],
                    value: e[2],
                    signature: e[3],
                    data: e[4],
                    eta: e[5],
                })
            }
            case abi.events['NewAdmin'].topic: {
                let e = normalize(abi.events['NewAdmin'].decode(item.evmLog))
                return new StellaTimelockEventNewAdmin({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'NewAdmin',
                    newAdmin: e[0],
                })
            }
            case abi.events['NewDelay'].topic: {
                let e = normalize(abi.events['NewDelay'].decode(item.evmLog))
                return new StellaTimelockEventNewDelay({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'NewDelay',
                    newDelay: e[0],
                })
            }
            case abi.events['NewPendingAdmin'].topic: {
                let e = normalize(abi.events['NewPendingAdmin'].decode(item.evmLog))
                return new StellaTimelockEventNewPendingAdmin({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'NewPendingAdmin',
                    newPendingAdmin: e[0],
                })
            }
            case abi.events['QueueTransaction'].topic: {
                let e = normalize(abi.events['QueueTransaction'].decode(item.evmLog))
                return new StellaTimelockEventQueueTransaction({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'QueueTransaction',
                    txHash: e[0],
                    target: e[1],
                    value: e[2],
                    signature: e[3],
                    data: e[4],
                    eta: e[5],
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
            case abi.functions['acceptAdmin'].sighash: {
                return new StellaTimelockFunctionAcceptAdmin({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'acceptAdmin',
                })
            }
            case abi.functions['cancelTransaction'].sighash: {
                let f = normalize(abi.functions['cancelTransaction'].decode(item.transaction.input))
                return new StellaTimelockFunctionCancelTransaction({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'cancelTransaction',
                    target: f[0],
                    value: f[1],
                    signature: f[2],
                    data: f[3],
                    eta: f[4],
                })
            }
            case abi.functions['executeTransaction'].sighash: {
                let f = normalize(abi.functions['executeTransaction'].decode(item.transaction.input))
                return new StellaTimelockFunctionExecuteTransaction({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'executeTransaction',
                    target: f[0],
                    value: f[1],
                    signature: f[2],
                    data: f[3],
                    eta: f[4],
                })
            }
            case abi.functions['queueTransaction'].sighash: {
                let f = normalize(abi.functions['queueTransaction'].decode(item.transaction.input))
                return new StellaTimelockFunctionQueueTransaction({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'queueTransaction',
                    target: f[0],
                    value: f[1],
                    signature: f[2],
                    data: f[3],
                    eta: f[4],
                })
            }
            case abi.functions['setDelay'].sighash: {
                let f = normalize(abi.functions['setDelay'].decode(item.transaction.input))
                return new StellaTimelockFunctionSetDelay({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setDelay',
                    delay: f[0],
                })
            }
            case abi.functions['setPendingAdmin'].sighash: {
                let f = normalize(abi.functions['setPendingAdmin'].decode(item.transaction.input))
                return new StellaTimelockFunctionSetPendingAdmin({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setPendingAdmin',
                    pendingAdmin: f[0],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
