import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x01834cf26717f0351d9762cc9cca7dc059d140df.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    STELLA: new Func<[], {}, string>(
        abi, '0x6f1b6061'
    ),
    USDC: new Func<[], {}, string>(
        abi, '0x89a30271'
    ),
    WGLMR: new Func<[], {}, string>(
        abi, '0x91d754c4'
    ),
    initialize: new Func<[_stella: string, _router: string], {_stella: string, _router: string}, []>(
        abi, '0x485cc955'
    ),
    isLP: new Func<[_address: string], {_address: string}, boolean>(
        abi, '0x7df0f767'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    removeToken: new Func<[i: ethers.BigNumber], {i: ethers.BigNumber}, []>(
        abi, '0x36c5d724'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    routePair: new Func<[_address: string], {_address: string}, string>(
        abi, '0x985c9d56'
    ),
    setNotLP: new Func<[token: string], {token: string}, []>(
        abi, '0x1eff9adb'
    ),
    setRoutePairAddress: new Func<[asset: string, route: string], {asset: string, route: string}, []>(
        abi, '0x1c286c8a'
    ),
    setZapInFees: new Func<[_newZapInFees: ethers.BigNumber], {_newZapInFees: ethers.BigNumber}, []>(
        abi, '0x23a66e1c'
    ),
    setZapOutFees: new Func<[_newZapOutFees: ethers.BigNumber], {_newZapOutFees: ethers.BigNumber}, []>(
        abi, '0x1085815b'
    ),
    sweep: new Func<[], {}, []>(
        abi, '0x35faa416'
    ),
    tokens: new Func<[_: ethers.BigNumber], {}, string>(
        abi, '0x4f64b2be'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    withdraw: new Func<[token: string], {token: string}, []>(
        abi, '0x51cff8d9'
    ),
    zapIn: new Func<[_to: string], {_to: string}, []>(
        abi, '0xfe47068d'
    ),
    zapInFees: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0e8891af'
    ),
    zapInToken: new Func<[_from: string, amount: ethers.BigNumber, _to: string], {_from: string, amount: ethers.BigNumber, _to: string}, []>(
        abi, '0x1c4009f9'
    ),
    zapOut: new Func<[_from: string, amount: ethers.BigNumber], {_from: string, amount: ethers.BigNumber}, []>(
        abi, '0xd9139f63'
    ),
    zapOutFees: new Func<[], {}, ethers.BigNumber>(
        abi, '0x66280fdc'
    ),
}

export class Contract extends ContractBase {

    STELLA(): Promise<string> {
        return this.eth_call(functions.STELLA, [])
    }

    USDC(): Promise<string> {
        return this.eth_call(functions.USDC, [])
    }

    WGLMR(): Promise<string> {
        return this.eth_call(functions.WGLMR, [])
    }

    isLP(_address: string): Promise<boolean> {
        return this.eth_call(functions.isLP, [_address])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    routePair(_address: string): Promise<string> {
        return this.eth_call(functions.routePair, [_address])
    }

    tokens(arg0: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokens, [arg0])
    }

    zapInFees(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.zapInFees, [])
    }

    zapOutFees(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.zapOutFees, [])
    }
}
