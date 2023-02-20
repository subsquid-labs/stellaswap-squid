import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0x1ff2adaa387dd27c22b31086e658108588eda03a'
import {PositionManagerEventApproval, PositionManagerEventApprovalForAll, PositionManagerEventCollect, PositionManagerEventDecreaseLiquidity, PositionManagerEventIncreaseLiquidity, PositionManagerEventTransfer, PositionManagerFunctionAlgebraMintCallback, PositionManagerFunctionApprove, PositionManagerFunctionBaseUri, PositionManagerFunctionBurn, PositionManagerFunctionCollect, PositionManagerFunctionCreateAndInitializePoolIfNecess, PositionManagerFunctionDecreaseLiquidity, PositionManagerFunctionIncreaseLiquidity, PositionManagerFunctionMint, PositionManagerFunctionMulticall, PositionManagerFunctionPermit, PositionManagerFunctionRefundNativeToken, PositionManagerFunctionSafeTransferFrom0, PositionManagerFunctionSafeTransferFrom1, PositionManagerFunctionSelfPermit, PositionManagerFunctionSelfPermitAllowed, PositionManagerFunctionSelfPermitAllowedIfNecessary, PositionManagerFunctionSelfPermitIfNecessary, PositionManagerFunctionSetApprovalForAll, PositionManagerFunctionSweepToken, PositionManagerFunctionTransferFrom, PositionManagerFunctionUnwrapWNativeToken} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x1ff2adaa387dd27c22b31086e658108588eda03a'

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
                return new PositionManagerEventApproval({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Approval',
                    owner: e[0],
                    approved: e[1],
                    tokenId: e[2],
                })
            }
            case abi.events['ApprovalForAll'].topic: {
                let e = normalize(abi.events['ApprovalForAll'].decode(item.evmLog))
                return new PositionManagerEventApprovalForAll({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'ApprovalForAll',
                    owner: e[0],
                    operator: e[1],
                    approved: e[2],
                })
            }
            case abi.events['Collect'].topic: {
                let e = normalize(abi.events['Collect'].decode(item.evmLog))
                return new PositionManagerEventCollect({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Collect',
                    tokenId: e[0],
                    recipient: e[1],
                    amount0: e[2],
                    amount1: e[3],
                })
            }
            case abi.events['DecreaseLiquidity'].topic: {
                let e = normalize(abi.events['DecreaseLiquidity'].decode(item.evmLog))
                return new PositionManagerEventDecreaseLiquidity({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'DecreaseLiquidity',
                    tokenId: e[0],
                    liquidity: e[1],
                    amount0: e[2],
                    amount1: e[3],
                })
            }
            case abi.events['IncreaseLiquidity'].topic: {
                let e = normalize(abi.events['IncreaseLiquidity'].decode(item.evmLog))
                return new PositionManagerEventIncreaseLiquidity({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'IncreaseLiquidity',
                    tokenId: e[0],
                    liquidity: e[1],
                    actualLiquidity: e[2],
                    amount0: e[3],
                    amount1: e[4],
                    pool: e[5],
                })
            }
            case abi.events['Transfer'].topic: {
                let e = normalize(abi.events['Transfer'].decode(item.evmLog))
                return new PositionManagerEventTransfer({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Transfer',
                    from: e[0],
                    to: e[1],
                    tokenId: e[2],
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
            case abi.functions['algebraMintCallback'].sighash: {
                let f = normalize(abi.functions['algebraMintCallback'].decode(item.transaction.input))
                return new PositionManagerFunctionAlgebraMintCallback({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'algebraMintCallback',
                    amount0Owed: f[0],
                    amount1Owed: f[1],
                    data: f[2],
                })
            }
            case abi.functions['approve'].sighash: {
                let f = normalize(abi.functions['approve'].decode(item.transaction.input))
                return new PositionManagerFunctionApprove({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'approve',
                    to: f[0],
                    tokenId: f[1],
                })
            }
            case abi.functions['baseURI'].sighash: {
                return new PositionManagerFunctionBaseUri({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'baseURI',
                })
            }
            case abi.functions['burn'].sighash: {
                let f = normalize(abi.functions['burn'].decode(item.transaction.input))
                return new PositionManagerFunctionBurn({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'burn',
                    tokenId: f[0],
                })
            }
            case abi.functions['collect'].sighash: {
                let f = normalize(abi.functions['collect'].decode(item.transaction.input))
                return new PositionManagerFunctionCollect({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'collect',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['createAndInitializePoolIfNecessary'].sighash: {
                let f = normalize(abi.functions['createAndInitializePoolIfNecessary'].decode(item.transaction.input))
                return new PositionManagerFunctionCreateAndInitializePoolIfNecess({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'createAndInitializePoolIfNecessary',
                    token0: f[0],
                    token1: f[1],
                    sqrtPriceX96: f[2],
                })
            }
            case abi.functions['decreaseLiquidity'].sighash: {
                let f = normalize(abi.functions['decreaseLiquidity'].decode(item.transaction.input))
                return new PositionManagerFunctionDecreaseLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'decreaseLiquidity',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['increaseLiquidity'].sighash: {
                let f = normalize(abi.functions['increaseLiquidity'].decode(item.transaction.input))
                return new PositionManagerFunctionIncreaseLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'increaseLiquidity',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['mint'].sighash: {
                let f = normalize(abi.functions['mint'].decode(item.transaction.input))
                return new PositionManagerFunctionMint({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'mint',
                    params: toJSON(f[0]),
                })
            }
            case abi.functions['multicall'].sighash: {
                let f = normalize(abi.functions['multicall'].decode(item.transaction.input))
                return new PositionManagerFunctionMulticall({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'multicall',
                    data: toJSON(f[0]),
                })
            }
            case abi.functions['permit'].sighash: {
                let f = normalize(abi.functions['permit'].decode(item.transaction.input))
                return new PositionManagerFunctionPermit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'permit',
                    spender: f[0],
                    tokenId: f[1],
                    deadline: f[2],
                    v: f[3],
                    r: f[4],
                    s: f[5],
                })
            }
            case abi.functions['refundNativeToken'].sighash: {
                return new PositionManagerFunctionRefundNativeToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'refundNativeToken',
                })
            }
            case abi.functions['safeTransferFrom(address,address,uint256)'].sighash: {
                let f = normalize(abi.functions['safeTransferFrom(address,address,uint256)'].decode(item.transaction.input))
                return new PositionManagerFunctionSafeTransferFrom0({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'safeTransferFrom(address,address,uint256)',
                    from: f[0],
                    to: f[1],
                    tokenId: f[2],
                })
            }
            case abi.functions['safeTransferFrom(address,address,uint256,bytes)'].sighash: {
                let f = normalize(abi.functions['safeTransferFrom(address,address,uint256,bytes)'].decode(item.transaction.input))
                return new PositionManagerFunctionSafeTransferFrom1({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'safeTransferFrom(address,address,uint256,bytes)',
                    from: f[0],
                    to: f[1],
                    tokenId: f[2],
                    data: f[3],
                })
            }
            case abi.functions['selfPermit'].sighash: {
                let f = normalize(abi.functions['selfPermit'].decode(item.transaction.input))
                return new PositionManagerFunctionSelfPermit({
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
                return new PositionManagerFunctionSelfPermitAllowed({
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
                return new PositionManagerFunctionSelfPermitAllowedIfNecessary({
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
                return new PositionManagerFunctionSelfPermitIfNecessary({
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
            case abi.functions['setApprovalForAll'].sighash: {
                let f = normalize(abi.functions['setApprovalForAll'].decode(item.transaction.input))
                return new PositionManagerFunctionSetApprovalForAll({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setApprovalForAll',
                    operator: f[0],
                    approved: f[1],
                })
            }
            case abi.functions['sweepToken'].sighash: {
                let f = normalize(abi.functions['sweepToken'].decode(item.transaction.input))
                return new PositionManagerFunctionSweepToken({
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
            case abi.functions['transferFrom'].sighash: {
                let f = normalize(abi.functions['transferFrom'].decode(item.transaction.input))
                return new PositionManagerFunctionTransferFrom({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferFrom',
                    from: f[0],
                    to: f[1],
                    tokenId: f[2],
                })
            }
            case abi.functions['unwrapWNativeToken'].sighash: {
                let f = normalize(abi.functions['unwrapWNativeToken'].decode(item.transaction.input))
                return new PositionManagerFunctionUnwrapWNativeToken({
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
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
