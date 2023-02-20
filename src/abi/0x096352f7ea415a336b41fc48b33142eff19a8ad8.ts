import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x096352f7ea415a336b41fc48b33142eff19a8ad8.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Claimed: new LogEvent<([user: string, amount: ethers.BigNumber] & {user: string, amount: ethers.BigNumber})>(
        abi, '0xd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a'
    ),
    Deposit: new LogEvent<([user: string, amount: ethers.BigNumber] & {user: string, amount: ethers.BigNumber})>(
        abi, '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Refunded: new LogEvent<([user: string, amount: ethers.BigNumber] & {user: string, amount: ethers.BigNumber})>(
        abi, '0xd7dee2702d63ad89917b6a4da9981c90c4d24f8c2bdfd64c604ecae57d8d0651'
    ),
}

export const functions = {
    baseToken: new Func<[], {}, string>(
        abi, '0xc55dae63'
    ),
    claim: new Func<[], {}, []>(
        abi, '0x4e71d92d'
    ),
    commit: new Func<[_amount: ethers.BigNumber], {_amount: ethers.BigNumber}, []>(
        abi, '0xf4f98ad5'
    ),
    endTime: new Func<[], {}, ethers.BigNumber>(
        abi, '0x3197cbb6'
    ),
    iloStatus: new Func<[], {}, ethers.BigNumber>(
        abi, '0xc63e235a'
    ),
    inCaseTokensGetStuck: new Func<[_token: string, _amount: ethers.BigNumber], {_token: string, _amount: ethers.BigNumber}, []>(
        abi, '0xc6d758cb'
    ),
    moveRaisedBase: new Func<[to: string], {to: string}, []>(
        abi, '0x89cbd92b'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    raisingAmount: new Func<[], {}, ethers.BigNumber>(
        abi, '0x9c0a7669'
    ),
    refund: new Func<[], {}, []>(
        abi, '0x590e1ae3'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setEndTime: new Func<[_endTime: ethers.BigNumber], {_endTime: ethers.BigNumber}, []>(
        abi, '0xccb98ffc'
    ),
    setRaisingAmount: new Func<[_raisingAmount: ethers.BigNumber], {_raisingAmount: ethers.BigNumber}, []>(
        abi, '0x4225c32f'
    ),
    setStartTime: new Func<[_startTime: ethers.BigNumber], {_startTime: ethers.BigNumber}, []>(
        abi, '0x3e0a322d'
    ),
    setStellaPerBase: new Func<[_stellaPerBase: ethers.BigNumber], {_stellaPerBase: ethers.BigNumber}, []>(
        abi, '0xc5a09228'
    ),
    startTime: new Func<[], {}, ethers.BigNumber>(
        abi, '0x78e97925'
    ),
    stella: new Func<[], {}, string>(
        abi, '0x5e18b5d6'
    ),
    stellaPerBase: new Func<[], {}, ethers.BigNumber>(
        abi, '0xdb0117cb'
    ),
    totalBaseCommited: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe688acfa'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    userAllocationsAndRefund: new Func<[_user: string], {_user: string}, [_: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber]>(
        abi, '0x2a5e3340'
    ),
    userInfo: new Func<[_: string], {}, ([amount: ethers.BigNumber, claimed: boolean, refunded: boolean] & {amount: ethers.BigNumber, claimed: boolean, refunded: boolean})>(
        abi, '0x1959a002'
    ),
}

export class Contract extends ContractBase {

    baseToken(): Promise<string> {
        return this.eth_call(functions.baseToken, [])
    }

    endTime(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.endTime, [])
    }

    iloStatus(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.iloStatus, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    raisingAmount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.raisingAmount, [])
    }

    startTime(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.startTime, [])
    }

    stella(): Promise<string> {
        return this.eth_call(functions.stella, [])
    }

    stellaPerBase(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.stellaPerBase, [])
    }

    totalBaseCommited(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalBaseCommited, [])
    }

    userAllocationsAndRefund(_user: string): Promise<[_: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber]> {
        return this.eth_call(functions.userAllocationsAndRefund, [_user])
    }

    userInfo(arg0: string): Promise<([amount: ethers.BigNumber, claimed: boolean, refunded: boolean] & {amount: ethers.BigNumber, claimed: boolean, refunded: boolean})> {
        return this.eth_call(functions.userInfo, [arg0])
    }
}
