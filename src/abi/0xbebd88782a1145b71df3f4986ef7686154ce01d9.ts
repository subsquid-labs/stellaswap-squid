import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xbebd88782a1145b71df3f4986ef7686154ce01d9.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AddPool: new LogEvent<([pid: ethers.BigNumber, allocPoint: ethers.BigNumber] & {pid: ethers.BigNumber, allocPoint: ethers.BigNumber})>(
        abi, '0xa6b36ea399c1eae2ba98a011138f78722b48f46ad93349269348ccc6e8f1cced'
    ),
    AddRewardInfo: new LogEvent<([pid: ethers.BigNumber, phase: ethers.BigNumber, endTimestamp: ethers.BigNumber, rewardPerSec: ethers.BigNumber] & {pid: ethers.BigNumber, phase: ethers.BigNumber, endTimestamp: ethers.BigNumber, rewardPerSec: ethers.BigNumber})>(
        abi, '0xad90731bd0d97445f5af66088f3adebf343c520c20e033cc42f93b124258cdc2'
    ),
    OnReward: new LogEvent<([user: string, amount: ethers.BigNumber] & {user: string, amount: ethers.BigNumber})>(
        abi, '0xd1072bb52c3131d0c96197b73fb8a45637e30f8b6664fc142310cc9b242859b4'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    RewardRateUpdated: new LogEvent<([oldRate: ethers.BigNumber, newRate: ethers.BigNumber] & {oldRate: ethers.BigNumber, newRate: ethers.BigNumber})>(
        abi, '0xc390a98ace15a7bb6bab611eedfdbb2685043b241a869420043cdfb23ccfee50'
    ),
    SetPool: new LogEvent<([pid: ethers.BigNumber, allocPoint: ethers.BigNumber] & {pid: ethers.BigNumber, allocPoint: ethers.BigNumber})>(
        abi, '0xc0cfd54d2de2b55f1e6e108d3ec53ff0a1abe6055401d32c61e9433b747ef9f8'
    ),
    UpdatePool: new LogEvent<([pid: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, lpSupply: ethers.BigNumber, accTokenPerShare: ethers.BigNumber] & {pid: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, lpSupply: ethers.BigNumber, accTokenPerShare: ethers.BigNumber})>(
        abi, '0x3be3541fc42237d611b30329040bfa4569541d156560acdbbae57640d20b8f46'
    ),
}

