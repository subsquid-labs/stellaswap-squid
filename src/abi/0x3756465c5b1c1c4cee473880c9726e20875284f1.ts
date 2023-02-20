import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x3756465c5b1c1c4cee473880c9726e20875284f1.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AddedFrontEnd: new LogEvent<([promoter: ethers.BigNumber] & {promoter: ethers.BigNumber})>(
        abi, '0x9d7c7013bbd38c45562efb3f7031f740c1f8b8886dbbf421142755ed68339f4c'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    BorrowToken: new LogEvent<([vaultID: ethers.BigNumber, amount: ethers.BigNumber] & {vaultID: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x3e08df88d8e28f37df9bf227d3142ac506a364403445661a60891a49ed6792ca'
    ),
    BoughtRiskyDebtVault: new LogEvent<([riskyVault: ethers.BigNumber, newVault: ethers.BigNumber, riskyVaultBuyer: string, amountPaidtoBuy: ethers.BigNumber] & {riskyVault: ethers.BigNumber, newVault: ethers.BigNumber, riskyVaultBuyer: string, amountPaidtoBuy: ethers.BigNumber})>(
        abi, '0xa4cf7276e26bb566de2c7540759e85736eb743807343fd27e6e679b20e881441'
    ),
    BurnedToken: new LogEvent<([amount: ethers.BigNumber] & {amount: ethers.BigNumber})>(
        abi, '0xb1f67ade07cda330ac167f4fcc4c01b94fdfc04d401cf85e487f0a5b8b98e75f'
    ),
    CreateVault: new LogEvent<([vaultID: ethers.BigNumber, creator: string] & {vaultID: ethers.BigNumber, creator: string})>(
        abi, '0x8b6c1d05c678fa59695e26465a85918ce0fc63a88f74af53d1daef8f0a9c7804'
    ),
    DepositCollateral: new LogEvent<([vaultID: ethers.BigNumber, amount: ethers.BigNumber] & {vaultID: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x52c4e7127ec34e8fc95f09ce2d06b4f00acca12ccbcdfb246ef67ee6aefe068d'
    ),
    DestroyVault: new LogEvent<([vaultID: ethers.BigNumber] & {vaultID: ethers.BigNumber})>(
        abi, '0x4fe08624ee65b341c38ab9693d216b909d4ddee1bc8d3fe0fea14026c361b465'
    ),
    LiquidateVault: new LogEvent<([vaultID: ethers.BigNumber, owner: string, buyer: string, debtRepaid: ethers.BigNumber, collateralLiquidated: ethers.BigNumber, closingFee: ethers.BigNumber] & {vaultID: ethers.BigNumber, owner: string, buyer: string, debtRepaid: ethers.BigNumber, collateralLiquidated: ethers.BigNumber, closingFee: ethers.BigNumber})>(
        abi, '0x4d151d3a98b83151d51917640c221f8c8e3c054422ea1b48dcbbd57e3f4210d5'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    PayBackToken: new LogEvent<([vaultID: ethers.BigNumber, amount: ethers.BigNumber, closingFee: ethers.BigNumber] & {vaultID: ethers.BigNumber, amount: ethers.BigNumber, closingFee: ethers.BigNumber})>(
        abi, '0x31f96762af4051f367185773cc2f55bfb112a6c114b3407ded1f321a9eb199ac'
    ),
    RemovedFrontEnd: new LogEvent<([promoter: ethers.BigNumber] & {promoter: ethers.BigNumber})>(
        abi, '0x9b9f950fb3755096dbbe8b1519e73f7c6d1a0507f514fced444919530c00d719'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    UpdatedAdmin: new LogEvent<([newAdmin: string] & {newAdmin: string})>(
        abi, '0xfce52dd00c7849a7f2602c1f189745238d6a2db16fabf54376ce24cc2fa3d57f'
    ),
    UpdatedClosingFee: new LogEvent<([newFee: ethers.BigNumber] & {newFee: ethers.BigNumber})>(
        abi, '0xc1b83121984ef8e824a0babc08fc162077c0716a4dc307121f306e6dfb13806c'
    ),
    UpdatedDebtRatio: new LogEvent<([_debtRatio: ethers.BigNumber] & {_debtRatio: ethers.BigNumber})>(
        abi, '0x199e93b2fae27b389e2d09761871573f60121b8521be96b8f28c83bf94846ac2'
    ),
    UpdatedEthPriceSource: new LogEvent<([_ethPriceSourceAddress: string] & {_ethPriceSourceAddress: string})>(
        abi, '0xc525e5fed1508c998d3f14bf52f933df1dd16dbf48e2944c426be721e268b755'
    ),
    UpdatedFees: new LogEvent<([_adminFee: ethers.BigNumber, _refFee: ethers.BigNumber] & {_adminFee: ethers.BigNumber, _refFee: ethers.BigNumber})>(
        abi, '0x4d32f38862d5eb71edfefb7955873bd55920dc98159b6f53f8be62fbf0bebb4b'
    ),
    UpdatedFrontEnd: new LogEvent<([promoter: ethers.BigNumber, newFee: ethers.BigNumber] & {promoter: ethers.BigNumber, newFee: ethers.BigNumber})>(
        abi, '0xbfdd5aecf44aa804bf11f070a41765d280dab82adbfd1c55e1e85b7d5b7920b4'
    ),
    UpdatedGainRatio: new LogEvent<([_gainRatio: ethers.BigNumber] & {_gainRatio: ethers.BigNumber})>(
        abi, '0xb6d384ad48d9c5c042c81fa0f88d8061ef87b38475101d6aa5f9ae5a8274a64e'
    ),
    UpdatedInterestRate: new LogEvent<([interestRate: ethers.BigNumber] & {interestRate: ethers.BigNumber})>(
        abi, '0x323264e3ca065ee856fe1b11204d8896a783bccf148380ac5d7362eb5c4c36a8'
    ),
    UpdatedMaxDebt: new LogEvent<([newMaxDebt: ethers.BigNumber] & {newMaxDebt: ethers.BigNumber})>(
        abi, '0x1dd8f42ee4750a70f6662d1383372472422592497256d506437e35b3fa914d9b'
    ),
    UpdatedMinCollateralRatio: new LogEvent<([newMinCollateralRatio: ethers.BigNumber] & {newMinCollateralRatio: ethers.BigNumber})>(
        abi, '0xc0880963f3abc486dbb8b8f04ba4ce47c5b5cd3c59b6b7655f6011da0bf33650'
    ),
    UpdatedMinDebt: new LogEvent<([newMinDebt: ethers.BigNumber] & {newMinDebt: ethers.BigNumber})>(
        abi, '0x4533506fbaba6b18743358b6e6fb9392e8cb21757487b68d232a01b140bbec01'
    ),
    UpdatedOpeningFee: new LogEvent<([newFee: ethers.BigNumber] & {newFee: ethers.BigNumber})>(
        abi, '0xc4ced91ca77dc4287a54d9bd9b15c69b3aba262e30eba7c93301c48606019c94'
    ),
    UpdatedOracleName: new LogEvent<([oracle: string] & {oracle: string})>(
        abi, '0x0d82453dd4ad18b5ce3db08c34a39340ad2bf15046a7d0e86aa075483eb121d8'
    ),
    UpdatedRef: new LogEvent<([newRef: string] & {newRef: string})>(
        abi, '0x8ed6553fa1e634b0152cd3539c572bee8c662e446820646d73a0e1b47776af93'
    ),
    UpdatedStabilityPool: new LogEvent<([pool: string] & {pool: string})>(
        abi, '0x0644c4f539d7f787d2287c12d9425e80aefc8bdae99c70af4ca66fb0742577e8'
    ),
    UpdatedTokenURI: new LogEvent<([uri: string] & {uri: string})>(
        abi, '0xfda45751019c07e08a3ebf7d73a4aea1a6c36bee12d87089096012911a756ab5'
    ),
    WithdrawCollateral: new LogEvent<([vaultID: ethers.BigNumber, amount: ethers.BigNumber] & {vaultID: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x6c0ea3bea9dd66afa8f9d39d6eb93d833466190330813b42835efc650dca4cb9'
    ),
    WithdrawInterest: new LogEvent<([earned: ethers.BigNumber] & {earned: ethers.BigNumber})>(
        abi, '0xc73fb14682b9d51008c1faff296cc9b351c0597de5e25b4ffa158f47f8254e4c'
    ),
}

export const functions = {
    _minimumCollateralPercentage: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe5f4dc92'
    ),
    accumulatedVaultDebt: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x2df87573'
    ),
    addFrontEnd: new Func<[_promoter: ethers.BigNumber], {_promoter: ethers.BigNumber}, []>(
        abi, '0x40803854'
    ),
    adm: new Func<[], {}, string>(
        abi, '0x04d7aef2'
    ),
    adminFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0xa0be06f9'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    borrowToken: new Func<[vaultID: ethers.BigNumber, amount: ethers.BigNumber, _front: ethers.BigNumber], {vaultID: ethers.BigNumber, amount: ethers.BigNumber, _front: ethers.BigNumber}, []>(
        abi, '0x97a41b8e'
    ),
    burn: new Func<[amountToken: ethers.BigNumber], {amountToken: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    buyRiskDebtVault: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x9035e4cb'
    ),
    calculateFee: new Func<[fee: ethers.BigNumber, amount: ethers.BigNumber, promoFee: ethers.BigNumber], {fee: ethers.BigNumber, amount: ethers.BigNumber, promoFee: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x5357b989'
    ),
    changeEthPriceSource: new Func<[ethPriceSourceAddress: string], {ethPriceSourceAddress: string}, []>(
        abi, '0x07960532'
    ),
    checkCollateralPercentage: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xdf987846'
    ),
    checkCost: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x11b4a832'
    ),
    checkExtract: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x56572ac0'
    ),
    checkLiquidation: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, boolean>(
        abi, '0xb86f6aef'
    ),
    closingFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0x1c883e7b'
    ),
    collateral: new Func<[], {}, string>(
        abi, '0xd8dfeb45'
    ),
    createVault: new Func<[], {}, ethers.BigNumber>(
        abi, '0x5d12928b'
    ),
    debtRatio: new Func<[], {}, ethers.BigNumber>(
        abi, '0xcea55f57'
    ),
    decimalDifferenceRaisedToTen: new Func<[], {}, ethers.BigNumber>(
        abi, '0xa57ff503'
    ),
    depositCollateral: new Func<[vaultID: ethers.BigNumber, amount: ethers.BigNumber], {vaultID: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0xece13732'
    ),
    destroyVault: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, []>(
        abi, '0x85e290a3'
    ),
    ethPriceSource: new Func<[], {}, string>(
        abi, '0x42f371c6'
    ),
    exists: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, boolean>(
        abi, '0x4f558e79'
    ),
    gainRatio: new Func<[], {}, ethers.BigNumber>(
        abi, '0x311f392a'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getClosingFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0xa5e98837'
    ),
    getDebtCeiling: new Func<[], {}, ethers.BigNumber>(
        abi, '0x94cd4ba7'
    ),
    getEthPriceSource: new Func<[], {}, ethers.BigNumber>(
        abi, '0x98c3f2db'
    ),
    getPaid: new Func<[], {}, []>(
        abi, '0xcf41d6f8'
    ),
    getTokenPriceSource: new Func<[], {}, ethers.BigNumber>(
        abi, '0xcd44db1b'
    ),
    getTotalValueLocked: new Func<[], {}, ethers.BigNumber>(
        abi, '0xb26025aa'
    ),
    iR: new Func<[], {}, ethers.BigNumber>(
        abi, '0x241a545a'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isValidCollateral: new Func<[_collateral: ethers.BigNumber, debt: ethers.BigNumber], {_collateral: ethers.BigNumber, debt: ethers.BigNumber}, boolean>(
        abi, '0x687e8c17'
    ),
    lastInterest: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x97ff37b9'
    ),
    liquidateVault: new Func<[vaultID: ethers.BigNumber, _front: ethers.BigNumber], {vaultID: ethers.BigNumber, _front: ethers.BigNumber}, []>(
        abi, '0x952cc86a'
    ),
    mai: new Func<[], {}, string>(
        abi, '0x570b2b84'
    ),
    maiDebt: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf1c91fa6'
    ),
    maticDebt: new Func<[_: string], {}, ethers.BigNumber>(
        abi, '0xb165ff0b'
    ),
    maxDebt: new Func<[], {}, ethers.BigNumber>(
        abi, '0xd0064c00'
    ),
    minDebt: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf17336d7'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    openingFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0x728bbbb5'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    payBackToken: new Func<[vaultID: ethers.BigNumber, amount: ethers.BigNumber, _front: ethers.BigNumber], {vaultID: ethers.BigNumber, amount: ethers.BigNumber, _front: ethers.BigNumber}, []>(
        abi, '0x3128ef27'
    ),
    paybackTokenAll: new Func<[vaultID: ethers.BigNumber, deadline: ethers.BigNumber, _front: ethers.BigNumber], {vaultID: ethers.BigNumber, deadline: ethers.BigNumber, _front: ethers.BigNumber}, []>(
        abi, '0xcf5f0f3c'
    ),
    priceSourceDecimals: new Func<[], {}, ethers.BigNumber>(
        abi, '0xc71abb32'
    ),
    promoter: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xd73464cc'
    ),
    ref: new Func<[], {}, string>(
        abi, '0x21a78f68'
    ),
    refFee: new Func<[], {}, ethers.BigNumber>(
        abi, '0xec2e0ab3'
    ),
    removeFrontEnd: new Func<[_promoter: ethers.BigNumber], {_promoter: ethers.BigNumber}, []>(
        abi, '0x5ff09ac2'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setAdmin: new Func<[_adm: string], {_adm: string}, []>(
        abi, '0x704b6c02'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setClosingFee: new Func<[_closingFee: ethers.BigNumber], {_closingFee: ethers.BigNumber}, []>(
        abi, '0x3db99177'
    ),
    setDebtRatio: new Func<[_debtRatio: ethers.BigNumber], {_debtRatio: ethers.BigNumber}, []>(
        abi, '0xeb6a887d'
    ),
    setFees: new Func<[_admin: ethers.BigNumber, _ref: ethers.BigNumber], {_admin: ethers.BigNumber, _ref: ethers.BigNumber}, []>(
        abi, '0x0b78f9c0'
    ),
    setGainRatio: new Func<[_gainRatio: ethers.BigNumber], {_gainRatio: ethers.BigNumber}, []>(
        abi, '0xffc73da7'
    ),
    setInterestRate: new Func<[_iR: ethers.BigNumber], {_iR: ethers.BigNumber}, []>(
        abi, '0x5f84f302'
    ),
    setMaxDebt: new Func<[_maxDebt: ethers.BigNumber], {_maxDebt: ethers.BigNumber}, []>(
        abi, '0x6526941b'
    ),
    setMinCollateralRatio: new Func<[minimumCollateralPercentage: ethers.BigNumber], {minimumCollateralPercentage: ethers.BigNumber}, []>(
        abi, '0x38536275'
    ),
    setMinDebt: new Func<[_minDebt: ethers.BigNumber], {_minDebt: ethers.BigNumber}, []>(
        abi, '0x6234dc21'
    ),
    setOpeningFee: new Func<[_openingFee: ethers.BigNumber], {_openingFee: ethers.BigNumber}, []>(
        abi, '0x86375994'
    ),
    setRef: new Func<[_ref: string], {_ref: string}, []>(
        abi, '0x6bc855cc'
    ),
    setStabilityPool: new Func<[_pool: string], {_pool: string}, []>(
        abi, '0x98d721e0'
    ),
    setTokenURI: new Func<[_uri: string], {_uri: string}, []>(
        abi, '0xe0df5b6f'
    ),
    stabilityPool: new Func<[], {}, string>(
        abi, '0x048c661d'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
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
    tokenPeg: new Func<[], {}, ethers.BigNumber>(
        abi, '0xcdfedd63'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalBorrowed: new Func<[], {}, ethers.BigNumber>(
        abi, '0x4c19386c'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    updateFrontEnd: new Func<[_promoter: ethers.BigNumber, cashback: ethers.BigNumber], {_promoter: ethers.BigNumber, cashback: ethers.BigNumber}, []>(
        abi, '0xcc02ce22'
    ),
    updateOracleName: new Func<[_oracle: string], {_oracle: string}, []>(
        abi, '0xa9c904b5'
    ),
    updateVaultDebt: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x93ee476a'
    ),
    uri: new Func<[], {}, string>(
        abi, '0xeac989f8'
    ),
    vaultCollateral: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xd4a9b2c5'
    ),
    vaultCount: new Func<[], {}, ethers.BigNumber>(
        abi, '0xa7c6a100'
    ),
    vaultDebt: new Func<[vaultID: ethers.BigNumber], {vaultID: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xd310f49b'
    ),
    version: new Func<[], {}, number>(
        abi, '0x54fd4d50'
    ),
    withdrawCollateral: new Func<[vaultID: ethers.BigNumber, amount: ethers.BigNumber], {vaultID: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0x767a7b05'
    ),
    withdrawInterest: new Func<[], {}, []>(
        abi, '0x0063750c'
    ),
}

export class Contract extends ContractBase {

    _minimumCollateralPercentage(): Promise<ethers.BigNumber> {
        return this.eth_call(functions._minimumCollateralPercentage, [])
    }

    accumulatedVaultDebt(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.accumulatedVaultDebt, [arg0])
    }

    adm(): Promise<string> {
        return this.eth_call(functions.adm, [])
    }

    adminFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.adminFee, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    calculateFee(fee: ethers.BigNumber, amount: ethers.BigNumber, promoFee: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calculateFee, [fee, amount, promoFee])
    }

    checkCollateralPercentage(vaultID: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.checkCollateralPercentage, [vaultID])
    }

    checkCost(vaultID: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.checkCost, [vaultID])
    }

    checkExtract(vaultID: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.checkExtract, [vaultID])
    }

    checkLiquidation(vaultID: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.checkLiquidation, [vaultID])
    }

    closingFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.closingFee, [])
    }

    collateral(): Promise<string> {
        return this.eth_call(functions.collateral, [])
    }

    debtRatio(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.debtRatio, [])
    }

    decimalDifferenceRaisedToTen(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.decimalDifferenceRaisedToTen, [])
    }

    ethPriceSource(): Promise<string> {
        return this.eth_call(functions.ethPriceSource, [])
    }

    exists(vaultID: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.exists, [vaultID])
    }

    gainRatio(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.gainRatio, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getClosingFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getClosingFee, [])
    }

    getDebtCeiling(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getDebtCeiling, [])
    }

    getEthPriceSource(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getEthPriceSource, [])
    }

    getTokenPriceSource(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getTokenPriceSource, [])
    }

    getTotalValueLocked(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getTotalValueLocked, [])
    }

    iR(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.iR, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isValidCollateral(_collateral: ethers.BigNumber, debt: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.isValidCollateral, [_collateral, debt])
    }

    lastInterest(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lastInterest, [arg0])
    }

    mai(): Promise<string> {
        return this.eth_call(functions.mai, [])
    }

    maiDebt(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maiDebt, [])
    }

    maticDebt(arg0: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maticDebt, [arg0])
    }

    maxDebt(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxDebt, [])
    }

    minDebt(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.minDebt, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    openingFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.openingFee, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    priceSourceDecimals(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.priceSourceDecimals, [])
    }

    promoter(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.promoter, [arg0])
    }

    ref(): Promise<string> {
        return this.eth_call(functions.ref, [])
    }

    refFee(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.refFee, [])
    }

    stabilityPool(): Promise<string> {
        return this.eth_call(functions.stabilityPool, [])
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

    tokenPeg(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenPeg, [])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalBorrowed(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalBorrowed, [])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }

    uri(): Promise<string> {
        return this.eth_call(functions.uri, [])
    }

    vaultCollateral(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.vaultCollateral, [arg0])
    }

    vaultCount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.vaultCount, [])
    }

    vaultDebt(vaultID: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.vaultDebt, [vaultID])
    }

    version(): Promise<number> {
        return this.eth_call(functions.version, [])
    }
}
