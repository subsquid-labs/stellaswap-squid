import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0xf3a5454496e26ac57da879bf3285fa85debf0388'
import {FarmsV2DualEventAdd, FarmsV2DualEventAllocPointsUpdated, FarmsV2DualEventDeposit, FarmsV2DualEventEmergencyWithdraw, FarmsV2DualEventEmissionRateUpdated, FarmsV2DualEventOwnershipTransferred, FarmsV2DualEventRewardLockedUp, FarmsV2DualEventSet, FarmsV2DualEventSetInvestorAddress, FarmsV2DualEventSetInvestorPercent, FarmsV2DualEventSetTeamAddress, FarmsV2DualEventSetTeamPercent, FarmsV2DualEventSetTreasuryAddress, FarmsV2DualEventSetTreasuryPercent, FarmsV2DualEventUpdatePool, FarmsV2DualEventWithdraw, FarmsV2DualFunctionAdd, FarmsV2DualFunctionDeposit, FarmsV2DualFunctionDepositWithPermit, FarmsV2DualFunctionEmergencyWithdraw, FarmsV2DualFunctionHarvestMany, FarmsV2DualFunctionMassUpdatePools, FarmsV2DualFunctionRenounceOwnership, FarmsV2DualFunctionSet, FarmsV2DualFunctionSetInvestorAddress, FarmsV2DualFunctionSetInvestorPercent, FarmsV2DualFunctionSetTeamAddress, FarmsV2DualFunctionSetTeamPercent, FarmsV2DualFunctionSetTreasuryAddress, FarmsV2DualFunctionSetTreasuryPercent, FarmsV2DualFunctionStartFarming, FarmsV2DualFunctionTransferOwnership, FarmsV2DualFunctionUpdateAllocPoint, FarmsV2DualFunctionUpdateEmissionRate, FarmsV2DualFunctionUpdatePool, FarmsV2DualFunctionWithdraw} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xf3a5454496e26ac57da879bf3285fa85debf0388'

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
            case abi.events['Add'].topic: {
                let e = normalize(abi.events['Add'].decode(item.evmLog))
                return new FarmsV2DualEventAdd({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Add',
                    pid: e[0],
                    allocPoint: e[1],
                    lpToken: e[2],
                    depositFeeBp: e[3],
                    harvestInterval: e[4],
                    rewarders: toJSON(e[5]),
                })
            }
            case abi.events['AllocPointsUpdated'].topic: {
                let e = normalize(abi.events['AllocPointsUpdated'].decode(item.evmLog))
                return new FarmsV2DualEventAllocPointsUpdated({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'AllocPointsUpdated',
                    caller: e[0],
                    previousAmount: e[1],
                    newAmount: e[2],
                })
            }
            case abi.events['Deposit'].topic: {
                let e = normalize(abi.events['Deposit'].decode(item.evmLog))
                return new FarmsV2DualEventDeposit({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Deposit',
                    user: e[0],
                    pid: e[1],
                    amount: e[2],
                })
            }
            case abi.events['EmergencyWithdraw'].topic: {
                let e = normalize(abi.events['EmergencyWithdraw'].decode(item.evmLog))
                return new FarmsV2DualEventEmergencyWithdraw({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'EmergencyWithdraw',
                    user: e[0],
                    pid: e[1],
                    amount: e[2],
                })
            }
            case abi.events['EmissionRateUpdated'].topic: {
                let e = normalize(abi.events['EmissionRateUpdated'].decode(item.evmLog))
                return new FarmsV2DualEventEmissionRateUpdated({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'EmissionRateUpdated',
                    caller: e[0],
                    previousValue: e[1],
                    newValue: e[2],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new FarmsV2DualEventOwnershipTransferred({
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
            case abi.events['RewardLockedUp'].topic: {
                let e = normalize(abi.events['RewardLockedUp'].decode(item.evmLog))
                return new FarmsV2DualEventRewardLockedUp({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RewardLockedUp',
                    user: e[0],
                    pid: e[1],
                    amountLockedUp: e[2],
                })
            }
            case abi.events['Set'].topic: {
                let e = normalize(abi.events['Set'].decode(item.evmLog))
                return new FarmsV2DualEventSet({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Set',
                    pid: e[0],
                    allocPoint: e[1],
                    depositFeeBp: e[2],
                    harvestInterval: e[3],
                    rewarders: toJSON(e[4]),
                })
            }
            case abi.events['SetInvestorAddress'].topic: {
                let e = normalize(abi.events['SetInvestorAddress'].decode(item.evmLog))
                return new FarmsV2DualEventSetInvestorAddress({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetInvestorAddress',
                    oldAddress: e[0],
                    newAddress: e[1],
                })
            }
            case abi.events['SetInvestorPercent'].topic: {
                let e = normalize(abi.events['SetInvestorPercent'].decode(item.evmLog))
                return new FarmsV2DualEventSetInvestorPercent({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetInvestorPercent',
                    oldPercent: e[0],
                    newPercent: e[1],
                })
            }
            case abi.events['SetTeamAddress'].topic: {
                let e = normalize(abi.events['SetTeamAddress'].decode(item.evmLog))
                return new FarmsV2DualEventSetTeamAddress({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetTeamAddress',
                    oldAddress: e[0],
                    newAddress: e[1],
                })
            }
            case abi.events['SetTeamPercent'].topic: {
                let e = normalize(abi.events['SetTeamPercent'].decode(item.evmLog))
                return new FarmsV2DualEventSetTeamPercent({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetTeamPercent',
                    oldPercent: e[0],
                    newPercent: e[1],
                })
            }
            case abi.events['SetTreasuryAddress'].topic: {
                let e = normalize(abi.events['SetTreasuryAddress'].decode(item.evmLog))
                return new FarmsV2DualEventSetTreasuryAddress({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetTreasuryAddress',
                    oldAddress: e[0],
                    newAddress: e[1],
                })
            }
            case abi.events['SetTreasuryPercent'].topic: {
                let e = normalize(abi.events['SetTreasuryPercent'].decode(item.evmLog))
                return new FarmsV2DualEventSetTreasuryPercent({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'SetTreasuryPercent',
                    oldPercent: e[0],
                    newPercent: e[1],
                })
            }
            case abi.events['UpdatePool'].topic: {
                let e = normalize(abi.events['UpdatePool'].decode(item.evmLog))
                return new FarmsV2DualEventUpdatePool({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatePool',
                    pid: e[0],
                    lastRewardTimestamp: e[1],
                    lpSupply: e[2],
                    accStellaPerShare: e[3],
                })
            }
            case abi.events['Withdraw'].topic: {
                let e = normalize(abi.events['Withdraw'].decode(item.evmLog))
                return new FarmsV2DualEventWithdraw({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Withdraw',
                    user: e[0],
                    pid: e[1],
                    amount: e[2],
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
            case abi.functions['add'].sighash: {
                let f = normalize(abi.functions['add'].decode(item.transaction.input))
                return new FarmsV2DualFunctionAdd({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'add',
                    allocPoint: f[0],
                    lpToken: f[1],
                    depositFeeBp: f[2],
                    harvestInterval: f[3],
                    rewarders: toJSON(f[4]),
                })
            }
            case abi.functions['deposit'].sighash: {
                let f = normalize(abi.functions['deposit'].decode(item.transaction.input))
                return new FarmsV2DualFunctionDeposit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'deposit',
                    pid: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['depositWithPermit'].sighash: {
                let f = normalize(abi.functions['depositWithPermit'].decode(item.transaction.input))
                return new FarmsV2DualFunctionDepositWithPermit({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'depositWithPermit',
                    pid: f[0],
                    amount: f[1],
                    deadline: f[2],
                    v: f[3],
                    r: f[4],
                    s: f[5],
                })
            }
            case abi.functions['emergencyWithdraw'].sighash: {
                let f = normalize(abi.functions['emergencyWithdraw'].decode(item.transaction.input))
                return new FarmsV2DualFunctionEmergencyWithdraw({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'emergencyWithdraw',
                    pid: f[0],
                })
            }
            case abi.functions['harvestMany'].sighash: {
                let f = normalize(abi.functions['harvestMany'].decode(item.transaction.input))
                return new FarmsV2DualFunctionHarvestMany({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'harvestMany',
                    pids: toJSON(f[0]),
                })
            }
            case abi.functions['massUpdatePools'].sighash: {
                return new FarmsV2DualFunctionMassUpdatePools({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'massUpdatePools',
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new FarmsV2DualFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['set'].sighash: {
                let f = normalize(abi.functions['set'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSet({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'set',
                    pid: f[0],
                    allocPoint: f[1],
                    depositFeeBp: f[2],
                    harvestInterval: f[3],
                    rewarders: toJSON(f[4]),
                })
            }
            case abi.functions['setInvestorAddress'].sighash: {
                let f = normalize(abi.functions['setInvestorAddress'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSetInvestorAddress({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setInvestorAddress',
                    investorAddress: f[0],
                })
            }
            case abi.functions['setInvestorPercent'].sighash: {
                let f = normalize(abi.functions['setInvestorPercent'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSetInvestorPercent({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setInvestorPercent',
                    newInvestorPercent: f[0],
                })
            }
            case abi.functions['setTeamAddress'].sighash: {
                let f = normalize(abi.functions['setTeamAddress'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSetTeamAddress({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTeamAddress',
                    teamAddress: f[0],
                })
            }
            case abi.functions['setTeamPercent'].sighash: {
                let f = normalize(abi.functions['setTeamPercent'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSetTeamPercent({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTeamPercent',
                    newTeamPercent: f[0],
                })
            }
            case abi.functions['setTreasuryAddress'].sighash: {
                let f = normalize(abi.functions['setTreasuryAddress'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSetTreasuryAddress({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTreasuryAddress',
                    treasuryAddress: f[0],
                })
            }
            case abi.functions['setTreasuryPercent'].sighash: {
                let f = normalize(abi.functions['setTreasuryPercent'].decode(item.transaction.input))
                return new FarmsV2DualFunctionSetTreasuryPercent({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTreasuryPercent',
                    newTreasuryPercent: f[0],
                })
            }
            case abi.functions['startFarming'].sighash: {
                return new FarmsV2DualFunctionStartFarming({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'startFarming',
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new FarmsV2DualFunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
            case abi.functions['updateAllocPoint'].sighash: {
                let f = normalize(abi.functions['updateAllocPoint'].decode(item.transaction.input))
                return new FarmsV2DualFunctionUpdateAllocPoint({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateAllocPoint',
                    pid: f[0],
                    allocPoint: f[1],
                })
            }
            case abi.functions['updateEmissionRate'].sighash: {
                let f = normalize(abi.functions['updateEmissionRate'].decode(item.transaction.input))
                return new FarmsV2DualFunctionUpdateEmissionRate({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateEmissionRate',
                    stellaPerSec: f[0],
                })
            }
            case abi.functions['updatePool'].sighash: {
                let f = normalize(abi.functions['updatePool'].decode(item.transaction.input))
                return new FarmsV2DualFunctionUpdatePool({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updatePool',
                    pid: f[0],
                })
            }
            case abi.functions['withdraw'].sighash: {
                let f = normalize(abi.functions['withdraw'].decode(item.transaction.input))
                return new FarmsV2DualFunctionWithdraw({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdraw',
                    pid: f[0],
                    amount: f[1],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
