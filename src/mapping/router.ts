import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0xd0a01ec574d1fc6652edf79cb2f880fd47d34ab1'
import {RouterFunctionAddLiquidity, RouterFunctionAddLiquidityEth, RouterFunctionGetAmountIn, RouterFunctionGetAmountOut, RouterFunctionQuote, RouterFunctionRemoveLiquidity, RouterFunctionRemoveLiquidityEth, RouterFunctionRemoveLiquidityEthSupportingFeeOnTransfe, RouterFunctionRemoveLiquidityEthWithPermit, RouterFunctionRemoveLiquidityEthWithPermitSupportingFe, RouterFunctionRemoveLiquidityWithPermit, RouterFunctionSwapEthForExactTokens, RouterFunctionSwapExactEthForTokens, RouterFunctionSwapExactEthForTokensSupportingFeeOnTr, RouterFunctionSwapExactTokensForEth, RouterFunctionSwapExactTokensForEthSupportingFeeOnTr, RouterFunctionSwapExactTokensForTokens, RouterFunctionSwapExactTokensForTokensSupportingFeeOn, RouterFunctionSwapTokensForExactEth, RouterFunctionSwapTokensForExactTokens} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xd0a01ec574d1fc6652edf79cb2f880fd47d34ab1'

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
            case abi.functions['addLiquidity'].sighash: {
                let f = normalize(abi.functions['addLiquidity'].decode(item.transaction.input))
                return new RouterFunctionAddLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'addLiquidity',
                    tokenA: f[0],
                    tokenB: f[1],
                    amountADesired: f[2],
                    amountBDesired: f[3],
                    amountAMin: f[4],
                    amountBMin: f[5],
                    to: f[6],
                    deadline: f[7],
                })
            }
            case abi.functions['addLiquidityETH'].sighash: {
                let f = normalize(abi.functions['addLiquidityETH'].decode(item.transaction.input))
                return new RouterFunctionAddLiquidityEth({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'addLiquidityETH',
                    token: f[0],
                    amountTokenDesired: f[1],
                    amountTokenMin: f[2],
                    amountEthMin: f[3],
                    to: f[4],
                    deadline: f[5],
                })
            }
            case abi.functions['getAmountIn'].sighash: {
                let f = normalize(abi.functions['getAmountIn'].decode(item.transaction.input))
                return new RouterFunctionGetAmountIn({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'getAmountIn',
                    amountOut: f[0],
                    reserveIn: f[1],
                    reserveOut: f[2],
                })
            }
            case abi.functions['getAmountOut'].sighash: {
                let f = normalize(abi.functions['getAmountOut'].decode(item.transaction.input))
                return new RouterFunctionGetAmountOut({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'getAmountOut',
                    amountIn: f[0],
                    reserveIn: f[1],
                    reserveOut: f[2],
                })
            }
            case abi.functions['quote'].sighash: {
                let f = normalize(abi.functions['quote'].decode(item.transaction.input))
                return new RouterFunctionQuote({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'quote',
                    amountA: f[0],
                    reserveA: f[1],
                    reserveB: f[2],
                })
            }
            case abi.functions['removeLiquidity'].sighash: {
                let f = normalize(abi.functions['removeLiquidity'].decode(item.transaction.input))
                return new RouterFunctionRemoveLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidity',
                    tokenA: f[0],
                    tokenB: f[1],
                    liquidity: f[2],
                    amountAMin: f[3],
                    amountBMin: f[4],
                    to: f[5],
                    deadline: f[6],
                })
            }
            case abi.functions['removeLiquidityETH'].sighash: {
                let f = normalize(abi.functions['removeLiquidityETH'].decode(item.transaction.input))
                return new RouterFunctionRemoveLiquidityEth({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityETH',
                    token: f[0],
                    liquidity: f[1],
                    amountTokenMin: f[2],
                    amountEthMin: f[3],
                    to: f[4],
                    deadline: f[5],
                })
            }
            case abi.functions['removeLiquidityETHSupportingFeeOnTransferTokens'].sighash: {
                let f = normalize(abi.functions['removeLiquidityETHSupportingFeeOnTransferTokens'].decode(item.transaction.input))
                return new RouterFunctionRemoveLiquidityEthSupportingFeeOnTransfe({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
                    token: f[0],
                    liquidity: f[1],
                    amountTokenMin: f[2],
                    amountEthMin: f[3],
                    to: f[4],
                    deadline: f[5],
                })
            }
            case abi.functions['removeLiquidityETHWithPermit'].sighash: {
                let f = normalize(abi.functions['removeLiquidityETHWithPermit'].decode(item.transaction.input))
                return new RouterFunctionRemoveLiquidityEthWithPermit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityETHWithPermit',
                    token: f[0],
                    liquidity: f[1],
                    amountTokenMin: f[2],
                    amountEthMin: f[3],
                    to: f[4],
                    deadline: f[5],
                    approveMax: f[6],
                    v: f[7],
                    r: f[8],
                    s: f[9],
                })
            }
            case abi.functions['removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'].sighash: {
                let f = normalize(abi.functions['removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'].decode(item.transaction.input))
                return new RouterFunctionRemoveLiquidityEthWithPermitSupportingFe({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
                    token: f[0],
                    liquidity: f[1],
                    amountTokenMin: f[2],
                    amountEthMin: f[3],
                    to: f[4],
                    deadline: f[5],
                    approveMax: f[6],
                    v: f[7],
                    r: f[8],
                    s: f[9],
                })
            }
            case abi.functions['removeLiquidityWithPermit'].sighash: {
                let f = normalize(abi.functions['removeLiquidityWithPermit'].decode(item.transaction.input))
                return new RouterFunctionRemoveLiquidityWithPermit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityWithPermit',
                    tokenA: f[0],
                    tokenB: f[1],
                    liquidity: f[2],
                    amountAMin: f[3],
                    amountBMin: f[4],
                    to: f[5],
                    deadline: f[6],
                    approveMax: f[7],
                    v: f[8],
                    r: f[9],
                    s: f[10],
                })
            }
            case abi.functions['swapETHForExactTokens'].sighash: {
                let f = normalize(abi.functions['swapETHForExactTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapEthForExactTokens({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapETHForExactTokens',
                    amountOut: f[0],
                    path: toJSON(f[1]),
                    to: f[2],
                    deadline: f[3],
                })
            }
            case abi.functions['swapExactETHForTokens'].sighash: {
                let f = normalize(abi.functions['swapExactETHForTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapExactEthForTokens({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapExactETHForTokens',
                    amountOutMin: f[0],
                    path: toJSON(f[1]),
                    to: f[2],
                    deadline: f[3],
                })
            }
            case abi.functions['swapExactETHForTokensSupportingFeeOnTransferTokens'].sighash: {
                let f = normalize(abi.functions['swapExactETHForTokensSupportingFeeOnTransferTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapExactEthForTokensSupportingFeeOnTr({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
                    amountOutMin: f[0],
                    path: toJSON(f[1]),
                    to: f[2],
                    deadline: f[3],
                })
            }
            case abi.functions['swapExactTokensForETH'].sighash: {
                let f = normalize(abi.functions['swapExactTokensForETH'].decode(item.transaction.input))
                return new RouterFunctionSwapExactTokensForEth({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapExactTokensForETH',
                    amountIn: f[0],
                    amountOutMin: f[1],
                    path: toJSON(f[2]),
                    to: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['swapExactTokensForETHSupportingFeeOnTransferTokens'].sighash: {
                let f = normalize(abi.functions['swapExactTokensForETHSupportingFeeOnTransferTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapExactTokensForEthSupportingFeeOnTr({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
                    amountIn: f[0],
                    amountOutMin: f[1],
                    path: toJSON(f[2]),
                    to: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['swapExactTokensForTokens'].sighash: {
                let f = normalize(abi.functions['swapExactTokensForTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapExactTokensForTokens({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapExactTokensForTokens',
                    amountIn: f[0],
                    amountOutMin: f[1],
                    path: toJSON(f[2]),
                    to: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['swapExactTokensForTokensSupportingFeeOnTransferTokens'].sighash: {
                let f = normalize(abi.functions['swapExactTokensForTokensSupportingFeeOnTransferTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapExactTokensForTokensSupportingFeeOn({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
                    amountIn: f[0],
                    amountOutMin: f[1],
                    path: toJSON(f[2]),
                    to: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['swapTokensForExactETH'].sighash: {
                let f = normalize(abi.functions['swapTokensForExactETH'].decode(item.transaction.input))
                return new RouterFunctionSwapTokensForExactEth({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapTokensForExactETH',
                    amountOut: f[0],
                    amountInMax: f[1],
                    path: toJSON(f[2]),
                    to: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['swapTokensForExactTokens'].sighash: {
                let f = normalize(abi.functions['swapTokensForExactTokens'].decode(item.transaction.input))
                return new RouterFunctionSwapTokensForExactTokens({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapTokensForExactTokens',
                    amountOut: f[0],
                    amountInMax: f[1],
                    path: toJSON(f[2]),
                    to: f[3],
                    deadline: f[4],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
