import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xedfb330f5fa216c9d2039b99c8ce9da85ea91c1e.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AllocPointsUpdated: new LogEvent<([caller: string, previousAmount: ethers.BigNumber, newAmount: ethers.BigNumber] & {caller: string, previousAmount: ethers.BigNumber, newAmount: ethers.BigNumber})>(
        abi, '0x802633c8d26237616d81bdac01bc40fcdf36e098832601582ec19d7e431c5ef3'
    ),
    Deposit: new LogEvent<([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15'
    ),
    EmergencyWithdraw: new LogEvent<([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0xbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae0595'
    ),
    EmissionRateUpdated: new LogEvent<([caller: string, previousAmount: ethers.BigNumber, newAmount: ethers.BigNumber] & {caller: string, previousAmount: ethers.BigNumber, newAmount: ethers.BigNumber})>(
        abi, '0xeedc6338c9c1ad8f3cd6c90dd09dbe98dbd57e610d3e59a17996d07acb0d9511'
    ),
    MetaTxnsDisabled: new LogEvent<([caller: string] & {caller: string})>(
        abi, '0x096be170ccc67847e55535e7d8334b2afedd95805baedc160005addb91447450'
    ),
    MetaTxnsEnabled: new LogEvent<([caller: string] & {caller: string})>(
        abi, '0x92e4c08d47b71e8dc051232b8e475ec296489a67a4ba5cca88ff20fb6ac499e6'
    ),
    OperatorTransferred: new LogEvent<([previousOperator: string, newOperator: string] & {previousOperator: string, newOperator: string})>(
        abi, '0x74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    RewardLockedUp: new LogEvent<([user: string, pid: ethers.BigNumber, amountLockedUp: ethers.BigNumber] & {user: string, pid: ethers.BigNumber, amountLockedUp: ethers.BigNumber})>(
        abi, '0xee470483107f579a55c754fa00613c45a9a3b617a418b39cb0be97e5381ba7c1'
    ),
    SetInvestorAddress: new LogEvent<([oldAddress: string, newAddress: string] & {oldAddress: string, newAddress: string})>(
        abi, '0x6260cb34f06b782e83bde168f7d74ab2133041cb53b63ce22b127822a92b6791'
    ),
    SetInvestorPercent: new LogEvent<([oldPercent: ethers.BigNumber, newPercent: ethers.BigNumber] & {oldPercent: ethers.BigNumber, newPercent: ethers.BigNumber})>(
        abi, '0x905b464403a98b455243c8b4d30c545b8fbd70cda670142b9326425b2c039f3b'
    ),
    SetTeamAddress: new LogEvent<([oldAddress: string, newAddress: string] & {oldAddress: string, newAddress: string})>(
        abi, '0x42fbc17d847fdc3e5c82da842a5ef3979c64f3b94cd4e7382310fd5525c6ee0f'
    ),
    SetTeamPercent: new LogEvent<([oldPercent: ethers.BigNumber, newPercent: ethers.BigNumber] & {oldPercent: ethers.BigNumber, newPercent: ethers.BigNumber})>(
        abi, '0x204a076f4a2e4e5e646bb8841cc285306bf747e277f40dbfd5750e782e17b7a6'
    ),
    SetTreasuryAddress: new LogEvent<([oldAddress: string, newAddress: string] & {oldAddress: string, newAddress: string})>(
        abi, '0x61885cdba916be748ff3e3f6f15e4206153b8ea3b7acabade9d04b4063a83510'
    ),
    SetTreasuryPercent: new LogEvent<([oldPercent: ethers.BigNumber, newPercent: ethers.BigNumber] & {oldPercent: ethers.BigNumber, newPercent: ethers.BigNumber})>(
        abi, '0xa565895c0101fca10e6a7b85742e56cf52ac5f58b09ce030425d3555b47069fd'
    ),
    Withdraw: new LogEvent<([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0xf279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568'
    ),
}

export const functions = {
    MAXIMUM_DEPOSIT_FEE_RATE: new Func<[], {}, number>(
        abi, '0x812c64f1'
    ),
    MAXIMUM_HARVEST_INTERVAL: new Func<[], {}, ethers.BigNumber>(
        abi, '0xde73149d'
    ),
    add: new Func<[_allocPoint: ethers.BigNumber, _lpToken: string, _depositFeeBP: number, _harvestInterval: ethers.BigNumber, _withUpdate: boolean], {_allocPoint: ethers.BigNumber, _lpToken: string, _depositFeeBP: number, _harvestInterval: ethers.BigNumber, _withUpdate: boolean}, []>(
        abi, '0xaf018de8'
    ),
    canHarvest: new Func<[_pid: ethers.BigNumber, _user: string], {_pid: ethers.BigNumber, _user: string}, boolean>(
        abi, '0x2e6c998d'
    ),
    deposit: new Func<[_pid: ethers.BigNumber, _amount: ethers.BigNumber], {_pid: ethers.BigNumber, _amount: ethers.BigNumber}, []>(
        abi, '0xe2bbb158'
    ),
    disableMetaTxns: new Func<[], {}, []>(
        abi, '0x08383640'
    ),
    emergencyWithdraw: new Func<[_pid: ethers.BigNumber], {_pid: ethers.BigNumber}, []>(
        abi, '0x5312ea8e'
    ),
    enableMetaTxns: new Func<[], {}, []>(
        abi, '0x578bb42d'
    ),
    getMultiplier: new Func<[_from: ethers.BigNumber, _to: ethers.BigNumber], {_from: ethers.BigNumber, _to: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x8dbb1e3a'
    ),
    harvestMany: new Func<[_pids: Array<ethers.BigNumber>], {_pids: Array<ethers.BigNumber>}, []>(
        abi, '0xdc640ac9'
    ),
    investorAddress: new Func<[], {}, string>(
        abi, '0x12e228fd'
    ),
    investorPercent: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0735b208'
    ),
    isTrustedForwarder: new Func<[forwarder: string], {forwarder: string}, boolean>(
        abi, '0x572b6c05'
    ),
    massUpdatePools: new Func<[], {}, []>(
        abi, '0x630b5ba1'
    ),
    metaTxnsEnabled: new Func<[], {}, boolean>(
        abi, '0xa8c95dc0'
    ),
    operator: new Func<[], {}, string>(
        abi, '0x570ca735'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pendingStella: new Func<[_pid: ethers.BigNumber, _user: string], {_pid: ethers.BigNumber, _user: string}, ethers.BigNumber>(
        abi, '0xf7b686a9'
    ),
    poolInfo: new Func<[_: ethers.BigNumber], {}, ([lpToken: string, allocPoint: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, accStellaPerShare: ethers.BigNumber, depositFeeBP: number, harvestInterval: ethers.BigNumber, totalLp: ethers.BigNumber] & {lpToken: string, allocPoint: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, accStellaPerShare: ethers.BigNumber, depositFeeBP: number, harvestInterval: ethers.BigNumber, totalLp: ethers.BigNumber})>(
        abi, '0x1526fe27'
    ),
    poolLength: new Func<[], {}, ethers.BigNumber>(
        abi, '0x081e3eda'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    set: new Func<[_pid: ethers.BigNumber, _allocPoint: ethers.BigNumber, _depositFeeBP: number, _harvestInterval: ethers.BigNumber, _withUpdate: boolean], {_pid: ethers.BigNumber, _allocPoint: ethers.BigNumber, _depositFeeBP: number, _harvestInterval: ethers.BigNumber, _withUpdate: boolean}, []>(
        abi, '0x2143e545'
    ),
    setInvestorAddress: new Func<[_investorAddress: string], {_investorAddress: string}, []>(
        abi, '0x42602f1e'
    ),
    setInvestorPercent: new Func<[_newInvestorPercent: ethers.BigNumber], {_newInvestorPercent: ethers.BigNumber}, []>(
        abi, '0x876d3c9c'
    ),
    setTeamAddress: new Func<[_teamAddress: string], {_teamAddress: string}, []>(
        abi, '0x6690864e'
    ),
    setTeamPercent: new Func<[_newTeamPercent: ethers.BigNumber], {_newTeamPercent: ethers.BigNumber}, []>(
        abi, '0x949e6302'
    ),
    setTreasuryAddr: new Func<[_treasuryAddress: string], {_treasuryAddress: string}, []>(
        abi, '0xa7e05b9c'
    ),
    setTreasuryPercent: new Func<[_newTreasuryPercent: ethers.BigNumber], {_newTreasuryPercent: ethers.BigNumber}, []>(
        abi, '0x89a2bc25'
    ),
    startBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x48cd4cb1'
    ),
    startFarming: new Func<[], {}, []>(
        abi, '0xafbcfea1'
    ),
    stella: new Func<[], {}, string>(
        abi, '0x5e18b5d6'
    ),
    stellaPerBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf4203d8e'
    ),
    teamAddress: new Func<[], {}, string>(
        abi, '0x1c75f085'
    ),
    teamPercent: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe164ac50'
    ),
    totalAllocPoint: new Func<[], {}, ethers.BigNumber>(
        abi, '0x17caf6f1'
    ),
    totalLockedUpRewards: new Func<[], {}, ethers.BigNumber>(
        abi, '0x474fa630'
    ),
    totalStellaInPools: new Func<[], {}, ethers.BigNumber>(
        abi, '0xd2facb03'
    ),
    transferOperator: new Func<[newOperator: string], {newOperator: string}, []>(
        abi, '0x29605e77'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    treasuryAddress: new Func<[], {}, string>(
        abi, '0xc5f956af'
    ),
    treasuryPercent: new Func<[], {}, ethers.BigNumber>(
        abi, '0x04ef9d58'
    ),
    updateAllocPoint: new Func<[_pid: ethers.BigNumber, _allocPoint: ethers.BigNumber, _withUpdate: boolean], {_pid: ethers.BigNumber, _allocPoint: ethers.BigNumber, _withUpdate: boolean}, []>(
        abi, '0xbde4aeca'
    ),
    updateEmissionRate: new Func<[_stellaPerBlock: ethers.BigNumber], {_stellaPerBlock: ethers.BigNumber}, []>(
        abi, '0x0ba84cd2'
    ),
    updatePool: new Func<[_pid: ethers.BigNumber], {_pid: ethers.BigNumber}, []>(
        abi, '0x51eb05a6'
    ),
    userInfo: new Func<[_: ethers.BigNumber, _: string], {}, ([amount: ethers.BigNumber, rewardDebt: ethers.BigNumber, rewardLockedUp: ethers.BigNumber, nextHarvestUntil: ethers.BigNumber] & {amount: ethers.BigNumber, rewardDebt: ethers.BigNumber, rewardLockedUp: ethers.BigNumber, nextHarvestUntil: ethers.BigNumber})>(
        abi, '0x93f1a40b'
    ),
    withdraw: new Func<[_pid: ethers.BigNumber, _amount: ethers.BigNumber], {_pid: ethers.BigNumber, _amount: ethers.BigNumber}, []>(
        abi, '0x441a3e70'
    ),
}

export class Contract extends ContractBase {

    MAXIMUM_DEPOSIT_FEE_RATE(): Promise<number> {
        return this.eth_call(functions.MAXIMUM_DEPOSIT_FEE_RATE, [])
    }

    MAXIMUM_HARVEST_INTERVAL(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MAXIMUM_HARVEST_INTERVAL, [])
    }

    canHarvest(_pid: ethers.BigNumber, _user: string): Promise<boolean> {
        return this.eth_call(functions.canHarvest, [_pid, _user])
    }

    getMultiplier(_from: ethers.BigNumber, _to: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getMultiplier, [_from, _to])
    }

    investorAddress(): Promise<string> {
        return this.eth_call(functions.investorAddress, [])
    }

    investorPercent(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.investorPercent, [])
    }

    isTrustedForwarder(forwarder: string): Promise<boolean> {
        return this.eth_call(functions.isTrustedForwarder, [forwarder])
    }

    metaTxnsEnabled(): Promise<boolean> {
        return this.eth_call(functions.metaTxnsEnabled, [])
    }

    operator(): Promise<string> {
        return this.eth_call(functions.operator, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    pendingStella(_pid: ethers.BigNumber, _user: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.pendingStella, [_pid, _user])
    }

    poolInfo(arg0: ethers.BigNumber): Promise<([lpToken: string, allocPoint: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, accStellaPerShare: ethers.BigNumber, depositFeeBP: number, harvestInterval: ethers.BigNumber, totalLp: ethers.BigNumber] & {lpToken: string, allocPoint: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, accStellaPerShare: ethers.BigNumber, depositFeeBP: number, harvestInterval: ethers.BigNumber, totalLp: ethers.BigNumber})> {
        return this.eth_call(functions.poolInfo, [arg0])
    }

    poolLength(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.poolLength, [])
    }

    startBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.startBlock, [])
    }

    stella(): Promise<string> {
        return this.eth_call(functions.stella, [])
    }

    stellaPerBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.stellaPerBlock, [])
    }

    teamAddress(): Promise<string> {
        return this.eth_call(functions.teamAddress, [])
    }

    teamPercent(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.teamPercent, [])
    }

    totalAllocPoint(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalAllocPoint, [])
    }

    totalLockedUpRewards(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalLockedUpRewards, [])
    }

    totalStellaInPools(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalStellaInPools, [])
    }

    treasuryAddress(): Promise<string> {
        return this.eth_call(functions.treasuryAddress, [])
    }

    treasuryPercent(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.treasuryPercent, [])
    }

    userInfo(arg0: ethers.BigNumber, arg1: string): Promise<([amount: ethers.BigNumber, rewardDebt: ethers.BigNumber, rewardLockedUp: ethers.BigNumber, nextHarvestUntil: ethers.BigNumber] & {amount: ethers.BigNumber, rewardDebt: ethers.BigNumber, rewardLockedUp: ethers.BigNumber, nextHarvestUntil: ethers.BigNumber})> {
        return this.eth_call(functions.userInfo, [arg0, arg1])
    }
}
