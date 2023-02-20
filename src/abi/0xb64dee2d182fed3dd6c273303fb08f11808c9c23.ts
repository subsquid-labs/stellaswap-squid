import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xb64dee2d182fed3dd6c273303fb08f11808c9c23.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    MetaTransactionExecuted: new LogEvent<([userAddress: string, relayerAddress: string, functionSignature: string] & {userAddress: string, relayerAddress: string, functionSignature: string})>(
        abi, '0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    WGLMR: new Func<[], {}, string>(
        abi, '0x91d754c4'
    ),
    changeFeeAddress: new Func<[newFeeAddress: string], {newFeeAddress: string}, []>(
        abi, '0x285e1406'
    ),
    changeFeePercent: new Func<[newFeePercent: ethers.BigNumber], {newFeePercent: ethers.BigNumber}, []>(
        abi, '0x34eddf3e'
    ),
    changeRouter: new Func<[newTarget: string], {newTarget: string}, []>(
        abi, '0x340ac20f'
    ),
    executeMetaTransaction: new Func<[userAddress: string, functionSignature: string, sigR: string, sigS: string, sigV: number], {userAddress: string, functionSignature: string, sigR: string, sigS: string, sigV: number}, string>(
        abi, '0x0c53c51c'
    ),
    feeAddress: new Func<[], {}, string>(
        abi, '0x41275358'
    ),
    feePercent: new Func<[], {}, ethers.BigNumber>(
        abi, '0x7fd6f15c'
    ),
    getNonce: new Func<[user: string], {user: string}, ethers.BigNumber>(
        abi, '0x2d0335ab'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    stellaRouter: new Func<[], {}, string>(
        abi, '0x821ccef5'
    ),
    swap: new Func<[swapCallData: string], {swapCallData: string}, ethers.BigNumber>(
        abi, '0x627dd56a'
    ),
    tokenWhitelist: new Func<[_: string], {}, boolean>(
        abi, '0x753d7563'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    whitelistToken: new Func<[tokenAddress: string, whitelisted: boolean], {tokenAddress: string, whitelisted: boolean}, []>(
        abi, '0x0ffb1d8b'
    ),
    withdrawETH: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0xf14210a6'
    ),
    withdrawToken: new Func<[token: string, amount: ethers.BigNumber], {token: string, amount: ethers.BigNumber}, []>(
        abi, '0x9e281a98'
    ),
}

export class Contract extends ContractBase {

    WGLMR(): Promise<string> {
        return this.eth_call(functions.WGLMR, [])
    }

    feeAddress(): Promise<string> {
        return this.eth_call(functions.feeAddress, [])
    }

    feePercent(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.feePercent, [])
    }

    getNonce(user: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getNonce, [user])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    stellaRouter(): Promise<string> {
        return this.eth_call(functions.stellaRouter, [])
    }

    tokenWhitelist(arg0: string): Promise<boolean> {
        return this.eth_call(functions.tokenWhitelist, [arg0])
    }
}
