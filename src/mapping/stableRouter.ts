import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0xb0dfd6f3fddb219e60fcdc1ea3d04b22f2ffa9cc'
import {StableRouterFunctionAddLiquidity, StableRouterFunctionConvert, StableRouterFunctionRemoveBaseLiquidityOneToken, StableRouterFunctionRemoveLiquidity, StableRouterFunctionSwapFromBase, StableRouterFunctionSwapToBase} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xb0dfd6f3fddb219e60fcdc1ea3d04b22f2ffa9cc'

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
                return new StableRouterFunctionAddLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'addLiquidity',
                    pool: f[0],
                    basePool: f[1],
                    metaAmounts: toJSON(f[2]),
                    baseAmounts: toJSON(f[3]),
                    minToMint: f[4],
                    deadline: f[5],
                })
            }
            case abi.functions['convert'].sighash: {
                let f = normalize(abi.functions['convert'].decode(item.transaction.input))
                return new StableRouterFunctionConvert({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'convert',
                    fromPool: f[0],
                    toPool: f[1],
                    amount: f[2],
                    minToMint: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['removeBaseLiquidityOneToken'].sighash: {
                let f = normalize(abi.functions['removeBaseLiquidityOneToken'].decode(item.transaction.input))
                return new StableRouterFunctionRemoveBaseLiquidityOneToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeBaseLiquidityOneToken',
                    pool: f[0],
                    basePool: f[1],
                    tokenAmount: f[2],
                    i: f[3],
                    minAmount: f[4],
                    deadline: f[5],
                })
            }
            case abi.functions['removeLiquidity'].sighash: {
                let f = normalize(abi.functions['removeLiquidity'].decode(item.transaction.input))
                return new StableRouterFunctionRemoveLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidity',
                    pool: f[0],
                    basePool: f[1],
                    amount: f[2],
                    minAmountsMeta: toJSON(f[3]),
                    minAmountsBase: toJSON(f[4]),
                    deadline: f[5],
                })
            }
            case abi.functions['swapFromBase'].sighash: {
                let f = normalize(abi.functions['swapFromBase'].decode(item.transaction.input))
                return new StableRouterFunctionSwapFromBase({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapFromBase',
                    pool: f[0],
                    basePool: f[1],
                    tokenIndexFrom: f[2],
                    tokenIndexTo: f[3],
                    dx: f[4],
                    minDy: f[5],
                    deadline: f[6],
                })
            }
            case abi.functions['swapToBase'].sighash: {
                let f = normalize(abi.functions['swapToBase'].decode(item.transaction.input))
                return new StableRouterFunctionSwapToBase({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swapToBase',
                    pool: f[0],
                    basePool: f[1],
                    tokenIndexFrom: f[2],
                    tokenIndexTo: f[3],
                    dx: f[4],
                    minDy: f[5],
                    deadline: f[6],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
