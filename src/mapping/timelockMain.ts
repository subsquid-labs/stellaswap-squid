import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x9a8693c6f7bf0f44e885118f3f83e2cdb4e611b8'
import {TimelockMainEventCancelTransaction, TimelockMainEventExecuteTransaction, TimelockMainEventNewAdmin, TimelockMainEventNewDelay, TimelockMainEventNewPendingAdmin, TimelockMainEventQueueTransaction, TimelockMainFunctionAcceptAdmin, TimelockMainFunctionCancelTransaction, TimelockMainFunctionExecuteTransaction, TimelockMainFunctionQueueTransaction, TimelockMainFunctionSetDelay, TimelockMainFunctionSetPendingAdmin} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x9a8693c6f7bf0f44e885118f3f83e2cdb4e611b8'

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
                return new TimelockMainEventCancelTransaction({
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
                return new TimelockMainEventExecuteTransaction({
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
                return new TimelockMainEventNewAdmin({
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
                return new TimelockMainEventNewDelay({
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
                return new TimelockMainEventNewPendingAdmin({
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
                return new TimelockMainEventQueueTransaction({
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
                return new TimelockMainFunctionAcceptAdmin({
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
                return new TimelockMainFunctionCancelTransaction({
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
                return new TimelockMainFunctionExecuteTransaction({
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
                return new TimelockMainFunctionQueueTransaction({
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
                return new TimelockMainFunctionSetDelay({
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
                return new TimelockMainFunctionSetPendingAdmin({
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
