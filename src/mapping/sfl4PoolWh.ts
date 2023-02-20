import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0xb1bc9f56103175193519ae1540a0a4572b1566f6'
import {Sfl4PoolWhEventAddLiquidity, Sfl4PoolWhEventFlashLoan, Sfl4PoolWhEventNewAdminFee, Sfl4PoolWhEventNewSwapFee, Sfl4PoolWhEventOwnershipTransferred, Sfl4PoolWhEventPaused, Sfl4PoolWhEventRampA, Sfl4PoolWhEventRemoveLiquidity, Sfl4PoolWhEventRemoveLiquidityImbalance, Sfl4PoolWhEventRemoveLiquidityOne, Sfl4PoolWhEventStopRampA, Sfl4PoolWhEventTokenSwap, Sfl4PoolWhEventUnpaused, Sfl4PoolWhFunctionAddLiquidity, Sfl4PoolWhFunctionFlashLoan, Sfl4PoolWhFunctionInitialize, Sfl4PoolWhFunctionPause, Sfl4PoolWhFunctionRampA, Sfl4PoolWhFunctionRemoveLiquidity, Sfl4PoolWhFunctionRemoveLiquidityImbalance, Sfl4PoolWhFunctionRemoveLiquidityOneToken, Sfl4PoolWhFunctionRenounceOwnership, Sfl4PoolWhFunctionSetAdminFee, Sfl4PoolWhFunctionSetFlashLoanFees, Sfl4PoolWhFunctionSetSwapFee, Sfl4PoolWhFunctionStopRampA, Sfl4PoolWhFunctionSwap, Sfl4PoolWhFunctionToggleFlashLoan, Sfl4PoolWhFunctionTransferOwnership, Sfl4PoolWhFunctionUnpause, Sfl4PoolWhFunctionWithdrawAdminFees} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xb1bc9f56103175193519ae1540a0a4572b1566f6'

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
            case abi.events['AddLiquidity'].topic: {
                let e = normalize(abi.events['AddLiquidity'].decode(item.evmLog))
                return new Sfl4PoolWhEventAddLiquidity({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'AddLiquidity',
                    provider: e[0],
                    tokenAmounts: toJSON(e[1]),
                    fees: toJSON(e[2]),
                    invariant: e[3],
                    lpTokenSupply: e[4],
                })
            }
            case abi.events['FlashLoan'].topic: {
                let e = normalize(abi.events['FlashLoan'].decode(item.evmLog))
                return new Sfl4PoolWhEventFlashLoan({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'FlashLoan',
                    receiver: e[0],
                    tokenIndex: e[1],
                    amount: e[2],
                    amountFee: e[3],
                    protocolFee: e[4],
                })
            }
            case abi.events['NewAdminFee'].topic: {
                let e = normalize(abi.events['NewAdminFee'].decode(item.evmLog))
                return new Sfl4PoolWhEventNewAdminFee({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'NewAdminFee',
                    newAdminFee: e[0],
                })
            }
            case abi.events['NewSwapFee'].topic: {
                let e = normalize(abi.events['NewSwapFee'].decode(item.evmLog))
                return new Sfl4PoolWhEventNewSwapFee({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'NewSwapFee',
                    newSwapFee: e[0],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new Sfl4PoolWhEventOwnershipTransferred({
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
            case abi.events['Paused'].topic: {
                let e = normalize(abi.events['Paused'].decode(item.evmLog))
                return new Sfl4PoolWhEventPaused({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Paused',
                    account: e[0],
                })
            }
            case abi.events['RampA'].topic: {
                let e = normalize(abi.events['RampA'].decode(item.evmLog))
                return new Sfl4PoolWhEventRampA({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RampA',
                    oldA: e[0],
                    newA: e[1],
                    initialTime: e[2],
                    futureTime: e[3],
                })
            }
            case abi.events['RemoveLiquidity'].topic: {
                let e = normalize(abi.events['RemoveLiquidity'].decode(item.evmLog))
                return new Sfl4PoolWhEventRemoveLiquidity({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RemoveLiquidity',
                    provider: e[0],
                    tokenAmounts: toJSON(e[1]),
                    lpTokenSupply: e[2],
                })
            }
            case abi.events['RemoveLiquidityImbalance'].topic: {
                let e = normalize(abi.events['RemoveLiquidityImbalance'].decode(item.evmLog))
                return new Sfl4PoolWhEventRemoveLiquidityImbalance({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RemoveLiquidityImbalance',
                    provider: e[0],
                    tokenAmounts: toJSON(e[1]),
                    fees: toJSON(e[2]),
                    invariant: e[3],
                    lpTokenSupply: e[4],
                })
            }
            case abi.events['RemoveLiquidityOne'].topic: {
                let e = normalize(abi.events['RemoveLiquidityOne'].decode(item.evmLog))
                return new Sfl4PoolWhEventRemoveLiquidityOne({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RemoveLiquidityOne',
                    provider: e[0],
                    lpTokenAmount: e[1],
                    lpTokenSupply: e[2],
                    boughtId: e[3],
                    tokensBought: e[4],
                })
            }
            case abi.events['StopRampA'].topic: {
                let e = normalize(abi.events['StopRampA'].decode(item.evmLog))
                return new Sfl4PoolWhEventStopRampA({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'StopRampA',
                    currentA: e[0],
                    time: e[1],
                })
            }
            case abi.events['TokenSwap'].topic: {
                let e = normalize(abi.events['TokenSwap'].decode(item.evmLog))
                return new Sfl4PoolWhEventTokenSwap({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'TokenSwap',
                    buyer: e[0],
                    tokensSold: e[1],
                    tokensBought: e[2],
                    soldId: e[3],
                    boughtId: e[4],
                })
            }
            case abi.events['Unpaused'].topic: {
                let e = normalize(abi.events['Unpaused'].decode(item.evmLog))
                return new Sfl4PoolWhEventUnpaused({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Unpaused',
                    account: e[0],
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
            case abi.functions['addLiquidity'].sighash: {
                let f = normalize(abi.functions['addLiquidity'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionAddLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'addLiquidity',
                    amounts: toJSON(f[0]),
                    minToMint: f[1],
                    deadline: f[2],
                })
            }
            case abi.functions['flashLoan'].sighash: {
                let f = normalize(abi.functions['flashLoan'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionFlashLoan({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'flashLoan',
                    receiver: f[0],
                    token: f[1],
                    amount: f[2],
                    params: f[3],
                })
            }
            case abi.functions['initialize'].sighash: {
                let f = normalize(abi.functions['initialize'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionInitialize({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'initialize',
                    pooledTokens: toJSON(f[0]),
                    decimals: toJSON(f[1]),
                    lpTokenName: f[2],
                    lpTokenSymbol: f[3],
                    a: f[4],
                    fee: f[5],
                    adminFee: f[6],
                    lpTokenTargetAddress: f[7],
                })
            }
            case abi.functions['pause'].sighash: {
                return new Sfl4PoolWhFunctionPause({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'pause',
                })
            }
            case abi.functions['rampA'].sighash: {
                let f = normalize(abi.functions['rampA'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionRampA({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'rampA',
                    futureA: f[0],
                    futureTime: f[1],
                })
            }
            case abi.functions['removeLiquidity'].sighash: {
                let f = normalize(abi.functions['removeLiquidity'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionRemoveLiquidity({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidity',
                    amount: f[0],
                    minAmounts: toJSON(f[1]),
                    deadline: f[2],
                })
            }
            case abi.functions['removeLiquidityImbalance'].sighash: {
                let f = normalize(abi.functions['removeLiquidityImbalance'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionRemoveLiquidityImbalance({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityImbalance',
                    amounts: toJSON(f[0]),
                    maxBurnAmount: f[1],
                    deadline: f[2],
                })
            }
            case abi.functions['removeLiquidityOneToken'].sighash: {
                let f = normalize(abi.functions['removeLiquidityOneToken'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionRemoveLiquidityOneToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeLiquidityOneToken',
                    tokenAmount: f[0],
                    tokenIndex: f[1],
                    minAmount: f[2],
                    deadline: f[3],
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new Sfl4PoolWhFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['setAdminFee'].sighash: {
                let f = normalize(abi.functions['setAdminFee'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionSetAdminFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setAdminFee',
                    newAdminFee: f[0],
                })
            }
            case abi.functions['setFlashLoanFees'].sighash: {
                let f = normalize(abi.functions['setFlashLoanFees'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionSetFlashLoanFees({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setFlashLoanFees',
                    newFlashLoanFeeBps: f[0],
                    newProtocolFeeShareBps: f[1],
                })
            }
            case abi.functions['setSwapFee'].sighash: {
                let f = normalize(abi.functions['setSwapFee'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionSetSwapFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setSwapFee',
                    newSwapFee: f[0],
                })
            }
            case abi.functions['stopRampA'].sighash: {
                return new Sfl4PoolWhFunctionStopRampA({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'stopRampA',
                })
            }
            case abi.functions['swap'].sighash: {
                let f = normalize(abi.functions['swap'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionSwap({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'swap',
                    tokenIndexFrom: f[0],
                    tokenIndexTo: f[1],
                    dx: f[2],
                    minDy: f[3],
                    deadline: f[4],
                })
            }
            case abi.functions['toggleFlashLoan'].sighash: {
                let f = normalize(abi.functions['toggleFlashLoan'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionToggleFlashLoan({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'toggleFlashLoan',
                    enableFlashLoan: f[0],
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new Sfl4PoolWhFunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
            case abi.functions['unpause'].sighash: {
                return new Sfl4PoolWhFunctionUnpause({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'unpause',
                })
            }
            case abi.functions['withdrawAdminFees'].sighash: {
                return new Sfl4PoolWhFunctionWithdrawAdminFees({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdrawAdminFees',
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
