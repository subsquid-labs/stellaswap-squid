import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xb0dfd6f3fddb219e60fcdc1ea3d04b22f2ffa9cc.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const functions = {
    addLiquidity: new Func<[pool: string, basePool: string, meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>, minToMint: ethers.BigNumber, deadline: ethers.BigNumber], {pool: string, basePool: string, meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>, minToMint: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x0d6307eb'
    ),
    calculateConvert: new Func<[fromPool: string, toPool: string, amount: ethers.BigNumber], {fromPool: string, toPool: string, amount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x643abb86'
    ),
    calculateRemoveBaseLiquidityOneToken: new Func<[pool: string, basePool: string, _token_amount: ethers.BigNumber, iBase: number], {pool: string, basePool: string, _token_amount: ethers.BigNumber, iBase: number}, ethers.BigNumber>(
        abi, '0x54681c41'
    ),
    calculateRemoveLiquidity: new Func<[pool: string, basePool: string, amount: ethers.BigNumber], {pool: string, basePool: string, amount: ethers.BigNumber}, ([meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>] & {meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>})>(
        abi, '0x0c8b2216'
    ),
    calculateSwapFromBase: new Func<[pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber], {pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x8a311c57'
    ),
    calculateSwapToBase: new Func<[pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber], {pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x3214b8c9'
    ),
    calculateTokenAmount: new Func<[pool: string, basePool: string, meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>, is_deposit: boolean], {pool: string, basePool: string, meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>, is_deposit: boolean}, ethers.BigNumber>(
        abi, '0x77269e29'
    ),
    convert: new Func<[fromPool: string, toPool: string, amount: ethers.BigNumber, minToMint: ethers.BigNumber, deadline: ethers.BigNumber], {fromPool: string, toPool: string, amount: ethers.BigNumber, minToMint: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x79701821'
    ),
    removeBaseLiquidityOneToken: new Func<[pool: string, basePool: string, _token_amount: ethers.BigNumber, i: number, _min_amount: ethers.BigNumber, deadline: ethers.BigNumber], {pool: string, basePool: string, _token_amount: ethers.BigNumber, i: number, _min_amount: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x998cae47'
    ),
    removeLiquidity: new Func<[pool: string, basePool: string, _amount: ethers.BigNumber, min_amounts_meta: Array<ethers.BigNumber>, min_amounts_base: Array<ethers.BigNumber>, deadline: ethers.BigNumber], {pool: string, basePool: string, _amount: ethers.BigNumber, min_amounts_meta: Array<ethers.BigNumber>, min_amounts_base: Array<ethers.BigNumber>, deadline: ethers.BigNumber}, ([amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>] & {amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>})>(
        abi, '0x24a5bf21'
    ),
    swapFromBase: new Func<[pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber, minDy: ethers.BigNumber, deadline: ethers.BigNumber], {pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber, minDy: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x38c78973'
    ),
    swapToBase: new Func<[pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber, minDy: ethers.BigNumber, deadline: ethers.BigNumber], {pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber, minDy: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xff969322'
    ),
}

export class Contract extends ContractBase {

    calculateConvert(fromPool: string, toPool: string, amount: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateConvert, [fromPool, toPool, amount])
    }

    calculateRemoveBaseLiquidityOneToken(pool: string, basePool: string, _token_amount: ethers.BigNumber, iBase: number): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateRemoveBaseLiquidityOneToken, [pool, basePool, _token_amount, iBase])
    }

    calculateRemoveLiquidity(pool: string, basePool: string, amount: ethers.BigNumber): Promise<([meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>] & {meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>})> {
        return this.eth_call(functions.calculateRemoveLiquidity, [pool, basePool, amount])
    }

    calculateSwapFromBase(pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateSwapFromBase, [pool, basePool, tokenIndexFrom, tokenIndexTo, dx])
    }

    calculateSwapToBase(pool: string, basePool: string, tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateSwapToBase, [pool, basePool, tokenIndexFrom, tokenIndexTo, dx])
    }

    calculateTokenAmount(pool: string, basePool: string, meta_amounts: Array<ethers.BigNumber>, base_amounts: Array<ethers.BigNumber>, is_deposit: boolean): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateTokenAmount, [pool, basePool, meta_amounts, base_amounts, is_deposit])
    }
}
