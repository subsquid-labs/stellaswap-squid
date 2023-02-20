import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0xa6ec79c97e533e7bddb00898e22c6908742e039b'
import {EthMadGlmrRewarder2EventAddPool, EthMadGlmrRewarder2EventAddRewardInfo, EthMadGlmrRewarder2EventOnReward, EthMadGlmrRewarder2EventOwnershipTransferred, EthMadGlmrRewarder2EventRewardRateUpdated, EthMadGlmrRewarder2EventSetPool, EthMadGlmrRewarder2EventUpdatePool, EthMadGlmrRewarder2FunctionGetTimeElapsed, EthMadGlmrRewarder2FunctionUpdatePool0, EthMadGlmrRewarder2FunctionAdd, EthMadGlmrRewarder2FunctionAddRewardInfo, EthMadGlmrRewarder2FunctionEmergencyRewardWithdraw, EthMadGlmrRewarder2FunctionInCaseTokensGetStuck, EthMadGlmrRewarder2FunctionMassUpdatePools, EthMadGlmrRewarder2FunctionOnStellaReward, EthMadGlmrRewarder2FunctionRenounceOwnership, EthMadGlmrRewarder2FunctionTransferOwnership, EthMadGlmrRewarder2FunctionUpdatePool1} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xa6ec79c97e533e7bddb00898e22c6908742e039b'

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
            case abi.events['AddPool'].topic: {
                let e = normalize(abi.events['AddPool'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventAddPool({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'AddPool',
                    pid: e[0],
                    allocPoint: e[1],
                })
            }
            case abi.events['AddRewardInfo'].topic: {
                let e = normalize(abi.events['AddRewardInfo'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventAddRewardInfo({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'AddRewardInfo',
                    pid: e[0],
                    phase: e[1],
                    endTimestamp: e[2],
                    rewardPerSec: e[3],
                })
            }
            case abi.events['OnReward'].topic: {
                let e = normalize(abi.events['OnReward'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventOnReward({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'OnReward',
                    user: e[0],
                    amount: e[1],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventOwnershipTransferred({
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
            case abi.events['RewardRateUpdated'].topic: {
                let e = normalize(abi.events['RewardRateUpdated'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventRewardRateUpdated({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RewardRateUpdated',
                    oldRate: e[0],
                    newRate: e[1],
                })
            }
            case abi.events['SetPool'].topic: {
                let e = normalize(abi.events['SetPool'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventSetPool({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetPool',
                    pid: e[0],
                    allocPoint: e[1],
                })
            }
            case abi.events['UpdatePool'].topic: {
                let e = normalize(abi.events['UpdatePool'].decode(item.evmLog))
                return new EthMadGlmrRewarder2EventUpdatePool({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatePool',
                    pid: e[0],
                    lastRewardTimestamp: e[1],
                    lpSupply: e[2],
                    accTokenPerShare: e[3],
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
            case abi.functions['_getTimeElapsed'].sighash: {
                let f = normalize(abi.functions['_getTimeElapsed'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionGetTimeElapsed({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: '_getTimeElapsed',
                    from: f[0],
                    to: f[1],
                    endTimestamp: f[2],
                })
            }
            case abi.functions['_updatePool'].sighash: {
                let f = normalize(abi.functions['_updatePool'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionUpdatePool0({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: '_updatePool',
                    pid: f[0],
                })
            }
            case abi.functions['add'].sighash: {
                let f = normalize(abi.functions['add'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionAdd({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'add',
                    pid: f[0],
                    allocPoint: f[1],
                    startTimestamp: f[2],
                })
            }
            case abi.functions['addRewardInfo'].sighash: {
                let f = normalize(abi.functions['addRewardInfo'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionAddRewardInfo({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'addRewardInfo',
                    pid: f[0],
                    endTimestamp: f[1],
                    rewardPerSec: f[2],
                })
            }
            case abi.functions['emergencyRewardWithdraw'].sighash: {
                let f = normalize(abi.functions['emergencyRewardWithdraw'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionEmergencyRewardWithdraw({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'emergencyRewardWithdraw',
                    pid: f[0],
                    amount: f[1],
                    beneficiary: f[2],
                })
            }
            case abi.functions['inCaseTokensGetStuck'].sighash: {
                let f = normalize(abi.functions['inCaseTokensGetStuck'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionInCaseTokensGetStuck({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'inCaseTokensGetStuck',
                    token: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['massUpdatePools'].sighash: {
                return new EthMadGlmrRewarder2FunctionMassUpdatePools({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'massUpdatePools',
                })
            }
            case abi.functions['onStellaReward'].sighash: {
                let f = normalize(abi.functions['onStellaReward'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionOnStellaReward({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'onStellaReward',
                    pid: f[0],
                    user: f[1],
                    amount: f[2],
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new EthMadGlmrRewarder2FunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
            case abi.functions['updatePool'].sighash: {
                let f = normalize(abi.functions['updatePool'].decode(item.transaction.input))
                return new EthMadGlmrRewarder2FunctionUpdatePool1({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updatePool',
                    pid: f[0],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
