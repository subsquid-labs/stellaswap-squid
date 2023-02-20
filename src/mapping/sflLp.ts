import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0xa0aa99f71033378864ed6e499eb03612264e319a'
import {SflLpEventApproval, SflLpEventOwnershipTransferred, SflLpEventTransfer, SflLpFunctionApprove, SflLpFunctionBurn, SflLpFunctionBurnFrom, SflLpFunctionDecreaseAllowance, SflLpFunctionIncreaseAllowance, SflLpFunctionInitialize, SflLpFunctionMint, SflLpFunctionPermit, SflLpFunctionRenounceOwnership, SflLpFunctionTransfer, SflLpFunctionTransferFrom, SflLpFunctionTransferOwnership} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xa0aa99f71033378864ed6e499eb03612264e319a'

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
                return new SflLpEventApproval({
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
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new SflLpEventOwnershipTransferred({
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
            case abi.events['Transfer'].topic: {
                let e = normalize(abi.events['Transfer'].decode(item.evmLog))
                return new SflLpEventTransfer({
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
                return new SflLpFunctionApprove({
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
            case abi.functions['burn'].sighash: {
                let f = normalize(abi.functions['burn'].decode(item.transaction.input))
                return new SflLpFunctionBurn({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'burn',
                    amount: f[0],
                })
            }
            case abi.functions['burnFrom'].sighash: {
                let f = normalize(abi.functions['burnFrom'].decode(item.transaction.input))
                return new SflLpFunctionBurnFrom({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'burnFrom',
                    account: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['decreaseAllowance'].sighash: {
                let f = normalize(abi.functions['decreaseAllowance'].decode(item.transaction.input))
                return new SflLpFunctionDecreaseAllowance({
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
            case abi.functions['increaseAllowance'].sighash: {
                let f = normalize(abi.functions['increaseAllowance'].decode(item.transaction.input))
                return new SflLpFunctionIncreaseAllowance({
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
            case abi.functions['initialize'].sighash: {
                let f = normalize(abi.functions['initialize'].decode(item.transaction.input))
                return new SflLpFunctionInitialize({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'initialize',
                    name0: f[0],
                    symbol: f[1],
                })
            }
            case abi.functions['mint'].sighash: {
                let f = normalize(abi.functions['mint'].decode(item.transaction.input))
                return new SflLpFunctionMint({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'mint',
                    recipient: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['permit'].sighash: {
                let f = normalize(abi.functions['permit'].decode(item.transaction.input))
                return new SflLpFunctionPermit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'permit',
                    owner: f[0],
                    spender: f[1],
                    value: f[2],
                    deadline: f[3],
                    v: f[4],
                    r: f[5],
                    s: f[6],
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new SflLpFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['transfer'].sighash: {
                let f = normalize(abi.functions['transfer'].decode(item.transaction.input))
                return new SflLpFunctionTransfer({
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
                return new SflLpFunctionTransferFrom({
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
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new SflLpFunctionTransferOwnership({
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
