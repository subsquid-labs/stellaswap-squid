import {CommonHandlerContext, EvmBlock} from '@subsquid/evm-processor'
import {LogItem, TransactionItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import * as abi from '../abi/0x3a82f4da24f93a32dc3c2a28cfa9d6e63ec28531'
import {GlmrMaiVaultEventAddedFrontEnd, GlmrMaiVaultEventApproval, GlmrMaiVaultEventApprovalForAll, GlmrMaiVaultEventBorrowToken, GlmrMaiVaultEventBoughtRiskyDebtVault, GlmrMaiVaultEventBurnedToken, GlmrMaiVaultEventCreateVault, GlmrMaiVaultEventDepositCollateral, GlmrMaiVaultEventDestroyVault, GlmrMaiVaultEventLiquidateVault, GlmrMaiVaultEventOwnershipTransferred, GlmrMaiVaultEventPayBackToken, GlmrMaiVaultEventRemovedFrontEnd, GlmrMaiVaultEventTransfer, GlmrMaiVaultEventUpdatedAdmin, GlmrMaiVaultEventUpdatedClosingFee, GlmrMaiVaultEventUpdatedDebtRatio, GlmrMaiVaultEventUpdatedEthPriceSource, GlmrMaiVaultEventUpdatedFees, GlmrMaiVaultEventUpdatedFrontEnd, GlmrMaiVaultEventUpdatedGainRatio, GlmrMaiVaultEventUpdatedInterestRate, GlmrMaiVaultEventUpdatedMaxDebt, GlmrMaiVaultEventUpdatedMinCollateralRatio, GlmrMaiVaultEventUpdatedMinDebt, GlmrMaiVaultEventUpdatedOpeningFee, GlmrMaiVaultEventUpdatedOracleName, GlmrMaiVaultEventUpdatedRef, GlmrMaiVaultEventUpdatedStabilityPool, GlmrMaiVaultEventUpdatedTokenUri, GlmrMaiVaultEventWithdrawCollateral, GlmrMaiVaultEventWithdrawInterest, GlmrMaiVaultFunctionAddFrontEnd, GlmrMaiVaultFunctionApprove, GlmrMaiVaultFunctionBorrowToken, GlmrMaiVaultFunctionBurn, GlmrMaiVaultFunctionBuyRiskDebtVault, GlmrMaiVaultFunctionChangeEthPriceSource, GlmrMaiVaultFunctionCreateVault, GlmrMaiVaultFunctionDepositCollateral, GlmrMaiVaultFunctionDestroyVault, GlmrMaiVaultFunctionGetPaid, GlmrMaiVaultFunctionLiquidateVault, GlmrMaiVaultFunctionPayBackToken, GlmrMaiVaultFunctionPaybackTokenAll, GlmrMaiVaultFunctionRemoveFrontEnd, GlmrMaiVaultFunctionRenounceOwnership, GlmrMaiVaultFunctionSafeTransferFrom0, GlmrMaiVaultFunctionSafeTransferFrom1, GlmrMaiVaultFunctionSetAdmin, GlmrMaiVaultFunctionSetApprovalForAll, GlmrMaiVaultFunctionSetClosingFee, GlmrMaiVaultFunctionSetDebtRatio, GlmrMaiVaultFunctionSetFees, GlmrMaiVaultFunctionSetGainRatio, GlmrMaiVaultFunctionSetInterestRate, GlmrMaiVaultFunctionSetMaxDebt, GlmrMaiVaultFunctionSetMinCollateralRatio, GlmrMaiVaultFunctionSetMinDebt, GlmrMaiVaultFunctionSetOpeningFee, GlmrMaiVaultFunctionSetRef, GlmrMaiVaultFunctionSetStabilityPool, GlmrMaiVaultFunctionSetTokenUri, GlmrMaiVaultFunctionTransferFrom, GlmrMaiVaultFunctionTransferOwnership, GlmrMaiVaultFunctionUpdateFrontEnd, GlmrMaiVaultFunctionUpdateOracleName, GlmrMaiVaultFunctionUpdateVaultDebt, GlmrMaiVaultFunctionWithdrawCollateral, GlmrMaiVaultFunctionWithdrawInterest} from '../model'
import {normalize} from '../util'

export {abi}

export const address = '0x3a82f4da24f93a32dc3c2a28cfa9d6e63ec28531'

type EventItem = LogItem<{evmLog: {topics: true, data: true}, transaction: {hash: true}}>
type FunctionItem = TransactionItem<{transaction: {hash: true, input: true}}>

export function parse(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: EventItem | FunctionItem) {
    switch (item.kind) {
        case 'evmLog':
            return parseEvent(ctx, block, item)
        case 'transaction':
            return parseFunction(ctx, block, item)
    }
}

function parseEvent(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: EventItem) {
    try {
        switch (item.evmLog.topics[0]) {
            case abi.events['AddedFrontEnd'].topic: {
                let e = normalize(abi.events['AddedFrontEnd'].decode(item.evmLog))
                return new GlmrMaiVaultEventAddedFrontEnd({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'AddedFrontEnd',
                    promoter: e[0],
                })
            }
            case abi.events['Approval'].topic: {
                let e = normalize(abi.events['Approval'].decode(item.evmLog))
                return new GlmrMaiVaultEventApproval({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Approval',
                    owner: e[0],
                    approved: e[1],
                    tokenId: e[2],
                })
            }
            case abi.events['ApprovalForAll'].topic: {
                let e = normalize(abi.events['ApprovalForAll'].decode(item.evmLog))
                return new GlmrMaiVaultEventApprovalForAll({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'ApprovalForAll',
                    owner: e[0],
                    operator: e[1],
                    approved: e[2],
                })
            }
            case abi.events['BorrowToken'].topic: {
                let e = normalize(abi.events['BorrowToken'].decode(item.evmLog))
                return new GlmrMaiVaultEventBorrowToken({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'BorrowToken',
                    vaultId: e[0],
                    amount: e[1],
                })
            }
            case abi.events['BoughtRiskyDebtVault'].topic: {
                let e = normalize(abi.events['BoughtRiskyDebtVault'].decode(item.evmLog))
                return new GlmrMaiVaultEventBoughtRiskyDebtVault({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'BoughtRiskyDebtVault',
                    riskyVault: e[0],
                    newVault: e[1],
                    riskyVaultBuyer: e[2],
                    amountPaidtoBuy: e[3],
                })
            }
            case abi.events['BurnedToken'].topic: {
                let e = normalize(abi.events['BurnedToken'].decode(item.evmLog))
                return new GlmrMaiVaultEventBurnedToken({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'BurnedToken',
                    amount: e[0],
                })
            }
            case abi.events['CreateVault'].topic: {
                let e = normalize(abi.events['CreateVault'].decode(item.evmLog))
                return new GlmrMaiVaultEventCreateVault({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'CreateVault',
                    vaultId: e[0],
                    creator: e[1],
                })
            }
            case abi.events['DepositCollateral'].topic: {
                let e = normalize(abi.events['DepositCollateral'].decode(item.evmLog))
                return new GlmrMaiVaultEventDepositCollateral({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'DepositCollateral',
                    vaultId: e[0],
                    amount: e[1],
                })
            }
            case abi.events['DestroyVault'].topic: {
                let e = normalize(abi.events['DestroyVault'].decode(item.evmLog))
                return new GlmrMaiVaultEventDestroyVault({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'DestroyVault',
                    vaultId: e[0],
                })
            }
            case abi.events['LiquidateVault'].topic: {
                let e = normalize(abi.events['LiquidateVault'].decode(item.evmLog))
                return new GlmrMaiVaultEventLiquidateVault({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'LiquidateVault',
                    vaultId: e[0],
                    owner: e[1],
                    buyer: e[2],
                    debtRepaid: e[3],
                    collateralLiquidated: e[4],
                    closingFee: e[5],
                })
            }
            case abi.events['OwnershipTransferred'].topic: {
                let e = normalize(abi.events['OwnershipTransferred'].decode(item.evmLog))
                return new GlmrMaiVaultEventOwnershipTransferred({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'OwnershipTransferred',
                    previousOwner: e[0],
                    newOwner: e[1],
                })
            }
            case abi.events['PayBackToken'].topic: {
                let e = normalize(abi.events['PayBackToken'].decode(item.evmLog))
                return new GlmrMaiVaultEventPayBackToken({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'PayBackToken',
                    vaultId: e[0],
                    amount: e[1],
                    closingFee: e[2],
                })
            }
            case abi.events['RemovedFrontEnd'].topic: {
                let e = normalize(abi.events['RemovedFrontEnd'].decode(item.evmLog))
                return new GlmrMaiVaultEventRemovedFrontEnd({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'RemovedFrontEnd',
                    promoter: e[0],
                })
            }
            case abi.events['Transfer'].topic: {
                let e = normalize(abi.events['Transfer'].decode(item.evmLog))
                return new GlmrMaiVaultEventTransfer({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'Transfer',
                    from: e[0],
                    to: e[1],
                    tokenId: e[2],
                })
            }
            case abi.events['UpdatedAdmin'].topic: {
                let e = normalize(abi.events['UpdatedAdmin'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedAdmin({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedAdmin',
                    newAdmin: e[0],
                })
            }
            case abi.events['UpdatedClosingFee'].topic: {
                let e = normalize(abi.events['UpdatedClosingFee'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedClosingFee({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedClosingFee',
                    newFee: e[0],
                })
            }
            case abi.events['UpdatedDebtRatio'].topic: {
                let e = normalize(abi.events['UpdatedDebtRatio'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedDebtRatio({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedDebtRatio',
                    debtRatio: e[0],
                })
            }
            case abi.events['UpdatedEthPriceSource'].topic: {
                let e = normalize(abi.events['UpdatedEthPriceSource'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedEthPriceSource({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedEthPriceSource',
                    ethPriceSourceAddress: e[0],
                })
            }
            case abi.events['UpdatedFees'].topic: {
                let e = normalize(abi.events['UpdatedFees'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedFees({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedFees',
                    adminFee: e[0],
                    refFee: e[1],
                })
            }
            case abi.events['UpdatedFrontEnd'].topic: {
                let e = normalize(abi.events['UpdatedFrontEnd'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedFrontEnd({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedFrontEnd',
                    promoter: e[0],
                    newFee: e[1],
                })
            }
            case abi.events['UpdatedGainRatio'].topic: {
                let e = normalize(abi.events['UpdatedGainRatio'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedGainRatio({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedGainRatio',
                    gainRatio: e[0],
                })
            }
            case abi.events['UpdatedInterestRate'].topic: {
                let e = normalize(abi.events['UpdatedInterestRate'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedInterestRate({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedInterestRate',
                    interestRate: e[0],
                })
            }
            case abi.events['UpdatedMaxDebt'].topic: {
                let e = normalize(abi.events['UpdatedMaxDebt'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedMaxDebt({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedMaxDebt',
                    newMaxDebt: e[0],
                })
            }
            case abi.events['UpdatedMinCollateralRatio'].topic: {
                let e = normalize(abi.events['UpdatedMinCollateralRatio'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedMinCollateralRatio({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedMinCollateralRatio',
                    newMinCollateralRatio: e[0],
                })
            }
            case abi.events['UpdatedMinDebt'].topic: {
                let e = normalize(abi.events['UpdatedMinDebt'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedMinDebt({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedMinDebt',
                    newMinDebt: e[0],
                })
            }
            case abi.events['UpdatedOpeningFee'].topic: {
                let e = normalize(abi.events['UpdatedOpeningFee'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedOpeningFee({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedOpeningFee',
                    newFee: e[0],
                })
            }
            case abi.events['UpdatedOracleName'].topic: {
                let e = normalize(abi.events['UpdatedOracleName'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedOracleName({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedOracleName',
                    oracle: e[0],
                })
            }
            case abi.events['UpdatedRef'].topic: {
                let e = normalize(abi.events['UpdatedRef'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedRef({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedRef',
                    newRef: e[0],
                })
            }
            case abi.events['UpdatedStabilityPool'].topic: {
                let e = normalize(abi.events['UpdatedStabilityPool'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedStabilityPool({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedStabilityPool',
                    pool: e[0],
                })
            }
            case abi.events['UpdatedTokenURI'].topic: {
                let e = normalize(abi.events['UpdatedTokenURI'].decode(item.evmLog))
                return new GlmrMaiVaultEventUpdatedTokenUri({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'UpdatedTokenURI',
                    uri: e[0],
                })
            }
            case abi.events['WithdrawCollateral'].topic: {
                let e = normalize(abi.events['WithdrawCollateral'].decode(item.evmLog))
                return new GlmrMaiVaultEventWithdrawCollateral({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'WithdrawCollateral',
                    vaultId: e[0],
                    amount: e[1],
                })
            }
            case abi.events['WithdrawInterest'].topic: {
                let e = normalize(abi.events['WithdrawInterest'].decode(item.evmLog))
                return new GlmrMaiVaultEventWithdrawInterest({
                    id: item.evmLog.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'WithdrawInterest',
                    earned: e[0],
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode event "${item.evmLog.topics[0]}"`)
    }
}

function parseFunction(ctx: CommonHandlerContext<unknown>, block: EvmBlock, item: FunctionItem) {
    try {
        switch (item.transaction.input.slice(0, 10)) {
            case abi.functions['addFrontEnd'].sighash: {
                let f = normalize(abi.functions['addFrontEnd'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionAddFrontEnd({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'addFrontEnd',
                    promoter: f[0],
                })
            }
            case abi.functions['approve'].sighash: {
                let f = normalize(abi.functions['approve'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionApprove({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'approve',
                    to: f[0],
                    tokenId: f[1],
                })
            }
            case abi.functions['borrowToken'].sighash: {
                let f = normalize(abi.functions['borrowToken'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionBorrowToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'borrowToken',
                    vaultId: f[0],
                    amount: f[1],
                    front: f[2],
                })
            }
            case abi.functions['burn'].sighash: {
                let f = normalize(abi.functions['burn'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionBurn({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'burn',
                    amountToken: f[0],
                })
            }
            case abi.functions['buyRiskDebtVault'].sighash: {
                let f = normalize(abi.functions['buyRiskDebtVault'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionBuyRiskDebtVault({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'buyRiskDebtVault',
                    vaultId: f[0],
                })
            }
            case abi.functions['changeEthPriceSource'].sighash: {
                let f = normalize(abi.functions['changeEthPriceSource'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionChangeEthPriceSource({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'changeEthPriceSource',
                    ethPriceSourceAddress: f[0],
                })
            }
            case abi.functions['createVault'].sighash: {
                return new GlmrMaiVaultFunctionCreateVault({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'createVault',
                })
            }
            case abi.functions['depositCollateral'].sighash: {
                let f = normalize(abi.functions['depositCollateral'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionDepositCollateral({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'depositCollateral',
                    vaultId: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['destroyVault'].sighash: {
                let f = normalize(abi.functions['destroyVault'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionDestroyVault({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'destroyVault',
                    vaultId: f[0],
                })
            }
            case abi.functions['getPaid'].sighash: {
                return new GlmrMaiVaultFunctionGetPaid({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'getPaid',
                })
            }
            case abi.functions['liquidateVault'].sighash: {
                let f = normalize(abi.functions['liquidateVault'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionLiquidateVault({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'liquidateVault',
                    vaultId: f[0],
                    front: f[1],
                })
            }
            case abi.functions['payBackToken'].sighash: {
                let f = normalize(abi.functions['payBackToken'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionPayBackToken({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'payBackToken',
                    vaultId: f[0],
                    amount: f[1],
                    front: f[2],
                })
            }
            case abi.functions['paybackTokenAll'].sighash: {
                let f = normalize(abi.functions['paybackTokenAll'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionPaybackTokenAll({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'paybackTokenAll',
                    vaultId: f[0],
                    deadline: f[1],
                    front: f[2],
                })
            }
            case abi.functions['removeFrontEnd'].sighash: {
                let f = normalize(abi.functions['removeFrontEnd'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionRemoveFrontEnd({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'removeFrontEnd',
                    promoter: f[0],
                })
            }
            case abi.functions['renounceOwnership'].sighash: {
                return new GlmrMaiVaultFunctionRenounceOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'renounceOwnership',
                })
            }
            case abi.functions['safeTransferFrom(address,address,uint256)'].sighash: {
                let f = normalize(abi.functions['safeTransferFrom(address,address,uint256)'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSafeTransferFrom0({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'safeTransferFrom(address,address,uint256)',
                    from: f[0],
                    to: f[1],
                    tokenId: f[2],
                })
            }
            case abi.functions['safeTransferFrom(address,address,uint256,bytes)'].sighash: {
                let f = normalize(abi.functions['safeTransferFrom(address,address,uint256,bytes)'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSafeTransferFrom1({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'safeTransferFrom(address,address,uint256,bytes)',
                    from: f[0],
                    to: f[1],
                    tokenId: f[2],
                    data: f[3],
                })
            }
            case abi.functions['setAdmin'].sighash: {
                let f = normalize(abi.functions['setAdmin'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetAdmin({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setAdmin',
                    adm: f[0],
                })
            }
            case abi.functions['setApprovalForAll'].sighash: {
                let f = normalize(abi.functions['setApprovalForAll'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetApprovalForAll({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setApprovalForAll',
                    operator: f[0],
                    approved: f[1],
                })
            }
            case abi.functions['setClosingFee'].sighash: {
                let f = normalize(abi.functions['setClosingFee'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetClosingFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setClosingFee',
                    closingFee: f[0],
                })
            }
            case abi.functions['setDebtRatio'].sighash: {
                let f = normalize(abi.functions['setDebtRatio'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetDebtRatio({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setDebtRatio',
                    debtRatio: f[0],
                })
            }
            case abi.functions['setFees'].sighash: {
                let f = normalize(abi.functions['setFees'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetFees({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setFees',
                    admin: f[0],
                    ref: f[1],
                })
            }
            case abi.functions['setGainRatio'].sighash: {
                let f = normalize(abi.functions['setGainRatio'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetGainRatio({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setGainRatio',
                    gainRatio: f[0],
                })
            }
            case abi.functions['setInterestRate'].sighash: {
                let f = normalize(abi.functions['setInterestRate'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetInterestRate({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setInterestRate',
                    iR: f[0],
                })
            }
            case abi.functions['setMaxDebt'].sighash: {
                let f = normalize(abi.functions['setMaxDebt'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetMaxDebt({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setMaxDebt',
                    maxDebt: f[0],
                })
            }
            case abi.functions['setMinCollateralRatio'].sighash: {
                let f = normalize(abi.functions['setMinCollateralRatio'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetMinCollateralRatio({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setMinCollateralRatio',
                    minimumCollateralPercentage: f[0],
                })
            }
            case abi.functions['setMinDebt'].sighash: {
                let f = normalize(abi.functions['setMinDebt'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetMinDebt({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setMinDebt',
                    minDebt: f[0],
                })
            }
            case abi.functions['setOpeningFee'].sighash: {
                let f = normalize(abi.functions['setOpeningFee'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetOpeningFee({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setOpeningFee',
                    openingFee: f[0],
                })
            }
            case abi.functions['setRef'].sighash: {
                let f = normalize(abi.functions['setRef'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetRef({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setRef',
                    ref: f[0],
                })
            }
            case abi.functions['setStabilityPool'].sighash: {
                let f = normalize(abi.functions['setStabilityPool'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetStabilityPool({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setStabilityPool',
                    pool: f[0],
                })
            }
            case abi.functions['setTokenURI'].sighash: {
                let f = normalize(abi.functions['setTokenURI'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionSetTokenUri({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'setTokenURI',
                    uri: f[0],
                })
            }
            case abi.functions['transferFrom'].sighash: {
                let f = normalize(abi.functions['transferFrom'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionTransferFrom({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferFrom',
                    from: f[0],
                    to: f[1],
                    tokenId: f[2],
                })
            }
            case abi.functions['transferOwnership'].sighash: {
                let f = normalize(abi.functions['transferOwnership'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionTransferOwnership({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'transferOwnership',
                    newOwner: f[0],
                })
            }
            case abi.functions['updateFrontEnd'].sighash: {
                let f = normalize(abi.functions['updateFrontEnd'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionUpdateFrontEnd({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateFrontEnd',
                    promoter: f[0],
                    cashback: f[1],
                })
            }
            case abi.functions['updateOracleName'].sighash: {
                let f = normalize(abi.functions['updateOracleName'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionUpdateOracleName({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateOracleName',
                    oracle: f[0],
                })
            }
            case abi.functions['updateVaultDebt'].sighash: {
                let f = normalize(abi.functions['updateVaultDebt'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionUpdateVaultDebt({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'updateVaultDebt',
                    vaultId: f[0],
                })
            }
            case abi.functions['withdrawCollateral'].sighash: {
                let f = normalize(abi.functions['withdrawCollateral'].decode(item.transaction.input))
                return new GlmrMaiVaultFunctionWithdrawCollateral({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdrawCollateral',
                    vaultId: f[0],
                    amount: f[1],
                })
            }
            case abi.functions['withdrawInterest'].sighash: {
                return new GlmrMaiVaultFunctionWithdrawInterest({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    transactionHash: item.transaction.hash,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    name: 'withdrawInterest',
                })
            }
        }
    } catch (error) {
        ctx.log.error({error, blockNumber: block.height, blockHash: block.hash, address}, `Unable to decode function "${item.transaction.input.slice(0, 10)}"`)
    }
}
