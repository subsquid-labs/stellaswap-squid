import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x06a3b410b681c82417a906993acefb91bab6a080'
import {XStellaEventApproval, XStellaEventTransfer, XStellaFunctionApprove, XStellaFunctionDecreaseAllowance, XStellaFunctionEnter, XStellaFunctionIncreaseAllowance, XStellaFunctionLeave, XStellaFunctionTransfer, XStellaFunctionTransferFrom} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x06a3b410b681c82417a906993acefb91bab6a080'

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
            case abi.events['Approval'].topic: {
                let e = normalize(abi.events['Approval'].decode(item.evmLog))
                return new XStellaEventApproval({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Approval',
                    owner: e[0],
                    spender: e[1],
                    value: e[2],
                })
            }
            case abi.events['Transfer'].topic: {
                let e = normalize(abi.events['Transfer'].decode(item.evmLog))
                return new XStellaEventTransfer({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Transfer',
                    from: e[0],
                    to: e[1],
                    value: e[2],
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
            case abi.functions['approve'].sighash: {
                let f = normalize(abi.functions['approve'].decode(item.transaction.input))
                return new XStellaFunctionApprove({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'approve',
                    spender: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['decreaseAllowance'].sighash: {
                let f = normalize(abi.functions['decreaseAllowance'].decode(item.transaction.input))
                return new XStellaFunctionDecreaseAllowance({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'decreaseAllowance',
                    spender: f[0],
                    subtractedValue: f[1],
                })
            }
            case abi.functions['enter'].sighash: {
                let f = normalize(abi.functions['enter'].decode(item.transaction.input))
                return new XStellaFunctionEnter({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'enter',
                    stellaAmount: f[0],
                })
            }
            case abi.functions['increaseAllowance'].sighash: {
                let f = normalize(abi.functions['increaseAllowance'].decode(item.transaction.input))
                return new XStellaFunctionIncreaseAllowance({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'increaseAllowance',
                    spender: f[0],
                    addedValue: f[1],
                })
            }
            case abi.functions['leave'].sighash: {
                let f = normalize(abi.functions['leave'].decode(item.transaction.input))
                return new XStellaFunctionLeave({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'leave',
                    xStellaAmount: f[0],
                })
            }
            case abi.functions['transfer'].sighash: {
                let f = normalize(abi.functions['transfer'].decode(item.transaction.input))
                return new XStellaFunctionTransfer({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transfer',
                    recipient: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['transferFrom'].sighash: {
                let f = normalize(abi.functions['transferFrom'].decode(item.transaction.input))
                return new XStellaFunctionTransferFrom({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferFrom',
                    sender: f[0],
                    recipient: f[1],
                    amount: f[2],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
