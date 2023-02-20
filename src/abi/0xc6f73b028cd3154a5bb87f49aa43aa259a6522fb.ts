import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xc6f73b028cd3154a5bb87f49aa43aa259a6522fb.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    CancelTransaction: new LogEvent<([txHash: string, target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber] & {txHash: string, target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber})>(
        abi, '0x2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf87'
    ),
    ExecuteTransaction: new LogEvent<([txHash: string, target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber] & {txHash: string, target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber})>(
        abi, '0xa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e7'
    ),
    NewAdmin: new LogEvent<([newAdmin: string] & {newAdmin: string})>(
        abi, '0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c'
    ),
    NewDelay: new LogEvent<([newDelay: ethers.BigNumber] & {newDelay: ethers.BigNumber})>(
        abi, '0x948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c'
    ),
    NewPendingAdmin: new LogEvent<([newPendingAdmin: string] & {newPendingAdmin: string})>(
        abi, '0x69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a756'
    ),
    QueueTransaction: new LogEvent<([txHash: string, target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber] & {txHash: string, target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber})>(
        abi, '0x76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f'
    ),
}

export const functions = {
    GRACE_PERIOD: new Func<[], {}, ethers.BigNumber>(
        abi, '0xc1a287e2'
    ),
    MAXIMUM_DELAY: new Func<[], {}, ethers.BigNumber>(
        abi, '0x7d645fab'
    ),
    MINIMUM_DELAY: new Func<[], {}, ethers.BigNumber>(
        abi, '0xb1b43ae5'
    ),
    acceptAdmin: new Func<[], {}, []>(
        abi, '0x0e18b681'
    ),
    admin: new Func<[], {}, string>(
        abi, '0xf851a440'
    ),
    admin_initialized: new Func<[], {}, boolean>(
        abi, '0x6fc1f57e'
    ),
    cancelTransaction: new Func<[target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber], {target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber}, []>(
        abi, '0x591fcdfe'
    ),
    delay: new Func<[], {}, ethers.BigNumber>(
        abi, '0x6a42b8f8'
    ),
    executeTransaction: new Func<[target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber], {target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber}, string>(
        abi, '0x0825f38f'
    ),
    pendingAdmin: new Func<[], {}, string>(
        abi, '0x26782247'
    ),
    queueTransaction: new Func<[target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber], {target: string, value: ethers.BigNumber, signature: string, data: string, eta: ethers.BigNumber}, string>(
        abi, '0x3a66f901'
    ),
    queuedTransactions: new Func<[_: string], {}, boolean>(
        abi, '0xf2b06537'
    ),
    setDelay: new Func<[delay_: ethers.BigNumber], {delay_: ethers.BigNumber}, []>(
        abi, '0xe177246e'
    ),
    setPendingAdmin: new Func<[pendingAdmin_: string], {pendingAdmin_: string}, []>(
        abi, '0x4dd18bf5'
    ),
}

export class Contract extends ContractBase {

    GRACE_PERIOD(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.GRACE_PERIOD, [])
    }

    MAXIMUM_DELAY(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MAXIMUM_DELAY, [])
    }

    MINIMUM_DELAY(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MINIMUM_DELAY, [])
    }

    admin(): Promise<string> {
        return this.eth_call(functions.admin, [])
    }

    admin_initialized(): Promise<boolean> {
        return this.eth_call(functions.admin_initialized, [])
    }

    delay(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.delay, [])
    }

    pendingAdmin(): Promise<string> {
        return this.eth_call(functions.pendingAdmin, [])
    }

    queuedTransactions(arg0: string): Promise<boolean> {
        return this.eth_call(functions.queuedTransactions, [arg0])
    }
}