export const functions = {
    _getTimeElapsed: new Func<[_from: ethers.BigNumber, _to: ethers.BigNumber, _endTimestamp: ethers.BigNumber], {_from: ethers.BigNumber, _to: ethers.BigNumber, _endTimestamp: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x72333631'
    ),
    _updatePool: new Func<[pid: ethers.BigNumber], {pid: ethers.BigNumber}, ([accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber] & {accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber})>(
        abi, '0xd4aa89b5'
    ),
    add: new Func<[_pid: ethers.BigNumber, _allocPoint: ethers.BigNumber, _startTimestamp: ethers.BigNumber], {_pid: ethers.BigNumber, _allocPoint: ethers.BigNumber, _startTimestamp: ethers.BigNumber}, []>(
        abi, '0x505fb46c'
    ),
    addRewardInfo: new Func<[_pid: ethers.BigNumber, _endTimestamp: ethers.BigNumber, _rewardPerSec: ethers.BigNumber], {_pid: ethers.BigNumber, _endTimestamp: ethers.BigNumber, _rewardPerSec: ethers.BigNumber}, []>(
        abi, '0x2ea807c5'
    ),
    currentEndTimestamp: new Func<[_pid: ethers.BigNumber], {_pid: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x9e494bee'
    ),
    distributorV2: new Func<[], {}, string>(
        abi, '0x7d0d9d5f'
    ),
    emergencyRewardWithdraw: new Func<[_pid: ethers.BigNumber, _amount: ethers.BigNumber, _beneficiary: string], {_pid: ethers.BigNumber, _amount: ethers.BigNumber, _beneficiary: string}, []>(
        abi, '0x1d123131'
    ),
    inCaseTokensGetStuck: new Func<[_token: string, _amount: ethers.BigNumber], {_token: string, _amount: ethers.BigNumber}, []>(
        abi, '0xc6d758cb'
    ),
    isNative: new Func<[], {}, boolean>(
        abi, '0x73cfc6b2'
    ),
    massUpdatePools: new Func<[], {}, []>(
        abi, '0x630b5ba1'
    ),
    onStellaReward: new Func<[_pid: ethers.BigNumber, _user: string, _amount: ethers.BigNumber], {_pid: ethers.BigNumber, _user: string, _amount: ethers.BigNumber}, []>(
        abi, '0xcea2ba8b'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pendingTokens: new Func<[_pid: ethers.BigNumber, _user: string], {_pid: ethers.BigNumber, _user: string}, ethers.BigNumber>(
        abi, '0xffcd4263'
    ),
    poolIds: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x69883b4e'
    ),
    poolInfo: new Func<[_: ethers.BigNumber], {}, ([accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber] & {accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber})>(
        abi, '0x1526fe27'
    ),
    poolRewardInfo: new Func<[_: ethers.BigNumber, _: ethers.BigNumber], {}, ([startTimestamp: ethers.BigNumber, endTimestamp: ethers.BigNumber, rewardPerSec: ethers.BigNumber] & {startTimestamp: ethers.BigNumber, endTimestamp: ethers.BigNumber, rewardPerSec: ethers.BigNumber})>(
        abi, '0x0832cfbf'
    ),
    poolRewardsPerSec: new Func<[_pid: ethers.BigNumber], {_pid: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x465e81ec'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    rewardInfoLimit: new Func<[], {}, ethers.BigNumber>(
        abi, '0x00d74850'
    ),
    rewardToken: new Func<[], {}, string>(
        abi, '0xf7c618c1'
    ),
    stuckTimeLock: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf98b03ca'
    ),
    totalAllocPoint: new Func<[], {}, ethers.BigNumber>(
        abi, '0x17caf6f1'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    updatePool: new Func<[_pid: ethers.BigNumber], {_pid: ethers.BigNumber}, ([accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber] & {accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber})>(
        abi, '0x51eb05a6'
    ),
    userInfo: new Func<[_: ethers.BigNumber, _: string], {}, ([amount: ethers.BigNumber, rewardDebt: ethers.BigNumber] & {amount: ethers.BigNumber, rewardDebt: ethers.BigNumber})>(
        abi, '0x93f1a40b'
    ),
}

export class Contract extends ContractBase {

    _getTimeElapsed(_from: ethers.BigNumber, _to: ethers.BigNumber, _endTimestamp: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions._getTimeElapsed, [_from, _to, _endTimestamp])
    }

    currentEndTimestamp(_pid: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.currentEndTimestamp, [_pid])
    }

    distributorV2(): Promise<string> {
        return this.eth_call(functions.distributorV2, [])
    }

    isNative(): Promise<boolean> {
        return this.eth_call(functions.isNative, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    pendingTokens(_pid: ethers.BigNumber, _user: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.pendingTokens, [_pid, _user])
    }

    poolIds(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.poolIds, [arg0])
    }

    poolInfo(arg0: ethers.BigNumber): Promise<([accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber] & {accTokenPerShare: ethers.BigNumber, startTimestamp: ethers.BigNumber, lastRewardTimestamp: ethers.BigNumber, allocPoint: ethers.BigNumber, totalRewards: ethers.BigNumber})> {
        return this.eth_call(functions.poolInfo, [arg0])
    }

    poolRewardInfo(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<([startTimestamp: ethers.BigNumber, endTimestamp: ethers.BigNumber, rewardPerSec: ethers.BigNumber] & {startTimestamp: ethers.BigNumber, endTimestamp: ethers.BigNumber, rewardPerSec: ethers.BigNumber})> {
        return this.eth_call(functions.poolRewardInfo, [arg0, arg1])
    }

    poolRewardsPerSec(_pid: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.poolRewardsPerSec, [_pid])
    }

    rewardInfoLimit(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.rewardInfoLimit, [])
    }

    rewardToken(): Promise<string> {
        return this.eth_call(functions.rewardToken, [])
    }

    stuckTimeLock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.stuckTimeLock, [])
    }

    totalAllocPoint(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalAllocPoint, [])
    }

    userInfo(arg0: ethers.BigNumber, arg1: string): Promise<([amount: ethers.BigNumber, rewardDebt: ethers.BigNumber] & {amount: ethers.BigNumber, rewardDebt: ethers.BigNumber})> {
        return this.eth_call(functions.userInfo, [arg0, arg1])
    }
}
