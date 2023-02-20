import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x1ff2adaa387dd27c22b31086e658108588eda03a.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    Collect: new LogEvent<([tokenId: ethers.BigNumber, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {tokenId: ethers.BigNumber, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0x40d0efd1a53d60ecbf40971b9daf7dc90178c3aadc7aab1765632738fa8b8f01'
    ),
    DecreaseLiquidity: new LogEvent<([tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0x26f6a048ee9138f2c0ce266f322cb99228e8d619ae2bff30c67f8dcf9d2377b4'
    ),
    IncreaseLiquidity: new LogEvent<([tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, actualLiquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber, pool: string] & {tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, actualLiquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber, pool: string})>(
        abi, '0x8a82de7fe9b33e0e6bca0e26f5bd14a74f1164ffe236d50e0a36c3ea70f2b814'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    DOMAIN_SEPARATOR: new Func<[], {}, string>(
        abi, '0x3644e515'
    ),
    PERMIT_TYPEHASH: new Func<[], {}, string>(
        abi, '0x30adf81f'
    ),
    WNativeToken: new Func<[], {}, string>(
        abi, '0x8af3ac85'
    ),
    algebraMintCallback: new Func<[amount0Owed: ethers.BigNumber, amount1Owed: ethers.BigNumber, data: string], {amount0Owed: ethers.BigNumber, amount1Owed: ethers.BigNumber, data: string}, []>(
        abi, '0x3dd657c5'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    baseURI: new Func<[], {}, string>(
        abi, '0x6c0360eb'
    ),
    burn: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    collect: new Func<[params: ([tokenId: ethers.BigNumber, recipient: string, amount0Max: ethers.BigNumber, amount1Max: ethers.BigNumber] & {tokenId: ethers.BigNumber, recipient: string, amount0Max: ethers.BigNumber, amount1Max: ethers.BigNumber})], {params: ([tokenId: ethers.BigNumber, recipient: string, amount0Max: ethers.BigNumber, amount1Max: ethers.BigNumber] & {tokenId: ethers.BigNumber, recipient: string, amount0Max: ethers.BigNumber, amount1Max: ethers.BigNumber})}, ([amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0xfc6f7865'
    ),
    createAndInitializePoolIfNecessary: new Func<[token0: string, token1: string, sqrtPriceX96: ethers.BigNumber], {token0: string, token1: string, sqrtPriceX96: ethers.BigNumber}, string>(
        abi, '0x51246d6e'
    ),
    decreaseLiquidity: new Func<[params: ([tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber] & {tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber})], {params: ([tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber] & {tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber})}, ([amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0x0c49ccbe'
    ),
    factory: new Func<[], {}, string>(
        abi, '0xc45a0155'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    increaseLiquidity: new Func<[params: ([tokenId: ethers.BigNumber, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber] & {tokenId: ethers.BigNumber, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber})], {params: ([tokenId: ethers.BigNumber, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber] & {tokenId: ethers.BigNumber, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, deadline: ethers.BigNumber})}, ([liquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {liquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0x219f5d17'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    mint: new Func<[params: ([token0: string, token1: string, tickLower: number, tickUpper: number, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, recipient: string, deadline: ethers.BigNumber] & {token0: string, token1: string, tickLower: number, tickUpper: number, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, recipient: string, deadline: ethers.BigNumber})], {params: ([token0: string, token1: string, tickLower: number, tickUpper: number, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, recipient: string, deadline: ethers.BigNumber] & {token0: string, token1: string, tickLower: number, tickUpper: number, amount0Desired: ethers.BigNumber, amount1Desired: ethers.BigNumber, amount0Min: ethers.BigNumber, amount1Min: ethers.BigNumber, recipient: string, deadline: ethers.BigNumber})}, ([tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {tokenId: ethers.BigNumber, liquidity: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber})>(
        abi, '0x9cc1a283'
    ),
    multicall: new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    permit: new Func<[spender: string, tokenId: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string], {spender: string, tokenId: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0x7ac2ff7b'
    ),
    poolDeployer: new Func<[], {}, string>(
        abi, '0x3119049a'
    ),
    positions: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, ([nonce: ethers.BigNumber, operator: string, token0: string, token1: string, tickLower: number, tickUpper: number, liquidity: ethers.BigNumber, feeGrowthInside0LastX128: ethers.BigNumber, feeGrowthInside1LastX128: ethers.BigNumber, tokensOwed0: ethers.BigNumber, tokensOwed1: ethers.BigNumber] & {nonce: ethers.BigNumber, operator: string, token0: string, token1: string, tickLower: number, tickUpper: number, liquidity: ethers.BigNumber, feeGrowthInside0LastX128: ethers.BigNumber, feeGrowthInside1LastX128: ethers.BigNumber, tokensOwed0: ethers.BigNumber, tokensOwed1: ethers.BigNumber})>(
        abi, '0x99fbab88'
    ),
    refundNativeToken: new Func<[], {}, []>(
        abi, '0x41865270'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    selfPermit: new Func<[token: string, value: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string], {token: string, value: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0xf3995c67'
    ),
    selfPermitAllowed: new Func<[token: string, nonce: ethers.BigNumber, expiry: ethers.BigNumber, v: number, r: string, s: string], {token: string, nonce: ethers.BigNumber, expiry: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0x4659a494'
    ),
    selfPermitAllowedIfNecessary: new Func<[token: string, nonce: ethers.BigNumber, expiry: ethers.BigNumber, v: number, r: string, s: string], {token: string, nonce: ethers.BigNumber, expiry: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0xa4a78f0c'
    ),
    selfPermitIfNecessary: new Func<[token: string, value: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string], {token: string, value: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0xc2e3140a'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    sweepToken: new Func<[token: string, amountMinimum: ethers.BigNumber, recipient: string], {token: string, amountMinimum: ethers.BigNumber, recipient: string}, []>(
        abi, '0xdf2ab5bb'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4f6ccce7'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: ethers.BigNumber], {owner: string, index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    unwrapWNativeToken: new Func<[amountMinimum: ethers.BigNumber, recipient: string], {amountMinimum: ethers.BigNumber, recipient: string}, []>(
        abi, '0x69bc35b2'
    ),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR(): Promise<string> {
        return this.eth_call(functions.DOMAIN_SEPARATOR, [])
    }

    PERMIT_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.PERMIT_TYPEHASH, [])
    }

    WNativeToken(): Promise<string> {
        return this.eth_call(functions.WNativeToken, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    baseURI(): Promise<string> {
        return this.eth_call(functions.baseURI, [])
    }

    factory(): Promise<string> {
        return this.eth_call(functions.factory, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    poolDeployer(): Promise<string> {
        return this.eth_call(functions.poolDeployer, [])
    }

    positions(tokenId: ethers.BigNumber): Promise<([nonce: ethers.BigNumber, operator: string, token0: string, token1: string, tickLower: number, tickUpper: number, liquidity: ethers.BigNumber, feeGrowthInside0LastX128: ethers.BigNumber, feeGrowthInside1LastX128: ethers.BigNumber, tokensOwed0: ethers.BigNumber, tokensOwed1: ethers.BigNumber] & {nonce: ethers.BigNumber, operator: string, token0: string, token1: string, tickLower: number, tickUpper: number, liquidity: ethers.BigNumber, feeGrowthInside0LastX128: ethers.BigNumber, feeGrowthInside1LastX128: ethers.BigNumber, tokensOwed0: ethers.BigNumber, tokensOwed1: ethers.BigNumber})> {
        return this.eth_call(functions.positions, [tokenId])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenOfOwnerByIndex(owner: string, index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }
}
