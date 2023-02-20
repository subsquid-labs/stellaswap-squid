import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {toJSON} from '@subsquid/util-internal-json'
import * as abi from '../abi/0xedfb330f5fa216c9d2039b99c8ce9da85ea91c1e'
import {FarmsV1EventAllocPointsUpdated, FarmsV1EventDeposit, FarmsV1EventEmergencyWithdraw, FarmsV1EventEmissionRateUpdated, FarmsV1EventMetaTxnsDisabled, FarmsV1EventMetaTxnsEnabled, FarmsV1EventOperatorTransferred, FarmsV1EventOwnershipTransferred, FarmsV1EventRewardLockedUp, FarmsV1EventSetInvestorAddress, FarmsV1EventSetInvestorPercent, FarmsV1EventSetTeamAddress, FarmsV1EventSetTeamPercent, FarmsV1EventSetTreasuryAddress, FarmsV1EventSetTreasuryPercent, FarmsV1EventWithdraw, FarmsV1FunctionAdd, FarmsV1FunctionDeposit, FarmsV1FunctionDisableMetaTxns, FarmsV1FunctionEmergencyWithdraw, FarmsV1FunctionEnableMetaTxns, FarmsV1FunctionGetMultiplier, FarmsV1FunctionHarvestMany, FarmsV1FunctionMassUpdatePools, FarmsV1FunctionRenounceOwnership, FarmsV1FunctionSet, FarmsV1FunctionSetInvestorAddress, FarmsV1FunctionSetInvestorPercent, FarmsV1FunctionSetTeamAddress, FarmsV1FunctionSetTeamPercent, FarmsV1FunctionSetTreasuryAddr, FarmsV1FunctionSetTreasuryPercent, FarmsV1FunctionStartFarming, FarmsV1FunctionTransferOperator, FarmsV1FunctionTransferOwnership, FarmsV1FunctionUpdateAllocPoint, FarmsV1FunctionUpdateEmissionRate, FarmsV1FunctionUpdatePool, FarmsV1FunctionWithdraw} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0xedfb330f5fa216c9d2039b99c8ce9da85ea91c1e'

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
            case abi.events['AllocPointsUpdated'].topic: {
                let e = normalize(abi.events['AllocPointsUpdated'].decode(item.evmLog))
                return new FarmsV1EventAllocPointsUpdated({
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
                return new FarmsV1EventDeposit({
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
                return new FarmsV1EventEmergencyWithdraw({
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
                return new FarmsV1EventEmissionRateUpdated({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'EmissionRateUpdated',
                    caller: e[0],
                    previousAmount: e[1],
                    newAmount: e[2],
                })
            }
            case abi.events['MetaTxnsDisabled'].topic: {
                let e = normalize(abi.events['MetaTxnsDisabled'].decode(item.evmLog))
                return new FarmsV1EventMetaTxnsDisabled({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'MetaTxnsDisabled',
                    caller: e[0],
                })
            }
            case abi.events['MetaTxnsEnabled'].topic: {
                let e = normalize(abi.events['MetaTxnsEnabled'].decode(item.evmLog))
                return new FarmsV1EventMetaTxnsEnabled({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'MetaTxnsEnabled',
                    caller: e[0],
                })
            }
            case abi.events['OperatorTransferred'].topic: {
                let e = normalize(abi.events['OperatorTransferred'].decode(item.evmLog))
                return new FarmsV1EventOperatorTransferred({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'OperatorTransferred',
                    previousOperator: e[0],
                    newOperator: e[1],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new FarmsV1EventOwnershipTransferred({
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
                return new FarmsV1EventRewardLockedUp({
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
            case abi.events['SetInvestorAddress'].topic: {
                let e = normalize(abi.events['SetInvestorAddress'].decode(item.evmLog))
                return new FarmsV1EventSetInvestorAddress({
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
                return new FarmsV1EventSetInvestorPercent({
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
                return new FarmsV1EventSetTeamAddress({
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
                return new FarmsV1EventSetTeamPercent({
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
                return new FarmsV1EventSetTreasuryAddress({
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
                return new FarmsV1EventSetTreasuryPercent({
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
            case abi.events['Withdraw'].topic: {
                let e = normalize(abi.events['Withdraw'].decode(item.evmLog))
                return new FarmsV1EventWithdraw({
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
                return new FarmsV1FunctionAdd({
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
                    withUpdate: f[4],
                })
            }
            case abi.functions['deposit'].sighash: {
                let f = normalize(abi.functions['deposit'].decode(item.transaction.input))
                return new FarmsV1FunctionDeposit({
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
            case abi.functions['disableMetaTxns'].sighash: {
                return new FarmsV1FunctionDisableMetaTxns({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'disableMetaTxns',
                })
            }
            case abi.functions['emergencyWithdraw'].sighash: {
                let f = normalize(abi.functions['emergencyWithdraw'].decode(item.transaction.input))
                return new FarmsV1FunctionEmergencyWithdraw({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'emergencyWithdraw',
                    pid: f[0],
                })
            }
            case abi.functions['enableMetaTxns'].sighash: {
                return new FarmsV1FunctionEnableMetaTxns({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'enableMetaTxns',
                })
            }
            case abi.functions['getMultiplier'].sighash: {
                let f = normalize(abi.functions['getMultiplier'].decode(item.transaction.input))
                return new FarmsV1FunctionGetMultiplier({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'getMultiplier',
                    from: f[0],
                    to: f[1],
                })
            }
            case abi.functions['harvestMany'].sighash: {
                let f = normalize(abi.functions['harvestMany'].decode(item.transaction.input))
                return new FarmsV1FunctionHarvestMany({
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
                return new FarmsV1FunctionMassUpdatePools({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'massUpdatePools',
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new FarmsV1FunctionRenounceOwnership({
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
                return new FarmsV1FunctionSet({
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
                    withUpdate: f[4],
                })
            }
            case abi.functions['setInvestorAddress'].sighash: {
                let f = normalize(abi.functions['setInvestorAddress'].decode(item.transaction.input))
                return new FarmsV1FunctionSetInvestorAddress({
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
                return new FarmsV1FunctionSetInvestorPercent({
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
                return new FarmsV1FunctionSetTeamAddress({
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
                return new FarmsV1FunctionSetTeamPercent({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTeamPercent',
                    newTeamPercent: f[0],
                })
            }
            case abi.functions['setTreasuryAddr'].sighash: {
                let f = normalize(abi.functions['setTreasuryAddr'].decode(item.transaction.input))
                return new FarmsV1FunctionSetTreasuryAddr({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTreasuryAddr',
                    treasuryAddress: f[0],
                })
            }
            case abi.functions['setTreasuryPercent'].sighash: {
                let f = normalize(abi.functions['setTreasuryPercent'].decode(item.transaction.input))
                return new FarmsV1FunctionSetTreasuryPercent({
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
                return new FarmsV1FunctionStartFarming({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'startFarming',
                })
            }
            case abi.functions['transferOperator'].sighash: {
                let f = normalize(abi.functions['transferOperator'].decode(item.transaction.input))
                return new FarmsV1FunctionTransferOperator({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOperator',
                    newOperator: f[0],
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new FarmsV1FunctionTransferOwnership({
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
                return new FarmsV1FunctionUpdateAllocPoint({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateAllocPoint',
                    pid: f[0],
                    allocPoint: f[1],
                    withUpdate: f[2],
                })
            }
            case abi.functions['updateEmissionRate'].sighash: {
                let f = normalize(abi.functions['updateEmissionRate'].decode(item.transaction.input))
                return new FarmsV1FunctionUpdateEmissionRate({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateEmissionRate',
                    stellaPerBlock: f[0],
                })
            }
            case abi.functions['updatePool'].sighash: {
                let f = normalize(abi.functions['updatePool'].decode(item.transaction.input))
                return new FarmsV1FunctionUpdatePool({
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
                return new FarmsV1FunctionWithdraw({
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
