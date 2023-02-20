import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x8995066b7f1fb3abe3c88040b677d03d607a0b58.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Lock: new LogEvent<([token: string, amount: ethers.BigNumber, id: ethers.BigNumber] & {token: string, amount: ethers.BigNumber, id: ethers.BigNumber})>(
        abi, '0x49eaf4942f1237055eb4cfa5f31c9dfe50d5b4ade01e021f7de8be2fbbde557b'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Withdraw: new LogEvent<([withdrawer: string, amount: ethers.BigNumber] & {withdrawer: string, amount: ethers.BigNumber})>(
        abi, '0x884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364'
    ),
}

export const functions = {
    depositsByWithdrawer: new Func<[_: string, _: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x23c4a921'
    ),
    depositsCount: new Func<[], {}, ethers.BigNumber>(
        abi, '0x4506e935'
    ),
    getDepositsByTokenAddress: new Func<[_token: string], {_token: string}, Array<ethers.BigNumber>>(
        abi, '0x86f65a22'
    ),
    getDepositsByWithdrawer: new Func<[_withdrawer: string], {_withdrawer: string}, Array<ethers.BigNumber>>(
        abi, '0x469d86e2'
    ),
    getTokenTotalLockedBalance: new Func<[_token: string], {_token: string}, ethers.BigNumber>(
        abi, '0xb78a1532'
    ),
    lockTokens: new Func<[_token: string, _withdrawer: string, _amount: ethers.BigNumber, _unlockTimestamp: ethers.BigNumber], {_token: string, _withdrawer: string, _amount: ethers.BigNumber, _unlockTimestamp: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x7d533c1e'
    ),
    lockedToken: new Func<[_: ethers.BigNumber], {}, ([token: string, withdrawer: string, amount: ethers.BigNumber, unlockTimestamp: ethers.BigNumber, withdrawn: boolean] & {token: string, withdrawer: string, amount: ethers.BigNumber, unlockTimestamp: ethers.BigNumber, withdrawn: boolean})>(
        abi, '0xbb941cff'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    walletTokenBalance: new Func<[_: string, _: string], {}, ethers.BigNumber>(
        abi, '0xb9e7df1c'
    ),
    withdrawTokens: new Func<[_id: ethers.BigNumber], {_id: ethers.BigNumber}, []>(
        abi, '0x315a095d'
    ),
}

export class Contract extends ContractBase {

    depositsByWithdrawer(arg0: string, arg1: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.depositsByWithdrawer, [arg0, arg1])
    }

    depositsCount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.depositsCount, [])
    }

    getDepositsByTokenAddress(_token: string): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getDepositsByTokenAddress, [_token])
    }

    getDepositsByWithdrawer(_withdrawer: string): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getDepositsByWithdrawer, [_withdrawer])
    }

    getTokenTotalLockedBalance(_token: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getTokenTotalLockedBalance, [_token])
    }

    lockedToken(arg0: ethers.BigNumber): Promise<([token: string, withdrawer: string, amount: ethers.BigNumber, unlockTimestamp: ethers.BigNumber, withdrawn: boolean] & {token: string, withdrawer: string, amount: ethers.BigNumber, unlockTimestamp: ethers.BigNumber, withdrawn: boolean})> {
        return this.eth_call(functions.lockedToken, [arg0])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    walletTokenBalance(arg0: string, arg1: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.walletTokenBalance, [arg0, arg1])
    }
}
