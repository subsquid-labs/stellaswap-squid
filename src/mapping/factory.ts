import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x68a384d826d3678f78bb9fb1533c7e9577dacc0e'
import {FactoryEventPairCreated, FactoryFunctionCreatePair, FactoryFunctionPairCodeHash, FactoryFunctionSetDevFee, FactoryFunctionSetFeeTo, FactoryFunctionSetFeeToSetter, FactoryFunctionSetMigrator, FactoryFunctionSetSwapFee} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x68a384d826d3678f78bb9fb1533c7e9577dacc0e'

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
            case abi.events['PairCreated'].topic: {
                let e = normalize(abi.events['PairCreated'].decode(item.evmLog))
                return new FactoryEventPairCreated({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'PairCreated',
                    token0: e[0],
                    token1: e[1],
                    pair: e[2],
                    arg3: e[3],
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
            case abi.functions['createPair'].sighash: {
                let f = normalize(abi.functions['createPair'].decode(item.transaction.input))
                return new FactoryFunctionCreatePair({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'createPair',
                    tokenA: f[0],
                    tokenB: f[1],
                })
            }
            case abi.functions['pairCodeHash'].sighash: {
                return new FactoryFunctionPairCodeHash({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'pairCodeHash',
                })
            }
            case abi.functions['setDevFee'].sighash: {
                let f = normalize(abi.functions['setDevFee'].decode(item.transaction.input))
                return new FactoryFunctionSetDevFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setDevFee',
                    pair: f[0],
                    devFee: f[1],
                })
            }
            case abi.functions['setFeeTo'].sighash: {
                let f = normalize(abi.functions['setFeeTo'].decode(item.transaction.input))
                return new FactoryFunctionSetFeeTo({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setFeeTo',
                    feeTo: f[0],
                })
            }
            case abi.functions['setFeeToSetter'].sighash: {
                let f = normalize(abi.functions['setFeeToSetter'].decode(item.transaction.input))
                return new FactoryFunctionSetFeeToSetter({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setFeeToSetter',
                    feeToSetter: f[0],
                })
            }
            case abi.functions['setMigrator'].sighash: {
                let f = normalize(abi.functions['setMigrator'].decode(item.transaction.input))
                return new FactoryFunctionSetMigrator({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setMigrator',
                    migrator: f[0],
                })
            }
            case abi.functions['setSwapFee'].sighash: {
                let f = normalize(abi.functions['setSwapFee'].decode(item.transaction.input))
                return new FactoryFunctionSetSwapFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setSwapFee',
                    pair: f[0],
                    swapFee: f[1],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
