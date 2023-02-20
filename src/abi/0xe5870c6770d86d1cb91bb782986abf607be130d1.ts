import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xe5870c6770d86d1cb91bb782986abf607be130d1.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const functions = {
    factory: new Func<[], {}, string>(
        abi, '0xc45a0155'
    ),
    quoteZapInToken: new Func<[_from: string, amount: ethers.BigNumber, _to: string], {_from: string, amount: ethers.BigNumber, _to: string}, ethers.BigNumber>(
        abi, '0x89d789db'
    ),
    quoteZapOut: new Func<[_from: string, amount: ethers.BigNumber], {_from: string, amount: ethers.BigNumber}, ([amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0x668979b0'
    ),
}

export class Contract extends ContractBase {

    factory(): Promise<string> {
        return this.eth_call(functions.factory, [])
    }

    quoteZapInToken(_from: string, amount: ethers.BigNumber, _to: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.quoteZapInToken, [_from, amount, _to])
    }

    quoteZapOut(_from: string, amount: ethers.BigNumber): Promise<([amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {amount0: ethers.BigNumber, amount1: ethers.BigNumber})> {
        return this.eth_call(functions.quoteZapOut, [_from, amount])
    }
}
