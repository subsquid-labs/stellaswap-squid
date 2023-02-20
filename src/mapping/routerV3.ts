import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0xe6d0ed3759709b743707dcfecae39bc180c981fe'
import {RouterV3FunctionAlgebraSwapCallback, RouterV3FunctionExactInput, RouterV3FunctionExactInputSingle, RouterV3FunctionExactInputSingleSupportingFeeOnTransf, RouterV3FunctionExactOutput, RouterV3FunctionExactOutputSingle, RouterV3FunctionMulticall, RouterV3FunctionRefundNativeToken, RouterV3FunctionSelfPermit, RouterV3FunctionSelfPermitAllowed, RouterV3FunctionSelfPermitAllowedIfNecessary, RouterV3FunctionSelfPermitIfNecessary, RouterV3FunctionSweepToken, RouterV3FunctionSweepTokenWithFee, RouterV3FunctionUnwrapWNativeToken, RouterV3FunctionUnwrapWNativeTokenWithFee} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xe6d0ed3759709b743707dcfecae39bc180c981fe'

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
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode event "${item.evmLog.topics[0]}"`)
    }
}

function parseFunction(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: FunctionItem) {
    try {
        switch (item.transaction.input.slice(0, 10)) {
            case abi.functions['algebraSwapCallback'].sighash: {
                let f = normalize(abi.functions['algebraSwapCallback'].decode(item.transaction.input))
                return new RouterV3FunctionAlgebraSwapCallback({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'algebraSwapCallback',
                    amount0Delta: f[0],
                    amount1Delta: f[1],
                    data: f[2],
                })
            }
            case abi.functions['exactInput'].sighash: {
                let f = normalize(abi.functions['exactInput'].decode(item.transaction.input))
                return new RouterV3FunctionExactInput({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'exactInput',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['exactInputSingle'].sighash: {
                let f = normalize(abi.functions['exactInputSingle'].decode(item.transaction.input))
                return new RouterV3FunctionExactInputSingle({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'exactInputSingle',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['exactInputSingleSupportingFeeOnTransferTokens'].sighash: {
                let f = normalize(abi.functions['exactInputSingleSupportingFeeOnTransferTokens'].decode(item.transaction.input))
                return new RouterV3FunctionExactInputSingleSupportingFeeOnTransf({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'exactInputSingleSupportingFeeOnTransferTokens',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['exactOutput'].sighash: {
                let f = normalize(abi.functions['exactOutput'].decode(item.transaction.input))
                return new RouterV3FunctionExactOutput({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'exactOutput',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['exactOutputSingle'].sighash: {
                let f = normalize(abi.functions['exactOutputSingle'].decode(item.transaction.input))
                return new RouterV3FunctionExactOutputSingle({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'exactOutputSingle',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['multicall'].sighash: {
                let f = normalize(abi.functions['multicall'].decode(item.transaction.input))
                return new RouterV3FunctionMulticall({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'multicall',
                    data: toJSON(f[0]),
                })
            }
            case abi.functions['refundNativeToken'].sighash: {
                return new RouterV3FunctionRefundNativeToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'refundNativeToken',
                })
            }
            case abi.functions['selfPermit'].sighash: {
                let f = normalize(abi.functions['selfPermit'].decode(item.transaction.input))
                return new RouterV3FunctionSelfPermit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'selfPermit',
                    token: f[0],
                    value: f[1],
                    deadline: f[2],
                    v: f[3],
                    r: f[4],
                    s: f[5],
                })
            }
            case abi.functions['selfPermitAllowed'].sighash: {
                let f = normalize(abi.functions['selfPermitAllowed'].decode(item.transaction.input))
                return new RouterV3FunctionSelfPermitAllowed({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'selfPermitAllowed',
                    token: f[0],
                    nonce: f[1],
                    expiry: f[2],
                    v: f[3],
                    r: f[4],
                    s: f[5],
                })
            }
            case abi.functions['selfPermitAllowedIfNecessary'].sighash: {
                let f = normalize(abi.functions['selfPermitAllowedIfNecessary'].decode(item.transaction.input))
                return new RouterV3FunctionSelfPermitAllowedIfNecessary({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'selfPermitAllowedIfNecessary',
                    token: f[0],
                    nonce: f[1],
                    expiry: f[2],
                    v: f[3],
                    r: f[4],
                    s: f[5],
                })
            }
            case abi.functions['selfPermitIfNecessary'].sighash: {
                let f = normalize(abi.functions['selfPermitIfNecessary'].decode(item.transaction.input))
                return new RouterV3FunctionSelfPermitIfNecessary({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'selfPermitIfNecessary',
                    token: f[0],
                    value: f[1],
                    deadline: f[2],
                    v: f[3],
                    r: f[4],
                    s: f[5],
                })
            }
            case abi.functions['sweepToken'].sighash: {
                let f = normalize(abi.functions['sweepToken'].decode(item.transaction.input))
                return new RouterV3FunctionSweepToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'sweepToken',
                    token: f[0],
                    amountMinimum: f[1],
                    recipient: f[2],
                })
            }
            case abi.functions['sweepTokenWithFee'].sighash: {
                let f = normalize(abi.functions['sweepTokenWithFee'].decode(item.transaction.input))
                return new RouterV3FunctionSweepTokenWithFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'sweepTokenWithFee',
                    token: f[0],
                    amountMinimum: f[1],
                    recipient: f[2],
                    feeBips: f[3],
                    feeRecipient: f[4],
                })
            }
            case abi.functions['unwrapWNativeToken'].sighash: {
                let f = normalize(abi.functions['unwrapWNativeToken'].decode(item.transaction.input))
                return new RouterV3FunctionUnwrapWNativeToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'unwrapWNativeToken',
                    amountMinimum: f[0],
                    recipient: f[1],
                })
            }
            case abi.functions['unwrapWNativeTokenWithFee'].sighash: {
                let f = normalize(abi.functions['unwrapWNativeTokenWithFee'].decode(item.transaction.input))
                return new RouterV3FunctionUnwrapWNativeTokenWithFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'unwrapWNativeTokenWithFee',
                    amountMinimum: f[0],
                    recipient: f[1],
                    feeBips: f[2],
                    feeRecipient: f[3],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
