import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x7fbe3126c03444d43fc403626ec81e3e809e6b46.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AddLiquidity: new LogEvent<([provider: string, tokenAmounts: Array<ethers.BigNumber>, fees: Array<ethers.BigNumber>, invariant: ethers.BigNumber, lpTokenSupply: ethers.BigNumber] & {provider: string, tokenAmounts: Array<ethers.BigNumber>, fees: Array<ethers.BigNumber>, invariant: ethers.BigNumber, lpTokenSupply: ethers.BigNumber})>(
        abi, '0x189c623b666b1b45b83d7178f39b8c087cb09774317ca2f53c2d3c3726f222a2'
    ),
    FlashLoan: new LogEvent<([receiver: string, tokenIndex: number, amount: ethers.BigNumber, amountFee: ethers.BigNumber, protocolFee: ethers.BigNumber] & {receiver: string, tokenIndex: number, amount: ethers.BigNumber, amountFee: ethers.BigNumber, protocolFee: ethers.BigNumber})>(
        abi, '0x7c186b2827b23e9024e7b29869cba58a97a4bac6567802a8ea6a8afa7b8c22f0'
    ),
    NewAdminFee: new LogEvent<([newAdminFee: ethers.BigNumber] & {newAdminFee: ethers.BigNumber})>(
        abi, '0xab599d640ca80cde2b09b128a4154a8dfe608cb80f4c9399c8b954b01fd35f38'
    ),
    NewSwapFee: new LogEvent<([newSwapFee: ethers.BigNumber] & {newSwapFee: ethers.BigNumber})>(
        abi, '0xd88ea5155021c6f8dafa1a741e173f595cdf77ce7c17d43342131d7f06afdfe5'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    RampA: new LogEvent<([oldA: ethers.BigNumber, newA: ethers.BigNumber, initialTime: ethers.BigNumber, futureTime: ethers.BigNumber] & {oldA: ethers.BigNumber, newA: ethers.BigNumber, initialTime: ethers.BigNumber, futureTime: ethers.BigNumber})>(
        abi, '0xa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c254'
    ),
    RemoveLiquidity: new LogEvent<([provider: string, tokenAmounts: Array<ethers.BigNumber>, lpTokenSupply: ethers.BigNumber] & {provider: string, tokenAmounts: Array<ethers.BigNumber>, lpTokenSupply: ethers.BigNumber})>(
        abi, '0x88d38ed598fdd809c2bf01ee49cd24b7fdabf379a83d29567952b60324d58cef'
    ),
    RemoveLiquidityImbalance: new LogEvent<([provider: string, tokenAmounts: Array<ethers.BigNumber>, fees: Array<ethers.BigNumber>, invariant: ethers.BigNumber, lpTokenSupply: ethers.BigNumber] & {provider: string, tokenAmounts: Array<ethers.BigNumber>, fees: Array<ethers.BigNumber>, invariant: ethers.BigNumber, lpTokenSupply: ethers.BigNumber})>(
        abi, '0x3631c28b1f9dd213e0319fb167b554d76b6c283a41143eb400a0d1adb1af1755'
    ),
    RemoveLiquidityOne: new LogEvent<([provider: string, lpTokenAmount: ethers.BigNumber, lpTokenSupply: ethers.BigNumber, boughtId: ethers.BigNumber, tokensBought: ethers.BigNumber] & {provider: string, lpTokenAmount: ethers.BigNumber, lpTokenSupply: ethers.BigNumber, boughtId: ethers.BigNumber, tokensBought: ethers.BigNumber})>(
        abi, '0x43fb02998f4e03da2e0e6fff53fdbf0c40a9f45f145dc377fc30615d7d7a8a64'
    ),
    StopRampA: new LogEvent<([currentA: ethers.BigNumber, time: ethers.BigNumber] & {currentA: ethers.BigNumber, time: ethers.BigNumber})>(
        abi, '0x46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc201938'
    ),
    TokenSwap: new LogEvent<([buyer: string, tokensSold: ethers.BigNumber, tokensBought: ethers.BigNumber, soldId: ethers.BigNumber, boughtId: ethers.BigNumber] & {buyer: string, tokensSold: ethers.BigNumber, tokensBought: ethers.BigNumber, soldId: ethers.BigNumber, boughtId: ethers.BigNumber})>(
        abi, '0xc6c1e0630dbe9130cc068028486c0d118ddcea348550819defd5cb8c257f8a38'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
}

export const functions = {
    MAX_BPS: new Func<[], {}, ethers.BigNumber>(
        abi, '0xfd967f47'
    ),
    addLiquidity: new Func<[amounts: Array<ethers.BigNumber>, minToMint: ethers.BigNumber, deadline: ethers.BigNumber], {amounts: Array<ethers.BigNumber>, minToMint: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4d49e87d'
    ),
    calculateRemoveLiquidity: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, Array<ethers.BigNumber>>(
        abi, '0xf2fad2b6'
    ),
    calculateRemoveLiquidityOneToken: new Func<[tokenAmount: ethers.BigNumber, tokenIndex: number], {tokenAmount: ethers.BigNumber, tokenIndex: number}, ethers.BigNumber>(
        abi, '0x342a87a1'
    ),
    calculateSwap: new Func<[tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber], {tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xa95b089f'
    ),
    calculateTokenAmount: new Func<[amounts: Array<ethers.BigNumber>, deposit: boolean], {amounts: Array<ethers.BigNumber>, deposit: boolean}, ethers.BigNumber>(
        abi, '0xe6ab2806'
    ),
    flashLoan: new Func<[receiver: string, token: string, amount: ethers.BigNumber, params: string], {receiver: string, token: string, amount: ethers.BigNumber, params: string}, []>(
        abi, '0x5cffe9de'
    ),
    flashLoanFeeBPS: new Func<[], {}, ethers.BigNumber>(
        abi, '0x7f1c825a'
    ),
    getA: new Func<[], {}, ethers.BigNumber>(
        abi, '0xd46300fd'
    ),
    getAPrecise: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0ba81959'
    ),
    getAdminBalance: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xef0a712f'
    ),
    getAdminBalances: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0x18f52ce2'
    ),
    getLpToken: new Func<[], {}, string>(
        abi, '0x8214f5a4'
    ),
    getNumberOfTokens: new Func<[], {}, ethers.BigNumber>(
        abi, '0xefeecb51'
    ),
    getToken: new Func<[index: number], {index: number}, string>(
        abi, '0x82b86600'
    ),
    getTokenBalance: new Func<[index: number], {index: number}, ethers.BigNumber>(
        abi, '0x91ceb3eb'
    ),
    getTokenBalances: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0xa1dc9031'
    ),
    getTokenIndex: new Func<[tokenAddress: string], {tokenAddress: string}, number>(
        abi, '0x66c0bd24'
    ),
    getTokenPrecisionMultipliers: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0xd41f6568'
    ),
    getTokens: new Func<[], {}, Array<string>>(
        abi, '0xaa6ca808'
    ),
    getVirtualPrice: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe25aa5fa'
    ),
    initialize: new Func<[_pooledTokens: Array<string>, decimals: Array<number>, lpTokenName: string, lpTokenSymbol: string, _a: ethers.BigNumber, _fee: ethers.BigNumber, _adminFee: ethers.BigNumber, lpTokenTargetAddress: string], {_pooledTokens: Array<string>, decimals: Array<number>, lpTokenName: string, lpTokenSymbol: string, _a: ethers.BigNumber, _fee: ethers.BigNumber, _adminFee: ethers.BigNumber, lpTokenTargetAddress: string}, []>(
        abi, '0xb28cb6dc'
    ),
    isFlashLoanEnabled: new Func<[], {}, boolean>(
        abi, '0xae3fcb1f'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    protocolFeeShareBPS: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe8cc7fb6'
    ),
    rampA: new Func<[futureA: ethers.BigNumber, futureTime: ethers.BigNumber], {futureA: ethers.BigNumber, futureTime: ethers.BigNumber}, []>(
        abi, '0x593d132c'
    ),
    removeLiquidity: new Func<[amount: ethers.BigNumber, minAmounts: Array<ethers.BigNumber>, deadline: ethers.BigNumber], {amount: ethers.BigNumber, minAmounts: Array<ethers.BigNumber>, deadline: ethers.BigNumber}, Array<ethers.BigNumber>>(
        abi, '0x31cd52b0'
    ),
    removeLiquidityImbalance: new Func<[amounts: Array<ethers.BigNumber>, maxBurnAmount: ethers.BigNumber, deadline: ethers.BigNumber], {amounts: Array<ethers.BigNumber>, maxBurnAmount: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x84cdd9bc'
    ),
    removeLiquidityOneToken: new Func<[tokenAmount: ethers.BigNumber, tokenIndex: number, minAmount: ethers.BigNumber, deadline: ethers.BigNumber], {tokenAmount: ethers.BigNumber, tokenIndex: number, minAmount: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x3e3a1560'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setAdminFee: new Func<[newAdminFee: ethers.BigNumber], {newAdminFee: ethers.BigNumber}, []>(
        abi, '0x8beb60b6'
    ),
    setFlashLoanFees: new Func<[newFlashLoanFeeBPS: ethers.BigNumber, newProtocolFeeShareBPS: ethers.BigNumber], {newFlashLoanFeeBPS: ethers.BigNumber, newProtocolFeeShareBPS: ethers.BigNumber}, []>(
        abi, '0xef815967'
    ),
    setSwapFee: new Func<[newSwapFee: ethers.BigNumber], {newSwapFee: ethers.BigNumber}, []>(
        abi, '0x34e19907'
    ),
    stopRampA: new Func<[], {}, []>(
        abi, '0xc4db7fa0'
    ),
    swap: new Func<[tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber, minDy: ethers.BigNumber, deadline: ethers.BigNumber], {tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber, minDy: ethers.BigNumber, deadline: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x91695586'
    ),
    swapStorage: new Func<[], {}, ([initialA: ethers.BigNumber, futureA: ethers.BigNumber, initialATime: ethers.BigNumber, futureATime: ethers.BigNumber, swapFee: ethers.BigNumber, adminFee: ethers.BigNumber, lpToken: string] & {initialA: ethers.BigNumber, futureA: ethers.BigNumber, initialATime: ethers.BigNumber, futureATime: ethers.BigNumber, swapFee: ethers.BigNumber, adminFee: ethers.BigNumber, lpToken: string})>(
        abi, '0x5fd65f0f'
    ),
    toggleFlashLoan: new Func<[enableFlashLoan: boolean], {enableFlashLoan: boolean}, []>(
        abi, '0x4bcdafac'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    withdrawAdminFees: new Func<[], {}, []>(
        abi, '0x0419b45a'
    ),
}

