import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xa0aa99f71033378864ed6e499eb03612264e319a.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, spender: string, value: ethers.BigNumber] & {owner: string, spender: string, value: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Transfer: new LogEvent<([from: string, to: string, value: ethers.BigNumber] & {from: string, to: string, value: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    DOMAIN_SEPARATOR: new Func<[], {}, string>(
        abi, '0x3644e515'
    ),
    allowance: new Func<[owner: string, spender: string], {owner: string, spender: string}, ethers.BigNumber>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[spender: string, amount: ethers.BigNumber], {spender: string, amount: ethers.BigNumber}, boolean>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[account: string], {account: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    burn: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    burnFrom: new Func<[account: string, amount: ethers.BigNumber], {account: string, amount: ethers.BigNumber}, []>(
        abi, '0x79cc6790'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    decreaseAllowance: new Func<[spender: string, subtractedValue: ethers.BigNumber], {spender: string, subtractedValue: ethers.BigNumber}, boolean>(
        abi, '0xa457c2d7'
    ),
    increaseAllowance: new Func<[spender: string, addedValue: ethers.BigNumber], {spender: string, addedValue: ethers.BigNumber}, boolean>(
        abi, '0x39509351'
    ),
    initialize: new Func<[name: string, symbol: string], {name: string, symbol: string}, boolean>(
        abi, '0x4cd88b76'
    ),
    mint: new Func<[recipient: string, amount: ethers.BigNumber], {recipient: string, amount: ethers.BigNumber}, []>(
        abi, '0x40c10f19'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nonces: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x7ecebe00'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    permit: new Func<[owner: string, spender: string, value: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string], {owner: string, spender: string, value: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string}, []>(
        abi, '0xd505accf'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[recipient: string, amount: ethers.BigNumber], {recipient: string, amount: ethers.BigNumber}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[sender: string, recipient: string, amount: ethers.BigNumber], {sender: string, recipient: string, amount: ethers.BigNumber}, boolean>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR(): Promise<string> {
        return this.eth_call(functions.DOMAIN_SEPARATOR, [])
    }

    allowance(owner: string, spender: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.allowance, [owner, spender])
    }

    balanceOf(account: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [account])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nonces(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nonces, [owner])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }
}
