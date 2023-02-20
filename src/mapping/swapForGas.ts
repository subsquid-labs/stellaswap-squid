import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0xb64dee2d182fed3dd6c273303fb08f11808c9c23'
import {SwapForGasEventMetaTransactionExecuted, SwapForGasEventOwnershipTransferred, SwapForGasFunctionChangeFeeAddress, SwapForGasFunctionChangeFeePercent, SwapForGasFunctionChangeRouter, SwapForGasFunctionExecuteMetaTransaction, SwapForGasFunctionRenounceOwnership, SwapForGasFunctionSwap, SwapForGasFunctionTransferOwnership, SwapForGasFunctionWhitelistToken, SwapForGasFunctionWithdrawEth, SwapForGasFunctionWithdrawToken} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xb64dee2d182fed3dd6c273303fb08f11808c9c23'

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
            case abi.events['MetaTransactionExecuted'].topic: {
                let e = normalize(abi.events['MetaTransactionExecuted'].decode(item.evmLog))
                return new SwapForGasEventMetaTransactionExecuted({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'MetaTransactionExecuted',
                    userAddress: e[0],
                    relayerAddress: e[1],
                    functionSignature: e[2],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new SwapForGasEventOwnershipTransferred({
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
            case abi.functions['changeFeeAddress'].sighash: {
                let f = normalize(abi.functions['changeFeeAddress'].decode(item.transaction.input))
                return new SwapForGasFunctionChangeFeeAddress({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'changeFeeAddress',
                    newFeeAddress: f[0],
                })
            }
            case abi.functions['changeFeePercent'].sighash: {
                let f = normalize(abi.functions['changeFeePercent'].decode(item.transaction.input))
                return new SwapForGasFunctionChangeFeePercent({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'changeFeePercent',
                    newFeePercent: f[0],
                })
            }
            case abi.functions['changeRouter'].sighash: {
                let f = normalize(abi.functions['changeRouter'].decode(item.transaction.input))
                return new SwapForGasFunctionChangeRouter({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'changeRouter',
                    newTarget: f[0],
                })
            }
            case abi.functions['executeMetaTransaction'].sighash: {
                let f = normalize(abi.functions['executeMetaTransaction'].decode(item.transaction.input))
                return new SwapForGasFunctionExecuteMetaTransaction({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'executeMetaTransaction',
                    userAddress: f[0],
                    functionSignature: f[1],
                    sigR: f[2],
                    sigS: f[3],
                    sigV: f[4],
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new SwapForGasFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['swap'].sighash: {
                let f = normalize(abi.functions['swap'].decode(item.transaction.input))
                return new SwapForGasFunctionSwap({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swap',
                    swapCallData: f[0],
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new SwapForGasFunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
            case abi.functions['whitelistToken'].sighash: {
                let f = normalize(abi.functions['whitelistToken'].decode(item.transaction.input))
                return new SwapForGasFunctionWhitelistToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'whitelistToken',
                    tokenAddress: f[0],
                    whitelisted: f[1],
                })
            }
            case abi.functions['withdrawETH'].sighash: {
                let f = normalize(abi.functions['withdrawETH'].decode(item.transaction.input))
                return new SwapForGasFunctionWithdrawEth({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdrawETH',
                    amount: f[0],
                })
            }
            case abi.functions['withdrawToken'].sighash: {
                let f = normalize(abi.functions['withdrawToken'].decode(item.transaction.input))
                return new SwapForGasFunctionWithdrawToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdrawToken',
                    token: f[0],
                    amount: f[1],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