export class Contract extends ContractBase {

    MAX_BPS(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MAX_BPS, [])
    }

    calculateRemoveLiquidity(amount: ethers.BigNumber): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.calculateRemoveLiquidity, [amount])
    }

    calculateRemoveLiquidityOneToken(tokenAmount: ethers.BigNumber, tokenIndex: number): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateRemoveLiquidityOneToken, [tokenAmount, tokenIndex])
    }

    calculateSwap(tokenIndexFrom: number, tokenIndexTo: number, dx: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateSwap, [tokenIndexFrom, tokenIndexTo, dx])
    }

    calculateTokenAmount(amounts: Array<ethers.BigNumber>, deposit: boolean): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateTokenAmount, [amounts, deposit])
    }

    flashLoanFeeBPS(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.flashLoanFeeBPS, [])
    }

    getA(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getA, [])
    }

    getAPrecise(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getAPrecise, [])
    }

    getAdminBalance(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getAdminBalance, [index])
    }

    getAdminBalances(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getAdminBalances, [])
    }

    getLpToken(): Promise<string> {
        return this.eth_call(functions.getLpToken, [])
    }

    getNumberOfTokens(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getNumberOfTokens, [])
    }

    getToken(index: number): Promise<string> {
        return this.eth_call(functions.getToken, [index])
    }

    getTokenBalance(index: number): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getTokenBalance, [index])
    }

    getTokenBalances(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getTokenBalances, [])
    }

    getTokenIndex(tokenAddress: string): Promise<number> {
        return this.eth_call(functions.getTokenIndex, [tokenAddress])
    }

    getTokenPrecisionMultipliers(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getTokenPrecisionMultipliers, [])
    }

    getTokens(): Promise<Array<string>> {
        return this.eth_call(functions.getTokens, [])
    }

    getVirtualPrice(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getVirtualPrice, [])
    }

    isFlashLoanEnabled(): Promise<boolean> {
        return this.eth_call(functions.isFlashLoanEnabled, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    protocolFeeShareBPS(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.protocolFeeShareBPS, [])
    }

    swapStorage(): Promise<([initialA: ethers.BigNumber, futureA: ethers.BigNumber, initialATime: ethers.BigNumber, futureATime: ethers.BigNumber, swapFee: ethers.BigNumber, adminFee: ethers.BigNumber, lpToken: string] & {initialA: ethers.BigNumber, futureA: ethers.BigNumber, initialATime: ethers.BigNumber, futureATime: ethers.BigNumber, swapFee: ethers.BigNumber, adminFee: ethers.BigNumber, lpToken: string})> {
        return this.eth_call(functions.swapStorage, [])
    }
}
