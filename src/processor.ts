import {EvmBatchProcessor, BatchHandlerContext} from '@subsquid/evm-processor'
import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
import {lookupArchive} from '@subsquid/archive-registry'
import {Transaction, Block} from './model'
import {factory, router, routerV21, swapForGas, farmsV1, farmsV2Dual, vaults, xStella, locker, avaxIlo, maticIlo, ftmIlo, stellaTimelock, timelockMain, zap, zapHelper, celrRewarder, bcmcRewarder, usdcRewarder, glmrRewarderFirst, atomGlmrGlmrRewarder, atomUsdcGlmrRewarder, celerRewarder0, celerRewarder1, glmrRewarderForUstGlmr, atomGlmrRewarderNew, atomUsdcRewarderNew, dualEthGlmrRewarder, celerRewarder0102, xcDotGlmr, wbtcUsdtContract, xStellaUsdcRewarder, xStellaGlmrRewarder, xStellaGlmrRewarder2Nd, ustGlmrRewarder, ethMadGlmrRewarder, madUsdcGlmrRewarder, mistakeInRewarderRewarder, madUsdcGlmrRewarder2, dotXcGlmrRewarder, ethMadGlmrRewarder2, swapFlashLoanDualEthPoolMultiNomad, sfl4PoolNomad, glmrMaiVault, acalaGlmrRewarder, routerV3, sflAthUsdc4Pool, acalaRewarder, xStellaMaiVault, mai4BpWh, sfl4PoolWh, interlayRewarder, sflMai4Pool, sflLp, stableRouter, sflAxlUsdc4Pool, positionManager} from './mapping'

const processor = new EvmBatchProcessor()
processor.setDataSource({
    archive: lookupArchive('moonbeam', {type: 'EVM'}),
})
processor.addLog(factory.address, {
    filter: [
        [
            factory.abi.events['PairCreated'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(factory.address, {
    sighash: [
        factory.abi.functions['createPair'].sighash,
        factory.abi.functions['pairCodeHash'].sighash,
        factory.abi.functions['setDevFee'].sighash,
        factory.abi.functions['setFeeTo'].sighash,
        factory.abi.functions['setFeeToSetter'].sighash,
        factory.abi.functions['setMigrator'].sighash,
        factory.abi.functions['setSwapFee'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addTransaction(router.address, {
    sighash: [
        router.abi.functions['addLiquidity'].sighash,
        router.abi.functions['addLiquidityETH'].sighash,
        router.abi.functions['getAmountIn'].sighash,
        router.abi.functions['getAmountOut'].sighash,
        router.abi.functions['quote'].sighash,
        router.abi.functions['removeLiquidity'].sighash,
        router.abi.functions['removeLiquidityETH'].sighash,
        router.abi.functions['removeLiquidityETHSupportingFeeOnTransferTokens'].sighash,
        router.abi.functions['removeLiquidityETHWithPermit'].sighash,
        router.abi.functions['removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'].sighash,
        router.abi.functions['removeLiquidityWithPermit'].sighash,
        router.abi.functions['swapETHForExactTokens'].sighash,
        router.abi.functions['swapExactETHForTokens'].sighash,
        router.abi.functions['swapExactETHForTokensSupportingFeeOnTransferTokens'].sighash,
        router.abi.functions['swapExactTokensForETH'].sighash,
        router.abi.functions['swapExactTokensForETHSupportingFeeOnTransferTokens'].sighash,
        router.abi.functions['swapExactTokensForTokens'].sighash,
        router.abi.functions['swapExactTokensForTokensSupportingFeeOnTransferTokens'].sighash,
        router.abi.functions['swapTokensForExactETH'].sighash,
        router.abi.functions['swapTokensForExactTokens'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addTransaction(routerV21.address, {
    sighash: [
        routerV21.abi.functions['addLiquidity'].sighash,
        routerV21.abi.functions['addLiquidityETH'].sighash,
        routerV21.abi.functions['getAmountIn'].sighash,
        routerV21.abi.functions['getAmountOut'].sighash,
        routerV21.abi.functions['quote'].sighash,
        routerV21.abi.functions['removeLiquidity'].sighash,
        routerV21.abi.functions['removeLiquidityETH'].sighash,
        routerV21.abi.functions['removeLiquidityETHSupportingFeeOnTransferTokens'].sighash,
        routerV21.abi.functions['removeLiquidityETHWithPermit'].sighash,
        routerV21.abi.functions['removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'].sighash,
        routerV21.abi.functions['removeLiquidityWithPermit'].sighash,
        routerV21.abi.functions['swapETHForExactTokens'].sighash,
        routerV21.abi.functions['swapExactETHForTokens'].sighash,
        routerV21.abi.functions['swapExactETHForTokensSupportingFeeOnTransferTokens'].sighash,
        routerV21.abi.functions['swapExactTokensForETH'].sighash,
        routerV21.abi.functions['swapExactTokensForETHSupportingFeeOnTransferTokens'].sighash,
        routerV21.abi.functions['swapExactTokensForTokens'].sighash,
        routerV21.abi.functions['swapExactTokensForTokensSupportingFeeOnTransferTokens'].sighash,
        routerV21.abi.functions['swapTokensForExactETH'].sighash,
        routerV21.abi.functions['swapTokensForExactTokens'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(swapForGas.address, {
    filter: [
        [
            swapForGas.abi.events['MetaTransactionExecuted'].topic,
            swapForGas.abi.events['OwnershipTransferred'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(swapForGas.address, {
    sighash: [
        swapForGas.abi.functions['changeFeeAddress'].sighash,
        swapForGas.abi.functions['changeFeePercent'].sighash,
        swapForGas.abi.functions['changeRouter'].sighash,
        swapForGas.abi.functions['executeMetaTransaction'].sighash,
        swapForGas.abi.functions['renounceOwnership'].sighash,
        swapForGas.abi.functions['swap'].sighash,
        swapForGas.abi.functions['transferOwnership'].sighash,
        swapForGas.abi.functions['whitelistToken'].sighash,
        swapForGas.abi.functions['withdrawETH'].sighash,
        swapForGas.abi.functions['withdrawToken'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(farmsV1.address, {
    filter: [
        [
            farmsV1.abi.events['AllocPointsUpdated'].topic,
            farmsV1.abi.events['Deposit'].topic,
            farmsV1.abi.events['EmergencyWithdraw'].topic,
            farmsV1.abi.events['EmissionRateUpdated'].topic,
            farmsV1.abi.events['MetaTxnsDisabled'].topic,
            farmsV1.abi.events['MetaTxnsEnabled'].topic,
            farmsV1.abi.events['OperatorTransferred'].topic,
            farmsV1.abi.events['OwnershipTransferred'].topic,
            farmsV1.abi.events['RewardLockedUp'].topic,
            farmsV1.abi.events['SetInvestorAddress'].topic,
            farmsV1.abi.events['SetInvestorPercent'].topic,
            farmsV1.abi.events['SetTeamAddress'].topic,
            farmsV1.abi.events['SetTeamPercent'].topic,
            farmsV1.abi.events['SetTreasuryAddress'].topic,
            farmsV1.abi.events['SetTreasuryPercent'].topic,
            farmsV1.abi.events['Withdraw'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(farmsV1.address, {
    sighash: [
        farmsV1.abi.functions['add'].sighash,
        farmsV1.abi.functions['deposit'].sighash,
        farmsV1.abi.functions['disableMetaTxns'].sighash,
        farmsV1.abi.functions['emergencyWithdraw'].sighash,
        farmsV1.abi.functions['enableMetaTxns'].sighash,
        farmsV1.abi.functions['getMultiplier'].sighash,
        farmsV1.abi.functions['harvestMany'].sighash,
        farmsV1.abi.functions['massUpdatePools'].sighash,
        farmsV1.abi.functions['renounceOwnership'].sighash,
        farmsV1.abi.functions['set'].sighash,
        farmsV1.abi.functions['setInvestorAddress'].sighash,
        farmsV1.abi.functions['setInvestorPercent'].sighash,
        farmsV1.abi.functions['setTeamAddress'].sighash,
        farmsV1.abi.functions['setTeamPercent'].sighash,
        farmsV1.abi.functions['setTreasuryAddr'].sighash,
        farmsV1.abi.functions['setTreasuryPercent'].sighash,
        farmsV1.abi.functions['startFarming'].sighash,
        farmsV1.abi.functions['transferOperator'].sighash,
        farmsV1.abi.functions['transferOwnership'].sighash,
        farmsV1.abi.functions['updateAllocPoint'].sighash,
        farmsV1.abi.functions['updateEmissionRate'].sighash,
        farmsV1.abi.functions['updatePool'].sighash,
        farmsV1.abi.functions['withdraw'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(farmsV2Dual.address, {
    filter: [
        [
            farmsV2Dual.abi.events['Add'].topic,
            farmsV2Dual.abi.events['AllocPointsUpdated'].topic,
            farmsV2Dual.abi.events['Deposit'].topic,
            farmsV2Dual.abi.events['EmergencyWithdraw'].topic,
            farmsV2Dual.abi.events['EmissionRateUpdated'].topic,
            farmsV2Dual.abi.events['OwnershipTransferred'].topic,
            farmsV2Dual.abi.events['RewardLockedUp'].topic,
            farmsV2Dual.abi.events['Set'].topic,
            farmsV2Dual.abi.events['SetInvestorAddress'].topic,
            farmsV2Dual.abi.events['SetInvestorPercent'].topic,
            farmsV2Dual.abi.events['SetTeamAddress'].topic,
            farmsV2Dual.abi.events['SetTeamPercent'].topic,
            farmsV2Dual.abi.events['SetTreasuryAddress'].topic,
            farmsV2Dual.abi.events['SetTreasuryPercent'].topic,
            farmsV2Dual.abi.events['UpdatePool'].topic,
            farmsV2Dual.abi.events['Withdraw'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(farmsV2Dual.address, {
    sighash: [
        farmsV2Dual.abi.functions['add'].sighash,
        farmsV2Dual.abi.functions['deposit'].sighash,
        farmsV2Dual.abi.functions['depositWithPermit'].sighash,
        farmsV2Dual.abi.functions['emergencyWithdraw'].sighash,
        farmsV2Dual.abi.functions['harvestMany'].sighash,
        farmsV2Dual.abi.functions['massUpdatePools'].sighash,
        farmsV2Dual.abi.functions['renounceOwnership'].sighash,
        farmsV2Dual.abi.functions['set'].sighash,
        farmsV2Dual.abi.functions['setInvestorAddress'].sighash,
        farmsV2Dual.abi.functions['setInvestorPercent'].sighash,
        farmsV2Dual.abi.functions['setTeamAddress'].sighash,
        farmsV2Dual.abi.functions['setTeamPercent'].sighash,
        farmsV2Dual.abi.functions['setTreasuryAddress'].sighash,
        farmsV2Dual.abi.functions['setTreasuryPercent'].sighash,
        farmsV2Dual.abi.functions['startFarming'].sighash,
        farmsV2Dual.abi.functions['transferOwnership'].sighash,
        farmsV2Dual.abi.functions['updateAllocPoint'].sighash,
        farmsV2Dual.abi.functions['updateEmissionRate'].sighash,
        farmsV2Dual.abi.functions['updatePool'].sighash,
        farmsV2Dual.abi.functions['withdraw'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(vaults.address, {
    filter: [
        [
            vaults.abi.events['AllocPointsUpdated'].topic,
            vaults.abi.events['Deposit'].topic,
            vaults.abi.events['EmergencyWithdraw'].topic,
            vaults.abi.events['EmissionRateUpdated'].topic,
            vaults.abi.events['MetaTxnsDisabled'].topic,
            vaults.abi.events['MetaTxnsEnabled'].topic,
            vaults.abi.events['OperatorTransferred'].topic,
            vaults.abi.events['OwnershipTransferred'].topic,
            vaults.abi.events['RewardLockedUp'].topic,
            vaults.abi.events['SetInvestorAddress'].topic,
            vaults.abi.events['SetInvestorPercent'].topic,
            vaults.abi.events['SetTeamAddress'].topic,
            vaults.abi.events['SetTeamPercent'].topic,
            vaults.abi.events['SetTreasuryAddress'].topic,
            vaults.abi.events['SetTreasuryPercent'].topic,
            vaults.abi.events['Withdraw'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(vaults.address, {
    sighash: [
        vaults.abi.functions['add'].sighash,
        vaults.abi.functions['deposit'].sighash,
        vaults.abi.functions['disableMetaTxns'].sighash,
        vaults.abi.functions['emergencyWithdraw'].sighash,
        vaults.abi.functions['enableMetaTxns'].sighash,
        vaults.abi.functions['getMultiplier'].sighash,
        vaults.abi.functions['harvestMany'].sighash,
        vaults.abi.functions['massUpdatePools'].sighash,
        vaults.abi.functions['renounceOwnership'].sighash,
        vaults.abi.functions['set'].sighash,
        vaults.abi.functions['setInvestorAddress'].sighash,
        vaults.abi.functions['setInvestorPercent'].sighash,
        vaults.abi.functions['setTeamAddress'].sighash,
        vaults.abi.functions['setTeamPercent'].sighash,
        vaults.abi.functions['setTreasuryAddr'].sighash,
        vaults.abi.functions['setTreasuryPercent'].sighash,
        vaults.abi.functions['startFarming'].sighash,
        vaults.abi.functions['transferOperator'].sighash,
        vaults.abi.functions['transferOwnership'].sighash,
        vaults.abi.functions['updateAllocPoint'].sighash,
        vaults.abi.functions['updateEmissionRate'].sighash,
        vaults.abi.functions['updatePool'].sighash,
        vaults.abi.functions['withdraw'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(xStella.address, {
    filter: [
        [
            xStella.abi.events['Approval'].topic,
            xStella.abi.events['Transfer'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(xStella.address, {
    sighash: [
        xStella.abi.functions['approve'].sighash,
        xStella.abi.functions['decreaseAllowance'].sighash,
        xStella.abi.functions['enter'].sighash,
        xStella.abi.functions['increaseAllowance'].sighash,
        xStella.abi.functions['leave'].sighash,
        xStella.abi.functions['transfer'].sighash,
        xStella.abi.functions['transferFrom'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(locker.address, {
    filter: [
        [
            locker.abi.events['Lock'].topic,
            locker.abi.events['OwnershipTransferred'].topic,
            locker.abi.events['Withdraw'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(locker.address, {
    sighash: [
        locker.abi.functions['lockTokens'].sighash,
        locker.abi.functions['renounceOwnership'].sighash,
        locker.abi.functions['transferOwnership'].sighash,
        locker.abi.functions['withdrawTokens'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(avaxIlo.address, {
    filter: [
        [
            avaxIlo.abi.events['Claimed'].topic,
            avaxIlo.abi.events['Deposit'].topic,
            avaxIlo.abi.events['OwnershipTransferred'].topic,
            avaxIlo.abi.events['Refunded'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(avaxIlo.address, {
    sighash: [
        avaxIlo.abi.functions['claim'].sighash,
        avaxIlo.abi.functions['commit'].sighash,
        avaxIlo.abi.functions['inCaseTokensGetStuck'].sighash,
        avaxIlo.abi.functions['refund'].sighash,
        avaxIlo.abi.functions['renounceOwnership'].sighash,
        avaxIlo.abi.functions['setEndTime'].sighash,
        avaxIlo.abi.functions['setRaisingAmount'].sighash,
        avaxIlo.abi.functions['setStartTime'].sighash,
        avaxIlo.abi.functions['setStellaPerAvax'].sighash,
        avaxIlo.abi.functions['transferOwnership'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(maticIlo.address, {
    filter: [
        [
            maticIlo.abi.events['Claimed'].topic,
            maticIlo.abi.events['Deposit'].topic,
            maticIlo.abi.events['OwnershipTransferred'].topic,
            maticIlo.abi.events['Refunded'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(maticIlo.address, {
    sighash: [
        maticIlo.abi.functions['claim'].sighash,
        maticIlo.abi.functions['commit'].sighash,
        maticIlo.abi.functions['inCaseTokensGetStuck'].sighash,
        maticIlo.abi.functions['moveRaisedBase'].sighash,
        maticIlo.abi.functions['refund'].sighash,
        maticIlo.abi.functions['renounceOwnership'].sighash,
        maticIlo.abi.functions['setEndTime'].sighash,
        maticIlo.abi.functions['setRaisingAmount'].sighash,
        maticIlo.abi.functions['setStartTime'].sighash,
        maticIlo.abi.functions['setStellaPerBase'].sighash,
        maticIlo.abi.functions['transferOwnership'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(ftmIlo.address, {
    filter: [
        [
            ftmIlo.abi.events['Claimed'].topic,
            ftmIlo.abi.events['Deposit'].topic,
            ftmIlo.abi.events['OwnershipTransferred'].topic,
            ftmIlo.abi.events['Refunded'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(ftmIlo.address, {
    sighash: [
        ftmIlo.abi.functions['claim'].sighash,
        ftmIlo.abi.functions['commit'].sighash,
        ftmIlo.abi.functions['inCaseTokensGetStuck'].sighash,
        ftmIlo.abi.functions['moveRaisedBase'].sighash,
        ftmIlo.abi.functions['refund'].sighash,
        ftmIlo.abi.functions['renounceOwnership'].sighash,
        ftmIlo.abi.functions['setEndTime'].sighash,
        ftmIlo.abi.functions['setRaisingAmount'].sighash,
        ftmIlo.abi.functions['setStartTime'].sighash,
        ftmIlo.abi.functions['setStellaPerBase'].sighash,
        ftmIlo.abi.functions['transferOwnership'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(stellaTimelock.address, {
    filter: [
        [
            stellaTimelock.abi.events['CancelTransaction'].topic,
            stellaTimelock.abi.events['ExecuteTransaction'].topic,
            stellaTimelock.abi.events['NewAdmin'].topic,
            stellaTimelock.abi.events['NewDelay'].topic,
            stellaTimelock.abi.events['NewPendingAdmin'].topic,
            stellaTimelock.abi.events['QueueTransaction'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(stellaTimelock.address, {
    sighash: [
        stellaTimelock.abi.functions['acceptAdmin'].sighash,
        stellaTimelock.abi.functions['cancelTransaction'].sighash,
        stellaTimelock.abi.functions['executeTransaction'].sighash,
        stellaTimelock.abi.functions['queueTransaction'].sighash,
        stellaTimelock.abi.functions['setDelay'].sighash,
        stellaTimelock.abi.functions['setPendingAdmin'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(timelockMain.address, {
    filter: [
        [
            timelockMain.abi.events['CancelTransaction'].topic,
            timelockMain.abi.events['ExecuteTransaction'].topic,
            timelockMain.abi.events['NewAdmin'].topic,
            timelockMain.abi.events['NewDelay'].topic,
            timelockMain.abi.events['NewPendingAdmin'].topic,
            timelockMain.abi.events['QueueTransaction'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(timelockMain.address, {
    sighash: [
        timelockMain.abi.functions['acceptAdmin'].sighash,
        timelockMain.abi.functions['cancelTransaction'].sighash,
        timelockMain.abi.functions['executeTransaction'].sighash,
        timelockMain.abi.functions['queueTransaction'].sighash,
        timelockMain.abi.functions['setDelay'].sighash,
        timelockMain.abi.functions['setPendingAdmin'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(zap.address, {
    filter: [
        [
            zap.abi.events['OwnershipTransferred'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(zap.address, {
    sighash: [
        zap.abi.functions['initialize'].sighash,
        zap.abi.functions['removeToken'].sighash,
        zap.abi.functions['renounceOwnership'].sighash,
        zap.abi.functions['setNotLP'].sighash,
        zap.abi.functions['setRoutePairAddress'].sighash,
        zap.abi.functions['setZapInFees'].sighash,
        zap.abi.functions['setZapOutFees'].sighash,
        zap.abi.functions['sweep'].sighash,
        zap.abi.functions['transferOwnership'].sighash,
        zap.abi.functions['withdraw'].sighash,
        zap.abi.functions['zapIn'].sighash,
        zap.abi.functions['zapInToken'].sighash,
        zap.abi.functions['zapOut'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(celrRewarder.address, {
    filter: [
        [
            celrRewarder.abi.events['AddPool'].topic,
            celrRewarder.abi.events['AddRewardInfo'].topic,
            celrRewarder.abi.events['OnReward'].topic,
            celrRewarder.abi.events['OwnershipTransferred'].topic,
            celrRewarder.abi.events['RewardRateUpdated'].topic,
            celrRewarder.abi.events['SetPool'].topic,
            celrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(celrRewarder.address, {
    sighash: [
        celrRewarder.abi.functions['_getTimeElapsed'].sighash,
        celrRewarder.abi.functions['_updatePool'].sighash,
        celrRewarder.abi.functions['add'].sighash,
        celrRewarder.abi.functions['addRewardInfo'].sighash,
        celrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        celrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        celrRewarder.abi.functions['massUpdatePools'].sighash,
        celrRewarder.abi.functions['onStellaReward'].sighash,
        celrRewarder.abi.functions['renounceOwnership'].sighash,
        celrRewarder.abi.functions['transferOwnership'].sighash,
        celrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(bcmcRewarder.address, {
    filter: [
        [
            bcmcRewarder.abi.events['AddPool'].topic,
            bcmcRewarder.abi.events['AddRewardInfo'].topic,
            bcmcRewarder.abi.events['OnReward'].topic,
            bcmcRewarder.abi.events['OwnershipTransferred'].topic,
            bcmcRewarder.abi.events['RewardRateUpdated'].topic,
            bcmcRewarder.abi.events['SetPool'].topic,
            bcmcRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(bcmcRewarder.address, {
    sighash: [
        bcmcRewarder.abi.functions['_getTimeElapsed'].sighash,
        bcmcRewarder.abi.functions['_updatePool'].sighash,
        bcmcRewarder.abi.functions['add'].sighash,
        bcmcRewarder.abi.functions['addRewardInfo'].sighash,
        bcmcRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        bcmcRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        bcmcRewarder.abi.functions['massUpdatePools'].sighash,
        bcmcRewarder.abi.functions['onStellaReward'].sighash,
        bcmcRewarder.abi.functions['renounceOwnership'].sighash,
        bcmcRewarder.abi.functions['transferOwnership'].sighash,
        bcmcRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(usdcRewarder.address, {
    filter: [
        [
            usdcRewarder.abi.events['AddPool'].topic,
            usdcRewarder.abi.events['AddRewardInfo'].topic,
            usdcRewarder.abi.events['OnReward'].topic,
            usdcRewarder.abi.events['OwnershipTransferred'].topic,
            usdcRewarder.abi.events['RewardRateUpdated'].topic,
            usdcRewarder.abi.events['SetPool'].topic,
            usdcRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(usdcRewarder.address, {
    sighash: [
        usdcRewarder.abi.functions['_getTimeElapsed'].sighash,
        usdcRewarder.abi.functions['_updatePool'].sighash,
        usdcRewarder.abi.functions['add'].sighash,
        usdcRewarder.abi.functions['addRewardInfo'].sighash,
        usdcRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        usdcRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        usdcRewarder.abi.functions['massUpdatePools'].sighash,
        usdcRewarder.abi.functions['onStellaReward'].sighash,
        usdcRewarder.abi.functions['renounceOwnership'].sighash,
        usdcRewarder.abi.functions['transferOwnership'].sighash,
        usdcRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(glmrRewarderFirst.address, {
    filter: [
        [
            glmrRewarderFirst.abi.events['AddPool'].topic,
            glmrRewarderFirst.abi.events['AddRewardInfo'].topic,
            glmrRewarderFirst.abi.events['OnReward'].topic,
            glmrRewarderFirst.abi.events['OwnershipTransferred'].topic,
            glmrRewarderFirst.abi.events['RewardRateUpdated'].topic,
            glmrRewarderFirst.abi.events['SetPool'].topic,
            glmrRewarderFirst.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(glmrRewarderFirst.address, {
    sighash: [
        glmrRewarderFirst.abi.functions['_getTimeElapsed'].sighash,
        glmrRewarderFirst.abi.functions['_updatePool'].sighash,
        glmrRewarderFirst.abi.functions['add'].sighash,
        glmrRewarderFirst.abi.functions['addRewardInfo'].sighash,
        glmrRewarderFirst.abi.functions['emergencyRewardWithdraw'].sighash,
        glmrRewarderFirst.abi.functions['inCaseTokensGetStuck'].sighash,
        glmrRewarderFirst.abi.functions['massUpdatePools'].sighash,
        glmrRewarderFirst.abi.functions['onStellaReward'].sighash,
        glmrRewarderFirst.abi.functions['renounceOwnership'].sighash,
        glmrRewarderFirst.abi.functions['transferOwnership'].sighash,
        glmrRewarderFirst.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(atomGlmrGlmrRewarder.address, {
    filter: [
        [
            atomGlmrGlmrRewarder.abi.events['AddPool'].topic,
            atomGlmrGlmrRewarder.abi.events['AddRewardInfo'].topic,
            atomGlmrGlmrRewarder.abi.events['OnReward'].topic,
            atomGlmrGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            atomGlmrGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            atomGlmrGlmrRewarder.abi.events['SetPool'].topic,
            atomGlmrGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(atomGlmrGlmrRewarder.address, {
    sighash: [
        atomGlmrGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        atomGlmrGlmrRewarder.abi.functions['_updatePool'].sighash,
        atomGlmrGlmrRewarder.abi.functions['add'].sighash,
        atomGlmrGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        atomGlmrGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        atomGlmrGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        atomGlmrGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        atomGlmrGlmrRewarder.abi.functions['onStellaReward'].sighash,
        atomGlmrGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        atomGlmrGlmrRewarder.abi.functions['transferOwnership'].sighash,
        atomGlmrGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(atomUsdcGlmrRewarder.address, {
    filter: [
        [
            atomUsdcGlmrRewarder.abi.events['AddPool'].topic,
            atomUsdcGlmrRewarder.abi.events['AddRewardInfo'].topic,
            atomUsdcGlmrRewarder.abi.events['OnReward'].topic,
            atomUsdcGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            atomUsdcGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            atomUsdcGlmrRewarder.abi.events['SetPool'].topic,
            atomUsdcGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(atomUsdcGlmrRewarder.address, {
    sighash: [
        atomUsdcGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        atomUsdcGlmrRewarder.abi.functions['_updatePool'].sighash,
        atomUsdcGlmrRewarder.abi.functions['add'].sighash,
        atomUsdcGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        atomUsdcGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        atomUsdcGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        atomUsdcGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        atomUsdcGlmrRewarder.abi.functions['onStellaReward'].sighash,
        atomUsdcGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        atomUsdcGlmrRewarder.abi.functions['transferOwnership'].sighash,
        atomUsdcGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(celerRewarder0.address, {
    filter: [
        [
            celerRewarder0.abi.events['AddPool'].topic,
            celerRewarder0.abi.events['AddRewardInfo'].topic,
            celerRewarder0.abi.events['OnReward'].topic,
            celerRewarder0.abi.events['OwnershipTransferred'].topic,
            celerRewarder0.abi.events['RewardRateUpdated'].topic,
            celerRewarder0.abi.events['SetPool'].topic,
            celerRewarder0.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(celerRewarder0.address, {
    sighash: [
        celerRewarder0.abi.functions['_getTimeElapsed'].sighash,
        celerRewarder0.abi.functions['_updatePool'].sighash,
        celerRewarder0.abi.functions['add'].sighash,
        celerRewarder0.abi.functions['addRewardInfo'].sighash,
        celerRewarder0.abi.functions['emergencyRewardWithdraw'].sighash,
        celerRewarder0.abi.functions['inCaseTokensGetStuck'].sighash,
        celerRewarder0.abi.functions['massUpdatePools'].sighash,
        celerRewarder0.abi.functions['onStellaReward'].sighash,
        celerRewarder0.abi.functions['renounceOwnership'].sighash,
        celerRewarder0.abi.functions['transferOwnership'].sighash,
        celerRewarder0.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(celerRewarder1.address, {
    filter: [
        [
            celerRewarder1.abi.events['AddPool'].topic,
            celerRewarder1.abi.events['AddRewardInfo'].topic,
            celerRewarder1.abi.events['OnReward'].topic,
            celerRewarder1.abi.events['OwnershipTransferred'].topic,
            celerRewarder1.abi.events['RewardRateUpdated'].topic,
            celerRewarder1.abi.events['SetPool'].topic,
            celerRewarder1.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(celerRewarder1.address, {
    sighash: [
        celerRewarder1.abi.functions['_getTimeElapsed'].sighash,
        celerRewarder1.abi.functions['_updatePool'].sighash,
        celerRewarder1.abi.functions['add'].sighash,
        celerRewarder1.abi.functions['addRewardInfo'].sighash,
        celerRewarder1.abi.functions['emergencyRewardWithdraw'].sighash,
        celerRewarder1.abi.functions['inCaseTokensGetStuck'].sighash,
        celerRewarder1.abi.functions['massUpdatePools'].sighash,
        celerRewarder1.abi.functions['onStellaReward'].sighash,
        celerRewarder1.abi.functions['renounceOwnership'].sighash,
        celerRewarder1.abi.functions['transferOwnership'].sighash,
        celerRewarder1.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(glmrRewarderForUstGlmr.address, {
    filter: [
        [
            glmrRewarderForUstGlmr.abi.events['AddPool'].topic,
            glmrRewarderForUstGlmr.abi.events['AddRewardInfo'].topic,
            glmrRewarderForUstGlmr.abi.events['OnReward'].topic,
            glmrRewarderForUstGlmr.abi.events['OwnershipTransferred'].topic,
            glmrRewarderForUstGlmr.abi.events['RewardRateUpdated'].topic,
            glmrRewarderForUstGlmr.abi.events['SetPool'].topic,
            glmrRewarderForUstGlmr.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(glmrRewarderForUstGlmr.address, {
    sighash: [
        glmrRewarderForUstGlmr.abi.functions['_getTimeElapsed'].sighash,
        glmrRewarderForUstGlmr.abi.functions['_updatePool'].sighash,
        glmrRewarderForUstGlmr.abi.functions['add'].sighash,
        glmrRewarderForUstGlmr.abi.functions['addRewardInfo'].sighash,
        glmrRewarderForUstGlmr.abi.functions['emergencyRewardWithdraw'].sighash,
        glmrRewarderForUstGlmr.abi.functions['inCaseTokensGetStuck'].sighash,
        glmrRewarderForUstGlmr.abi.functions['massUpdatePools'].sighash,
        glmrRewarderForUstGlmr.abi.functions['onStellaReward'].sighash,
        glmrRewarderForUstGlmr.abi.functions['renounceOwnership'].sighash,
        glmrRewarderForUstGlmr.abi.functions['transferOwnership'].sighash,
        glmrRewarderForUstGlmr.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(atomGlmrRewarderNew.address, {
    filter: [
        [
            atomGlmrRewarderNew.abi.events['AddPool'].topic,
            atomGlmrRewarderNew.abi.events['AddRewardInfo'].topic,
            atomGlmrRewarderNew.abi.events['OnReward'].topic,
            atomGlmrRewarderNew.abi.events['OwnershipTransferred'].topic,
            atomGlmrRewarderNew.abi.events['RewardRateUpdated'].topic,
            atomGlmrRewarderNew.abi.events['SetPool'].topic,
            atomGlmrRewarderNew.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(atomGlmrRewarderNew.address, {
    sighash: [
        atomGlmrRewarderNew.abi.functions['_getTimeElapsed'].sighash,
        atomGlmrRewarderNew.abi.functions['_updatePool'].sighash,
        atomGlmrRewarderNew.abi.functions['add'].sighash,
        atomGlmrRewarderNew.abi.functions['addRewardInfo'].sighash,
        atomGlmrRewarderNew.abi.functions['emergencyRewardWithdraw'].sighash,
        atomGlmrRewarderNew.abi.functions['inCaseTokensGetStuck'].sighash,
        atomGlmrRewarderNew.abi.functions['massUpdatePools'].sighash,
        atomGlmrRewarderNew.abi.functions['onStellaReward'].sighash,
        atomGlmrRewarderNew.abi.functions['renounceOwnership'].sighash,
        atomGlmrRewarderNew.abi.functions['transferOwnership'].sighash,
        atomGlmrRewarderNew.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(atomUsdcRewarderNew.address, {
    filter: [
        [
            atomUsdcRewarderNew.abi.events['AddPool'].topic,
            atomUsdcRewarderNew.abi.events['AddRewardInfo'].topic,
            atomUsdcRewarderNew.abi.events['OnReward'].topic,
            atomUsdcRewarderNew.abi.events['OwnershipTransferred'].topic,
            atomUsdcRewarderNew.abi.events['RewardRateUpdated'].topic,
            atomUsdcRewarderNew.abi.events['SetPool'].topic,
            atomUsdcRewarderNew.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(atomUsdcRewarderNew.address, {
    sighash: [
        atomUsdcRewarderNew.abi.functions['_getTimeElapsed'].sighash,
        atomUsdcRewarderNew.abi.functions['_updatePool'].sighash,
        atomUsdcRewarderNew.abi.functions['add'].sighash,
        atomUsdcRewarderNew.abi.functions['addRewardInfo'].sighash,
        atomUsdcRewarderNew.abi.functions['emergencyRewardWithdraw'].sighash,
        atomUsdcRewarderNew.abi.functions['inCaseTokensGetStuck'].sighash,
        atomUsdcRewarderNew.abi.functions['massUpdatePools'].sighash,
        atomUsdcRewarderNew.abi.functions['onStellaReward'].sighash,
        atomUsdcRewarderNew.abi.functions['renounceOwnership'].sighash,
        atomUsdcRewarderNew.abi.functions['transferOwnership'].sighash,
        atomUsdcRewarderNew.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(dualEthGlmrRewarder.address, {
    filter: [
        [
            dualEthGlmrRewarder.abi.events['AddPool'].topic,
            dualEthGlmrRewarder.abi.events['AddRewardInfo'].topic,
            dualEthGlmrRewarder.abi.events['OnReward'].topic,
            dualEthGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            dualEthGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            dualEthGlmrRewarder.abi.events['SetPool'].topic,
            dualEthGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(dualEthGlmrRewarder.address, {
    sighash: [
        dualEthGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        dualEthGlmrRewarder.abi.functions['_updatePool'].sighash,
        dualEthGlmrRewarder.abi.functions['add'].sighash,
        dualEthGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        dualEthGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        dualEthGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        dualEthGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        dualEthGlmrRewarder.abi.functions['onStellaReward'].sighash,
        dualEthGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        dualEthGlmrRewarder.abi.functions['transferOwnership'].sighash,
        dualEthGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(celerRewarder0102.address, {
    filter: [
        [
            celerRewarder0102.abi.events['AddPool'].topic,
            celerRewarder0102.abi.events['AddRewardInfo'].topic,
            celerRewarder0102.abi.events['OnReward'].topic,
            celerRewarder0102.abi.events['OwnershipTransferred'].topic,
            celerRewarder0102.abi.events['RewardRateUpdated'].topic,
            celerRewarder0102.abi.events['SetPool'].topic,
            celerRewarder0102.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(celerRewarder0102.address, {
    sighash: [
        celerRewarder0102.abi.functions['_getTimeElapsed'].sighash,
        celerRewarder0102.abi.functions['_updatePool'].sighash,
        celerRewarder0102.abi.functions['add'].sighash,
        celerRewarder0102.abi.functions['addRewardInfo'].sighash,
        celerRewarder0102.abi.functions['emergencyRewardWithdraw'].sighash,
        celerRewarder0102.abi.functions['inCaseTokensGetStuck'].sighash,
        celerRewarder0102.abi.functions['massUpdatePools'].sighash,
        celerRewarder0102.abi.functions['onStellaReward'].sighash,
        celerRewarder0102.abi.functions['renounceOwnership'].sighash,
        celerRewarder0102.abi.functions['transferOwnership'].sighash,
        celerRewarder0102.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(xcDotGlmr.address, {
    filter: [
        [
            xcDotGlmr.abi.events['AddPool'].topic,
            xcDotGlmr.abi.events['AddRewardInfo'].topic,
            xcDotGlmr.abi.events['OnReward'].topic,
            xcDotGlmr.abi.events['OwnershipTransferred'].topic,
            xcDotGlmr.abi.events['RewardRateUpdated'].topic,
            xcDotGlmr.abi.events['SetPool'].topic,
            xcDotGlmr.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(xcDotGlmr.address, {
    sighash: [
        xcDotGlmr.abi.functions['_getTimeElapsed'].sighash,
        xcDotGlmr.abi.functions['_updatePool'].sighash,
        xcDotGlmr.abi.functions['add'].sighash,
        xcDotGlmr.abi.functions['addRewardInfo'].sighash,
        xcDotGlmr.abi.functions['emergencyRewardWithdraw'].sighash,
        xcDotGlmr.abi.functions['inCaseTokensGetStuck'].sighash,
        xcDotGlmr.abi.functions['massUpdatePools'].sighash,
        xcDotGlmr.abi.functions['onStellaReward'].sighash,
        xcDotGlmr.abi.functions['renounceOwnership'].sighash,
        xcDotGlmr.abi.functions['transferOwnership'].sighash,
        xcDotGlmr.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(wbtcUsdtContract.address, {
    filter: [
        [
            wbtcUsdtContract.abi.events['AddPool'].topic,
            wbtcUsdtContract.abi.events['AddRewardInfo'].topic,
            wbtcUsdtContract.abi.events['OnReward'].topic,
            wbtcUsdtContract.abi.events['OwnershipTransferred'].topic,
            wbtcUsdtContract.abi.events['RewardRateUpdated'].topic,
            wbtcUsdtContract.abi.events['SetPool'].topic,
            wbtcUsdtContract.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(wbtcUsdtContract.address, {
    sighash: [
        wbtcUsdtContract.abi.functions['_getTimeElapsed'].sighash,
        wbtcUsdtContract.abi.functions['_updatePool'].sighash,
        wbtcUsdtContract.abi.functions['add'].sighash,
        wbtcUsdtContract.abi.functions['addRewardInfo'].sighash,
        wbtcUsdtContract.abi.functions['emergencyRewardWithdraw'].sighash,
        wbtcUsdtContract.abi.functions['inCaseTokensGetStuck'].sighash,
        wbtcUsdtContract.abi.functions['massUpdatePools'].sighash,
        wbtcUsdtContract.abi.functions['onStellaReward'].sighash,
        wbtcUsdtContract.abi.functions['renounceOwnership'].sighash,
        wbtcUsdtContract.abi.functions['transferOwnership'].sighash,
        wbtcUsdtContract.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(xStellaUsdcRewarder.address, {
    filter: [
        [
            xStellaUsdcRewarder.abi.events['AddPool'].topic,
            xStellaUsdcRewarder.abi.events['AddRewardInfo'].topic,
            xStellaUsdcRewarder.abi.events['OnReward'].topic,
            xStellaUsdcRewarder.abi.events['OwnershipTransferred'].topic,
            xStellaUsdcRewarder.abi.events['RewardRateUpdated'].topic,
            xStellaUsdcRewarder.abi.events['SetPool'].topic,
            xStellaUsdcRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(xStellaUsdcRewarder.address, {
    sighash: [
        xStellaUsdcRewarder.abi.functions['_getTimeElapsed'].sighash,
        xStellaUsdcRewarder.abi.functions['_updatePool'].sighash,
        xStellaUsdcRewarder.abi.functions['add'].sighash,
        xStellaUsdcRewarder.abi.functions['addRewardInfo'].sighash,
        xStellaUsdcRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        xStellaUsdcRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        xStellaUsdcRewarder.abi.functions['massUpdatePools'].sighash,
        xStellaUsdcRewarder.abi.functions['onStellaReward'].sighash,
        xStellaUsdcRewarder.abi.functions['renounceOwnership'].sighash,
        xStellaUsdcRewarder.abi.functions['transferOwnership'].sighash,
        xStellaUsdcRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(xStellaGlmrRewarder.address, {
    filter: [
        [
            xStellaGlmrRewarder.abi.events['AddPool'].topic,
            xStellaGlmrRewarder.abi.events['AddRewardInfo'].topic,
            xStellaGlmrRewarder.abi.events['OnReward'].topic,
            xStellaGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            xStellaGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            xStellaGlmrRewarder.abi.events['SetPool'].topic,
            xStellaGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(xStellaGlmrRewarder.address, {
    sighash: [
        xStellaGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        xStellaGlmrRewarder.abi.functions['_updatePool'].sighash,
        xStellaGlmrRewarder.abi.functions['add'].sighash,
        xStellaGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        xStellaGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        xStellaGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        xStellaGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        xStellaGlmrRewarder.abi.functions['onStellaReward'].sighash,
        xStellaGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        xStellaGlmrRewarder.abi.functions['transferOwnership'].sighash,
        xStellaGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(xStellaGlmrRewarder2Nd.address, {
    filter: [
        [
            xStellaGlmrRewarder2Nd.abi.events['AddPool'].topic,
            xStellaGlmrRewarder2Nd.abi.events['AddRewardInfo'].topic,
            xStellaGlmrRewarder2Nd.abi.events['OnReward'].topic,
            xStellaGlmrRewarder2Nd.abi.events['OwnershipTransferred'].topic,
            xStellaGlmrRewarder2Nd.abi.events['RewardRateUpdated'].topic,
            xStellaGlmrRewarder2Nd.abi.events['SetPool'].topic,
            xStellaGlmrRewarder2Nd.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(xStellaGlmrRewarder2Nd.address, {
    sighash: [
        xStellaGlmrRewarder2Nd.abi.functions['_getTimeElapsed'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['_updatePool'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['add'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['addRewardInfo'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['emergencyRewardWithdraw'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['inCaseTokensGetStuck'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['massUpdatePools'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['onStellaReward'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['renounceOwnership'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['transferOwnership'].sighash,
        xStellaGlmrRewarder2Nd.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(ustGlmrRewarder.address, {
    filter: [
        [
            ustGlmrRewarder.abi.events['AddPool'].topic,
            ustGlmrRewarder.abi.events['AddRewardInfo'].topic,
            ustGlmrRewarder.abi.events['OnReward'].topic,
            ustGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            ustGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            ustGlmrRewarder.abi.events['SetPool'].topic,
            ustGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(ustGlmrRewarder.address, {
    sighash: [
        ustGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        ustGlmrRewarder.abi.functions['_updatePool'].sighash,
        ustGlmrRewarder.abi.functions['add'].sighash,
        ustGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        ustGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        ustGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        ustGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        ustGlmrRewarder.abi.functions['onStellaReward'].sighash,
        ustGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        ustGlmrRewarder.abi.functions['transferOwnership'].sighash,
        ustGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(ethMadGlmrRewarder.address, {
    filter: [
        [
            ethMadGlmrRewarder.abi.events['AddPool'].topic,
            ethMadGlmrRewarder.abi.events['AddRewardInfo'].topic,
            ethMadGlmrRewarder.abi.events['OnReward'].topic,
            ethMadGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            ethMadGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            ethMadGlmrRewarder.abi.events['SetPool'].topic,
            ethMadGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(ethMadGlmrRewarder.address, {
    sighash: [
        ethMadGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        ethMadGlmrRewarder.abi.functions['_updatePool'].sighash,
        ethMadGlmrRewarder.abi.functions['add'].sighash,
        ethMadGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        ethMadGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        ethMadGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        ethMadGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        ethMadGlmrRewarder.abi.functions['onStellaReward'].sighash,
        ethMadGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        ethMadGlmrRewarder.abi.functions['transferOwnership'].sighash,
        ethMadGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(madUsdcGlmrRewarder.address, {
    filter: [
        [
            madUsdcGlmrRewarder.abi.events['AddPool'].topic,
            madUsdcGlmrRewarder.abi.events['AddRewardInfo'].topic,
            madUsdcGlmrRewarder.abi.events['OnReward'].topic,
            madUsdcGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            madUsdcGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            madUsdcGlmrRewarder.abi.events['SetPool'].topic,
            madUsdcGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(madUsdcGlmrRewarder.address, {
    sighash: [
        madUsdcGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        madUsdcGlmrRewarder.abi.functions['_updatePool'].sighash,
        madUsdcGlmrRewarder.abi.functions['add'].sighash,
        madUsdcGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        madUsdcGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        madUsdcGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        madUsdcGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        madUsdcGlmrRewarder.abi.functions['onStellaReward'].sighash,
        madUsdcGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        madUsdcGlmrRewarder.abi.functions['transferOwnership'].sighash,
        madUsdcGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(mistakeInRewarderRewarder.address, {
    filter: [
        [
            mistakeInRewarderRewarder.abi.events['AddPool'].topic,
            mistakeInRewarderRewarder.abi.events['AddRewardInfo'].topic,
            mistakeInRewarderRewarder.abi.events['OnReward'].topic,
            mistakeInRewarderRewarder.abi.events['OwnershipTransferred'].topic,
            mistakeInRewarderRewarder.abi.events['RewardRateUpdated'].topic,
            mistakeInRewarderRewarder.abi.events['SetPool'].topic,
            mistakeInRewarderRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(mistakeInRewarderRewarder.address, {
    sighash: [
        mistakeInRewarderRewarder.abi.functions['_getTimeElapsed'].sighash,
        mistakeInRewarderRewarder.abi.functions['_updatePool'].sighash,
        mistakeInRewarderRewarder.abi.functions['add'].sighash,
        mistakeInRewarderRewarder.abi.functions['addRewardInfo'].sighash,
        mistakeInRewarderRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        mistakeInRewarderRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        mistakeInRewarderRewarder.abi.functions['massUpdatePools'].sighash,
        mistakeInRewarderRewarder.abi.functions['onStellaReward'].sighash,
        mistakeInRewarderRewarder.abi.functions['renounceOwnership'].sighash,
        mistakeInRewarderRewarder.abi.functions['transferOwnership'].sighash,
        mistakeInRewarderRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(madUsdcGlmrRewarder2.address, {
    filter: [
        [
            madUsdcGlmrRewarder2.abi.events['AddPool'].topic,
            madUsdcGlmrRewarder2.abi.events['AddRewardInfo'].topic,
            madUsdcGlmrRewarder2.abi.events['OnReward'].topic,
            madUsdcGlmrRewarder2.abi.events['OwnershipTransferred'].topic,
            madUsdcGlmrRewarder2.abi.events['RewardRateUpdated'].topic,
            madUsdcGlmrRewarder2.abi.events['SetPool'].topic,
            madUsdcGlmrRewarder2.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(madUsdcGlmrRewarder2.address, {
    sighash: [
        madUsdcGlmrRewarder2.abi.functions['_getTimeElapsed'].sighash,
        madUsdcGlmrRewarder2.abi.functions['_updatePool'].sighash,
        madUsdcGlmrRewarder2.abi.functions['add'].sighash,
        madUsdcGlmrRewarder2.abi.functions['addRewardInfo'].sighash,
        madUsdcGlmrRewarder2.abi.functions['emergencyRewardWithdraw'].sighash,
        madUsdcGlmrRewarder2.abi.functions['inCaseTokensGetStuck'].sighash,
        madUsdcGlmrRewarder2.abi.functions['massUpdatePools'].sighash,
        madUsdcGlmrRewarder2.abi.functions['onStellaReward'].sighash,
        madUsdcGlmrRewarder2.abi.functions['renounceOwnership'].sighash,
        madUsdcGlmrRewarder2.abi.functions['transferOwnership'].sighash,
        madUsdcGlmrRewarder2.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(dotXcGlmrRewarder.address, {
    filter: [
        [
            dotXcGlmrRewarder.abi.events['AddPool'].topic,
            dotXcGlmrRewarder.abi.events['AddRewardInfo'].topic,
            dotXcGlmrRewarder.abi.events['OnReward'].topic,
            dotXcGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            dotXcGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            dotXcGlmrRewarder.abi.events['SetPool'].topic,
            dotXcGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(dotXcGlmrRewarder.address, {
    sighash: [
        dotXcGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        dotXcGlmrRewarder.abi.functions['_updatePool'].sighash,
        dotXcGlmrRewarder.abi.functions['add'].sighash,
        dotXcGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        dotXcGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        dotXcGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        dotXcGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        dotXcGlmrRewarder.abi.functions['onStellaReward'].sighash,
        dotXcGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        dotXcGlmrRewarder.abi.functions['transferOwnership'].sighash,
        dotXcGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(ethMadGlmrRewarder2.address, {
    filter: [
        [
            ethMadGlmrRewarder2.abi.events['AddPool'].topic,
            ethMadGlmrRewarder2.abi.events['AddRewardInfo'].topic,
            ethMadGlmrRewarder2.abi.events['OnReward'].topic,
            ethMadGlmrRewarder2.abi.events['OwnershipTransferred'].topic,
            ethMadGlmrRewarder2.abi.events['RewardRateUpdated'].topic,
            ethMadGlmrRewarder2.abi.events['SetPool'].topic,
            ethMadGlmrRewarder2.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(ethMadGlmrRewarder2.address, {
    sighash: [
        ethMadGlmrRewarder2.abi.functions['_getTimeElapsed'].sighash,
        ethMadGlmrRewarder2.abi.functions['_updatePool'].sighash,
        ethMadGlmrRewarder2.abi.functions['add'].sighash,
        ethMadGlmrRewarder2.abi.functions['addRewardInfo'].sighash,
        ethMadGlmrRewarder2.abi.functions['emergencyRewardWithdraw'].sighash,
        ethMadGlmrRewarder2.abi.functions['inCaseTokensGetStuck'].sighash,
        ethMadGlmrRewarder2.abi.functions['massUpdatePools'].sighash,
        ethMadGlmrRewarder2.abi.functions['onStellaReward'].sighash,
        ethMadGlmrRewarder2.abi.functions['renounceOwnership'].sighash,
        ethMadGlmrRewarder2.abi.functions['transferOwnership'].sighash,
        ethMadGlmrRewarder2.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(swapFlashLoanDualEthPoolMultiNomad.address, {
    filter: [
        [
            swapFlashLoanDualEthPoolMultiNomad.abi.events['AddLiquidity'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['FlashLoan'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['NewAdminFee'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['NewSwapFee'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['OwnershipTransferred'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['Paused'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['RampA'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['RemoveLiquidity'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['RemoveLiquidityImbalance'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['RemoveLiquidityOne'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['StopRampA'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['TokenSwap'].topic,
            swapFlashLoanDualEthPoolMultiNomad.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(swapFlashLoanDualEthPoolMultiNomad.address, {
    sighash: [
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['addLiquidity'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['flashLoan'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['initialize'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['pause'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['rampA'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['removeLiquidity'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['removeLiquidityImbalance'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['removeLiquidityOneToken'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['renounceOwnership'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['setAdminFee'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['setFlashLoanFees'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['setSwapFee'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['stopRampA'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['swap'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['toggleFlashLoan'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['transferOwnership'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['unpause'].sighash,
        swapFlashLoanDualEthPoolMultiNomad.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(sfl4PoolNomad.address, {
    filter: [
        [
            sfl4PoolNomad.abi.events['AddLiquidity'].topic,
            sfl4PoolNomad.abi.events['FlashLoan'].topic,
            sfl4PoolNomad.abi.events['NewAdminFee'].topic,
            sfl4PoolNomad.abi.events['NewSwapFee'].topic,
            sfl4PoolNomad.abi.events['OwnershipTransferred'].topic,
            sfl4PoolNomad.abi.events['Paused'].topic,
            sfl4PoolNomad.abi.events['RampA'].topic,
            sfl4PoolNomad.abi.events['RemoveLiquidity'].topic,
            sfl4PoolNomad.abi.events['RemoveLiquidityImbalance'].topic,
            sfl4PoolNomad.abi.events['RemoveLiquidityOne'].topic,
            sfl4PoolNomad.abi.events['StopRampA'].topic,
            sfl4PoolNomad.abi.events['TokenSwap'].topic,
            sfl4PoolNomad.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(sfl4PoolNomad.address, {
    sighash: [
        sfl4PoolNomad.abi.functions['addLiquidity'].sighash,
        sfl4PoolNomad.abi.functions['flashLoan'].sighash,
        sfl4PoolNomad.abi.functions['initialize'].sighash,
        sfl4PoolNomad.abi.functions['pause'].sighash,
        sfl4PoolNomad.abi.functions['rampA'].sighash,
        sfl4PoolNomad.abi.functions['removeLiquidity'].sighash,
        sfl4PoolNomad.abi.functions['removeLiquidityImbalance'].sighash,
        sfl4PoolNomad.abi.functions['removeLiquidityOneToken'].sighash,
        sfl4PoolNomad.abi.functions['renounceOwnership'].sighash,
        sfl4PoolNomad.abi.functions['setAdminFee'].sighash,
        sfl4PoolNomad.abi.functions['setFlashLoanFees'].sighash,
        sfl4PoolNomad.abi.functions['setSwapFee'].sighash,
        sfl4PoolNomad.abi.functions['stopRampA'].sighash,
        sfl4PoolNomad.abi.functions['swap'].sighash,
        sfl4PoolNomad.abi.functions['toggleFlashLoan'].sighash,
        sfl4PoolNomad.abi.functions['transferOwnership'].sighash,
        sfl4PoolNomad.abi.functions['unpause'].sighash,
        sfl4PoolNomad.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(glmrMaiVault.address, {
    filter: [
        [
            glmrMaiVault.abi.events['AddedFrontEnd'].topic,
            glmrMaiVault.abi.events['Approval'].topic,
            glmrMaiVault.abi.events['ApprovalForAll'].topic,
            glmrMaiVault.abi.events['BorrowToken'].topic,
            glmrMaiVault.abi.events['BoughtRiskyDebtVault'].topic,
            glmrMaiVault.abi.events['BurnedToken'].topic,
            glmrMaiVault.abi.events['CreateVault'].topic,
            glmrMaiVault.abi.events['DepositCollateral'].topic,
            glmrMaiVault.abi.events['DestroyVault'].topic,
            glmrMaiVault.abi.events['LiquidateVault'].topic,
            glmrMaiVault.abi.events['OwnershipTransferred'].topic,
            glmrMaiVault.abi.events['PayBackToken'].topic,
            glmrMaiVault.abi.events['RemovedFrontEnd'].topic,
            glmrMaiVault.abi.events['Transfer'].topic,
            glmrMaiVault.abi.events['UpdatedAdmin'].topic,
            glmrMaiVault.abi.events['UpdatedClosingFee'].topic,
            glmrMaiVault.abi.events['UpdatedDebtRatio'].topic,
            glmrMaiVault.abi.events['UpdatedEthPriceSource'].topic,
            glmrMaiVault.abi.events['UpdatedFees'].topic,
            glmrMaiVault.abi.events['UpdatedFrontEnd'].topic,
            glmrMaiVault.abi.events['UpdatedGainRatio'].topic,
            glmrMaiVault.abi.events['UpdatedInterestRate'].topic,
            glmrMaiVault.abi.events['UpdatedMaxDebt'].topic,
            glmrMaiVault.abi.events['UpdatedMinCollateralRatio'].topic,
            glmrMaiVault.abi.events['UpdatedMinDebt'].topic,
            glmrMaiVault.abi.events['UpdatedOpeningFee'].topic,
            glmrMaiVault.abi.events['UpdatedOracleName'].topic,
            glmrMaiVault.abi.events['UpdatedRef'].topic,
            glmrMaiVault.abi.events['UpdatedStabilityPool'].topic,
            glmrMaiVault.abi.events['UpdatedTokenURI'].topic,
            glmrMaiVault.abi.events['WithdrawCollateral'].topic,
            glmrMaiVault.abi.events['WithdrawInterest'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(glmrMaiVault.address, {
    sighash: [
        glmrMaiVault.abi.functions['addFrontEnd'].sighash,
        glmrMaiVault.abi.functions['approve'].sighash,
        glmrMaiVault.abi.functions['borrowToken'].sighash,
        glmrMaiVault.abi.functions['burn'].sighash,
        glmrMaiVault.abi.functions['buyRiskDebtVault'].sighash,
        glmrMaiVault.abi.functions['changeEthPriceSource'].sighash,
        glmrMaiVault.abi.functions['createVault'].sighash,
        glmrMaiVault.abi.functions['depositCollateral'].sighash,
        glmrMaiVault.abi.functions['destroyVault'].sighash,
        glmrMaiVault.abi.functions['getPaid'].sighash,
        glmrMaiVault.abi.functions['liquidateVault'].sighash,
        glmrMaiVault.abi.functions['payBackToken'].sighash,
        glmrMaiVault.abi.functions['paybackTokenAll'].sighash,
        glmrMaiVault.abi.functions['removeFrontEnd'].sighash,
        glmrMaiVault.abi.functions['renounceOwnership'].sighash,
        glmrMaiVault.abi.functions['safeTransferFrom(address,address,uint256)'].sighash,
        glmrMaiVault.abi.functions['safeTransferFrom(address,address,uint256,bytes)'].sighash,
        glmrMaiVault.abi.functions['setAdmin'].sighash,
        glmrMaiVault.abi.functions['setApprovalForAll'].sighash,
        glmrMaiVault.abi.functions['setClosingFee'].sighash,
        glmrMaiVault.abi.functions['setDebtRatio'].sighash,
        glmrMaiVault.abi.functions['setFees'].sighash,
        glmrMaiVault.abi.functions['setGainRatio'].sighash,
        glmrMaiVault.abi.functions['setInterestRate'].sighash,
        glmrMaiVault.abi.functions['setMaxDebt'].sighash,
        glmrMaiVault.abi.functions['setMinCollateralRatio'].sighash,
        glmrMaiVault.abi.functions['setMinDebt'].sighash,
        glmrMaiVault.abi.functions['setOpeningFee'].sighash,
        glmrMaiVault.abi.functions['setRef'].sighash,
        glmrMaiVault.abi.functions['setStabilityPool'].sighash,
        glmrMaiVault.abi.functions['setTokenURI'].sighash,
        glmrMaiVault.abi.functions['transferFrom'].sighash,
        glmrMaiVault.abi.functions['transferOwnership'].sighash,
        glmrMaiVault.abi.functions['updateFrontEnd'].sighash,
        glmrMaiVault.abi.functions['updateOracleName'].sighash,
        glmrMaiVault.abi.functions['updateVaultDebt'].sighash,
        glmrMaiVault.abi.functions['withdrawCollateral'].sighash,
        glmrMaiVault.abi.functions['withdrawInterest'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(acalaGlmrRewarder.address, {
    filter: [
        [
            acalaGlmrRewarder.abi.events['AddPool'].topic,
            acalaGlmrRewarder.abi.events['AddRewardInfo'].topic,
            acalaGlmrRewarder.abi.events['OnReward'].topic,
            acalaGlmrRewarder.abi.events['OwnershipTransferred'].topic,
            acalaGlmrRewarder.abi.events['RewardRateUpdated'].topic,
            acalaGlmrRewarder.abi.events['SetPool'].topic,
            acalaGlmrRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(acalaGlmrRewarder.address, {
    sighash: [
        acalaGlmrRewarder.abi.functions['_getTimeElapsed'].sighash,
        acalaGlmrRewarder.abi.functions['_updatePool'].sighash,
        acalaGlmrRewarder.abi.functions['add'].sighash,
        acalaGlmrRewarder.abi.functions['addRewardInfo'].sighash,
        acalaGlmrRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        acalaGlmrRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        acalaGlmrRewarder.abi.functions['massUpdatePools'].sighash,
        acalaGlmrRewarder.abi.functions['onStellaReward'].sighash,
        acalaGlmrRewarder.abi.functions['renounceOwnership'].sighash,
        acalaGlmrRewarder.abi.functions['transferOwnership'].sighash,
        acalaGlmrRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addTransaction(routerV3.address, {
    sighash: [
        routerV3.abi.functions['algebraSwapCallback'].sighash,
        routerV3.abi.functions['exactInput'].sighash,
        routerV3.abi.functions['exactInputSingle'].sighash,
        routerV3.abi.functions['exactInputSingleSupportingFeeOnTransferTokens'].sighash,
        routerV3.abi.functions['exactOutput'].sighash,
        routerV3.abi.functions['exactOutputSingle'].sighash,
        routerV3.abi.functions['multicall'].sighash,
        routerV3.abi.functions['refundNativeToken'].sighash,
        routerV3.abi.functions['selfPermit'].sighash,
        routerV3.abi.functions['selfPermitAllowed'].sighash,
        routerV3.abi.functions['selfPermitAllowedIfNecessary'].sighash,
        routerV3.abi.functions['selfPermitIfNecessary'].sighash,
        routerV3.abi.functions['sweepToken'].sighash,
        routerV3.abi.functions['sweepTokenWithFee'].sighash,
        routerV3.abi.functions['unwrapWNativeToken'].sighash,
        routerV3.abi.functions['unwrapWNativeTokenWithFee'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(sflAthUsdc4Pool.address, {
    filter: [
        [
            sflAthUsdc4Pool.abi.events['AddLiquidity'].topic,
            sflAthUsdc4Pool.abi.events['FlashLoan'].topic,
            sflAthUsdc4Pool.abi.events['NewAdminFee'].topic,
            sflAthUsdc4Pool.abi.events['NewSwapFee'].topic,
            sflAthUsdc4Pool.abi.events['OwnershipTransferred'].topic,
            sflAthUsdc4Pool.abi.events['Paused'].topic,
            sflAthUsdc4Pool.abi.events['RampA'].topic,
            sflAthUsdc4Pool.abi.events['RemoveLiquidity'].topic,
            sflAthUsdc4Pool.abi.events['RemoveLiquidityImbalance'].topic,
            sflAthUsdc4Pool.abi.events['RemoveLiquidityOne'].topic,
            sflAthUsdc4Pool.abi.events['StopRampA'].topic,
            sflAthUsdc4Pool.abi.events['TokenSwap'].topic,
            sflAthUsdc4Pool.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(sflAthUsdc4Pool.address, {
    sighash: [
        sflAthUsdc4Pool.abi.functions['addLiquidity'].sighash,
        sflAthUsdc4Pool.abi.functions['flashLoan'].sighash,
        sflAthUsdc4Pool.abi.functions['initialize'].sighash,
        sflAthUsdc4Pool.abi.functions['pause'].sighash,
        sflAthUsdc4Pool.abi.functions['rampA'].sighash,
        sflAthUsdc4Pool.abi.functions['removeLiquidity'].sighash,
        sflAthUsdc4Pool.abi.functions['removeLiquidityImbalance'].sighash,
        sflAthUsdc4Pool.abi.functions['removeLiquidityOneToken'].sighash,
        sflAthUsdc4Pool.abi.functions['renounceOwnership'].sighash,
        sflAthUsdc4Pool.abi.functions['setAdminFee'].sighash,
        sflAthUsdc4Pool.abi.functions['setFlashLoanFees'].sighash,
        sflAthUsdc4Pool.abi.functions['setSwapFee'].sighash,
        sflAthUsdc4Pool.abi.functions['stopRampA'].sighash,
        sflAthUsdc4Pool.abi.functions['swap'].sighash,
        sflAthUsdc4Pool.abi.functions['toggleFlashLoan'].sighash,
        sflAthUsdc4Pool.abi.functions['transferOwnership'].sighash,
        sflAthUsdc4Pool.abi.functions['unpause'].sighash,
        sflAthUsdc4Pool.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(acalaRewarder.address, {
    filter: [
        [
            acalaRewarder.abi.events['AddPool'].topic,
            acalaRewarder.abi.events['AddRewardInfo'].topic,
            acalaRewarder.abi.events['OnReward'].topic,
            acalaRewarder.abi.events['OwnershipTransferred'].topic,
            acalaRewarder.abi.events['RewardRateUpdated'].topic,
            acalaRewarder.abi.events['SetPool'].topic,
            acalaRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(acalaRewarder.address, {
    sighash: [
        acalaRewarder.abi.functions['_getTimeElapsed'].sighash,
        acalaRewarder.abi.functions['_updatePool'].sighash,
        acalaRewarder.abi.functions['add'].sighash,
        acalaRewarder.abi.functions['addRewardInfo'].sighash,
        acalaRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        acalaRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        acalaRewarder.abi.functions['massUpdatePools'].sighash,
        acalaRewarder.abi.functions['onStellaReward'].sighash,
        acalaRewarder.abi.functions['renounceOwnership'].sighash,
        acalaRewarder.abi.functions['transferOwnership'].sighash,
        acalaRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(xStellaMaiVault.address, {
    filter: [
        [
            xStellaMaiVault.abi.events['AddedFrontEnd'].topic,
            xStellaMaiVault.abi.events['Approval'].topic,
            xStellaMaiVault.abi.events['ApprovalForAll'].topic,
            xStellaMaiVault.abi.events['BorrowToken'].topic,
            xStellaMaiVault.abi.events['BoughtRiskyDebtVault'].topic,
            xStellaMaiVault.abi.events['BurnedToken'].topic,
            xStellaMaiVault.abi.events['CreateVault'].topic,
            xStellaMaiVault.abi.events['DepositCollateral'].topic,
            xStellaMaiVault.abi.events['DestroyVault'].topic,
            xStellaMaiVault.abi.events['LiquidateVault'].topic,
            xStellaMaiVault.abi.events['OwnershipTransferred'].topic,
            xStellaMaiVault.abi.events['PayBackToken'].topic,
            xStellaMaiVault.abi.events['RemovedFrontEnd'].topic,
            xStellaMaiVault.abi.events['Transfer'].topic,
            xStellaMaiVault.abi.events['UpdatedAdmin'].topic,
            xStellaMaiVault.abi.events['UpdatedClosingFee'].topic,
            xStellaMaiVault.abi.events['UpdatedDebtRatio'].topic,
            xStellaMaiVault.abi.events['UpdatedEthPriceSource'].topic,
            xStellaMaiVault.abi.events['UpdatedFees'].topic,
            xStellaMaiVault.abi.events['UpdatedFrontEnd'].topic,
            xStellaMaiVault.abi.events['UpdatedGainRatio'].topic,
            xStellaMaiVault.abi.events['UpdatedInterestRate'].topic,
            xStellaMaiVault.abi.events['UpdatedMaxDebt'].topic,
            xStellaMaiVault.abi.events['UpdatedMinCollateralRatio'].topic,
            xStellaMaiVault.abi.events['UpdatedMinDebt'].topic,
            xStellaMaiVault.abi.events['UpdatedOpeningFee'].topic,
            xStellaMaiVault.abi.events['UpdatedOracleName'].topic,
            xStellaMaiVault.abi.events['UpdatedRef'].topic,
            xStellaMaiVault.abi.events['UpdatedStabilityPool'].topic,
            xStellaMaiVault.abi.events['UpdatedTokenURI'].topic,
            xStellaMaiVault.abi.events['WithdrawCollateral'].topic,
            xStellaMaiVault.abi.events['WithdrawInterest'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(xStellaMaiVault.address, {
    sighash: [
        xStellaMaiVault.abi.functions['addFrontEnd'].sighash,
        xStellaMaiVault.abi.functions['approve'].sighash,
        xStellaMaiVault.abi.functions['borrowToken'].sighash,
        xStellaMaiVault.abi.functions['burn'].sighash,
        xStellaMaiVault.abi.functions['buyRiskDebtVault'].sighash,
        xStellaMaiVault.abi.functions['changeEthPriceSource'].sighash,
        xStellaMaiVault.abi.functions['createVault'].sighash,
        xStellaMaiVault.abi.functions['depositCollateral'].sighash,
        xStellaMaiVault.abi.functions['destroyVault'].sighash,
        xStellaMaiVault.abi.functions['getPaid'].sighash,
        xStellaMaiVault.abi.functions['liquidateVault'].sighash,
        xStellaMaiVault.abi.functions['payBackToken'].sighash,
        xStellaMaiVault.abi.functions['paybackTokenAll'].sighash,
        xStellaMaiVault.abi.functions['removeFrontEnd'].sighash,
        xStellaMaiVault.abi.functions['renounceOwnership'].sighash,
        xStellaMaiVault.abi.functions['safeTransferFrom(address,address,uint256)'].sighash,
        xStellaMaiVault.abi.functions['safeTransferFrom(address,address,uint256,bytes)'].sighash,
        xStellaMaiVault.abi.functions['setAdmin'].sighash,
        xStellaMaiVault.abi.functions['setApprovalForAll'].sighash,
        xStellaMaiVault.abi.functions['setClosingFee'].sighash,
        xStellaMaiVault.abi.functions['setDebtRatio'].sighash,
        xStellaMaiVault.abi.functions['setFees'].sighash,
        xStellaMaiVault.abi.functions['setGainRatio'].sighash,
        xStellaMaiVault.abi.functions['setInterestRate'].sighash,
        xStellaMaiVault.abi.functions['setMaxDebt'].sighash,
        xStellaMaiVault.abi.functions['setMinCollateralRatio'].sighash,
        xStellaMaiVault.abi.functions['setMinDebt'].sighash,
        xStellaMaiVault.abi.functions['setOpeningFee'].sighash,
        xStellaMaiVault.abi.functions['setRef'].sighash,
        xStellaMaiVault.abi.functions['setStabilityPool'].sighash,
        xStellaMaiVault.abi.functions['setTokenURI'].sighash,
        xStellaMaiVault.abi.functions['transferFrom'].sighash,
        xStellaMaiVault.abi.functions['transferOwnership'].sighash,
        xStellaMaiVault.abi.functions['updateFrontEnd'].sighash,
        xStellaMaiVault.abi.functions['updateOracleName'].sighash,
        xStellaMaiVault.abi.functions['updateVaultDebt'].sighash,
        xStellaMaiVault.abi.functions['withdrawCollateral'].sighash,
        xStellaMaiVault.abi.functions['withdrawInterest'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(mai4BpWh.address, {
    filter: [
        [
            mai4BpWh.abi.events['AddLiquidity'].topic,
            mai4BpWh.abi.events['FlashLoan'].topic,
            mai4BpWh.abi.events['NewAdminFee'].topic,
            mai4BpWh.abi.events['NewSwapFee'].topic,
            mai4BpWh.abi.events['OwnershipTransferred'].topic,
            mai4BpWh.abi.events['Paused'].topic,
            mai4BpWh.abi.events['RampA'].topic,
            mai4BpWh.abi.events['RemoveLiquidity'].topic,
            mai4BpWh.abi.events['RemoveLiquidityImbalance'].topic,
            mai4BpWh.abi.events['RemoveLiquidityOne'].topic,
            mai4BpWh.abi.events['StopRampA'].topic,
            mai4BpWh.abi.events['TokenSwap'].topic,
            mai4BpWh.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(mai4BpWh.address, {
    sighash: [
        mai4BpWh.abi.functions['addLiquidity'].sighash,
        mai4BpWh.abi.functions['flashLoan'].sighash,
        mai4BpWh.abi.functions['initialize'].sighash,
        mai4BpWh.abi.functions['pause'].sighash,
        mai4BpWh.abi.functions['rampA'].sighash,
        mai4BpWh.abi.functions['removeLiquidity'].sighash,
        mai4BpWh.abi.functions['removeLiquidityImbalance'].sighash,
        mai4BpWh.abi.functions['removeLiquidityOneToken'].sighash,
        mai4BpWh.abi.functions['renounceOwnership'].sighash,
        mai4BpWh.abi.functions['setAdminFee'].sighash,
        mai4BpWh.abi.functions['setFlashLoanFees'].sighash,
        mai4BpWh.abi.functions['setSwapFee'].sighash,
        mai4BpWh.abi.functions['stopRampA'].sighash,
        mai4BpWh.abi.functions['swap'].sighash,
        mai4BpWh.abi.functions['toggleFlashLoan'].sighash,
        mai4BpWh.abi.functions['transferOwnership'].sighash,
        mai4BpWh.abi.functions['unpause'].sighash,
        mai4BpWh.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(sfl4PoolWh.address, {
    filter: [
        [
            sfl4PoolWh.abi.events['AddLiquidity'].topic,
            sfl4PoolWh.abi.events['FlashLoan'].topic,
            sfl4PoolWh.abi.events['NewAdminFee'].topic,
            sfl4PoolWh.abi.events['NewSwapFee'].topic,
            sfl4PoolWh.abi.events['OwnershipTransferred'].topic,
            sfl4PoolWh.abi.events['Paused'].topic,
            sfl4PoolWh.abi.events['RampA'].topic,
            sfl4PoolWh.abi.events['RemoveLiquidity'].topic,
            sfl4PoolWh.abi.events['RemoveLiquidityImbalance'].topic,
            sfl4PoolWh.abi.events['RemoveLiquidityOne'].topic,
            sfl4PoolWh.abi.events['StopRampA'].topic,
            sfl4PoolWh.abi.events['TokenSwap'].topic,
            sfl4PoolWh.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(sfl4PoolWh.address, {
    sighash: [
        sfl4PoolWh.abi.functions['addLiquidity'].sighash,
        sfl4PoolWh.abi.functions['flashLoan'].sighash,
        sfl4PoolWh.abi.functions['initialize'].sighash,
        sfl4PoolWh.abi.functions['pause'].sighash,
        sfl4PoolWh.abi.functions['rampA'].sighash,
        sfl4PoolWh.abi.functions['removeLiquidity'].sighash,
        sfl4PoolWh.abi.functions['removeLiquidityImbalance'].sighash,
        sfl4PoolWh.abi.functions['removeLiquidityOneToken'].sighash,
        sfl4PoolWh.abi.functions['renounceOwnership'].sighash,
        sfl4PoolWh.abi.functions['setAdminFee'].sighash,
        sfl4PoolWh.abi.functions['setFlashLoanFees'].sighash,
        sfl4PoolWh.abi.functions['setSwapFee'].sighash,
        sfl4PoolWh.abi.functions['stopRampA'].sighash,
        sfl4PoolWh.abi.functions['swap'].sighash,
        sfl4PoolWh.abi.functions['toggleFlashLoan'].sighash,
        sfl4PoolWh.abi.functions['transferOwnership'].sighash,
        sfl4PoolWh.abi.functions['unpause'].sighash,
        sfl4PoolWh.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(interlayRewarder.address, {
    filter: [
        [
            interlayRewarder.abi.events['AddPool'].topic,
            interlayRewarder.abi.events['AddRewardInfo'].topic,
            interlayRewarder.abi.events['OnReward'].topic,
            interlayRewarder.abi.events['OwnershipTransferred'].topic,
            interlayRewarder.abi.events['RewardRateUpdated'].topic,
            interlayRewarder.abi.events['SetPool'].topic,
            interlayRewarder.abi.events['UpdatePool'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(interlayRewarder.address, {
    sighash: [
        interlayRewarder.abi.functions['_getTimeElapsed'].sighash,
        interlayRewarder.abi.functions['_updatePool'].sighash,
        interlayRewarder.abi.functions['add'].sighash,
        interlayRewarder.abi.functions['addRewardInfo'].sighash,
        interlayRewarder.abi.functions['emergencyRewardWithdraw'].sighash,
        interlayRewarder.abi.functions['inCaseTokensGetStuck'].sighash,
        interlayRewarder.abi.functions['massUpdatePools'].sighash,
        interlayRewarder.abi.functions['onStellaReward'].sighash,
        interlayRewarder.abi.functions['renounceOwnership'].sighash,
        interlayRewarder.abi.functions['transferOwnership'].sighash,
        interlayRewarder.abi.functions['updatePool'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(sflMai4Pool.address, {
    filter: [
        [
            sflMai4Pool.abi.events['AddLiquidity'].topic,
            sflMai4Pool.abi.events['FlashLoan'].topic,
            sflMai4Pool.abi.events['NewAdminFee'].topic,
            sflMai4Pool.abi.events['NewSwapFee'].topic,
            sflMai4Pool.abi.events['OwnershipTransferred'].topic,
            sflMai4Pool.abi.events['Paused'].topic,
            sflMai4Pool.abi.events['RampA'].topic,
            sflMai4Pool.abi.events['RemoveLiquidity'].topic,
            sflMai4Pool.abi.events['RemoveLiquidityImbalance'].topic,
            sflMai4Pool.abi.events['RemoveLiquidityOne'].topic,
            sflMai4Pool.abi.events['StopRampA'].topic,
            sflMai4Pool.abi.events['TokenSwap'].topic,
            sflMai4Pool.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(sflMai4Pool.address, {
    sighash: [
        sflMai4Pool.abi.functions['addLiquidity'].sighash,
        sflMai4Pool.abi.functions['flashLoan'].sighash,
        sflMai4Pool.abi.functions['initialize'].sighash,
        sflMai4Pool.abi.functions['pause'].sighash,
        sflMai4Pool.abi.functions['rampA'].sighash,
        sflMai4Pool.abi.functions['removeLiquidity'].sighash,
        sflMai4Pool.abi.functions['removeLiquidityImbalance'].sighash,
        sflMai4Pool.abi.functions['removeLiquidityOneToken'].sighash,
        sflMai4Pool.abi.functions['renounceOwnership'].sighash,
        sflMai4Pool.abi.functions['setAdminFee'].sighash,
        sflMai4Pool.abi.functions['setFlashLoanFees'].sighash,
        sflMai4Pool.abi.functions['setSwapFee'].sighash,
        sflMai4Pool.abi.functions['stopRampA'].sighash,
        sflMai4Pool.abi.functions['swap'].sighash,
        sflMai4Pool.abi.functions['toggleFlashLoan'].sighash,
        sflMai4Pool.abi.functions['transferOwnership'].sighash,
        sflMai4Pool.abi.functions['unpause'].sighash,
        sflMai4Pool.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(sflLp.address, {
    filter: [
        [
            sflLp.abi.events['Approval'].topic,
            sflLp.abi.events['OwnershipTransferred'].topic,
            sflLp.abi.events['Transfer'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(sflLp.address, {
    sighash: [
        sflLp.abi.functions['approve'].sighash,
        sflLp.abi.functions['burn'].sighash,
        sflLp.abi.functions['burnFrom'].sighash,
        sflLp.abi.functions['decreaseAllowance'].sighash,
        sflLp.abi.functions['increaseAllowance'].sighash,
        sflLp.abi.functions['initialize'].sighash,
        sflLp.abi.functions['mint'].sighash,
        sflLp.abi.functions['permit'].sighash,
        sflLp.abi.functions['renounceOwnership'].sighash,
        sflLp.abi.functions['transfer'].sighash,
        sflLp.abi.functions['transferFrom'].sighash,
        sflLp.abi.functions['transferOwnership'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addTransaction(stableRouter.address, {
    sighash: [
        stableRouter.abi.functions['addLiquidity'].sighash,
        stableRouter.abi.functions['convert'].sighash,
        stableRouter.abi.functions['removeBaseLiquidityOneToken'].sighash,
        stableRouter.abi.functions['removeLiquidity'].sighash,
        stableRouter.abi.functions['swapFromBase'].sighash,
        stableRouter.abi.functions['swapToBase'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(sflAxlUsdc4Pool.address, {
    filter: [
        [
            sflAxlUsdc4Pool.abi.events['AddLiquidity'].topic,
            sflAxlUsdc4Pool.abi.events['FlashLoan'].topic,
            sflAxlUsdc4Pool.abi.events['NewAdminFee'].topic,
            sflAxlUsdc4Pool.abi.events['NewSwapFee'].topic,
            sflAxlUsdc4Pool.abi.events['OwnershipTransferred'].topic,
            sflAxlUsdc4Pool.abi.events['Paused'].topic,
            sflAxlUsdc4Pool.abi.events['RampA'].topic,
            sflAxlUsdc4Pool.abi.events['RemoveLiquidity'].topic,
            sflAxlUsdc4Pool.abi.events['RemoveLiquidityImbalance'].topic,
            sflAxlUsdc4Pool.abi.events['RemoveLiquidityOne'].topic,
            sflAxlUsdc4Pool.abi.events['StopRampA'].topic,
            sflAxlUsdc4Pool.abi.events['TokenSwap'].topic,
            sflAxlUsdc4Pool.abi.events['Unpaused'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(sflAxlUsdc4Pool.address, {
    sighash: [
        sflAxlUsdc4Pool.abi.functions['addLiquidity'].sighash,
        sflAxlUsdc4Pool.abi.functions['flashLoan'].sighash,
        sflAxlUsdc4Pool.abi.functions['initialize'].sighash,
        sflAxlUsdc4Pool.abi.functions['pause'].sighash,
        sflAxlUsdc4Pool.abi.functions['rampA'].sighash,
        sflAxlUsdc4Pool.abi.functions['removeLiquidity'].sighash,
        sflAxlUsdc4Pool.abi.functions['removeLiquidityImbalance'].sighash,
        sflAxlUsdc4Pool.abi.functions['removeLiquidityOneToken'].sighash,
        sflAxlUsdc4Pool.abi.functions['renounceOwnership'].sighash,
        sflAxlUsdc4Pool.abi.functions['setAdminFee'].sighash,
        sflAxlUsdc4Pool.abi.functions['setFlashLoanFees'].sighash,
        sflAxlUsdc4Pool.abi.functions['setSwapFee'].sighash,
        sflAxlUsdc4Pool.abi.functions['stopRampA'].sighash,
        sflAxlUsdc4Pool.abi.functions['swap'].sighash,
        sflAxlUsdc4Pool.abi.functions['toggleFlashLoan'].sighash,
        sflAxlUsdc4Pool.abi.functions['transferOwnership'].sighash,
        sflAxlUsdc4Pool.abi.functions['unpause'].sighash,
        sflAxlUsdc4Pool.abi.functions['withdrawAdminFees'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})
processor.addLog(positionManager.address, {
    filter: [
        [
            positionManager.abi.events['Approval'].topic,
            positionManager.abi.events['ApprovalForAll'].topic,
            positionManager.abi.events['Collect'].topic,
            positionManager.abi.events['DecreaseLiquidity'].topic,
            positionManager.abi.events['IncreaseLiquidity'].topic,
            positionManager.abi.events['Transfer'].topic,
        ],
    ],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
        },
    } as const,
})
processor.addTransaction(positionManager.address, {
    sighash: [
        positionManager.abi.functions['algebraMintCallback'].sighash,
        positionManager.abi.functions['approve'].sighash,
        positionManager.abi.functions['baseURI'].sighash,
        positionManager.abi.functions['burn'].sighash,
        positionManager.abi.functions['collect'].sighash,
        positionManager.abi.functions['createAndInitializePoolIfNecessary'].sighash,
        positionManager.abi.functions['decreaseLiquidity'].sighash,
        positionManager.abi.functions['increaseLiquidity'].sighash,
        positionManager.abi.functions['mint'].sighash,
        positionManager.abi.functions['multicall'].sighash,
        positionManager.abi.functions['permit'].sighash,
        positionManager.abi.functions['refundNativeToken'].sighash,
        positionManager.abi.functions['safeTransferFrom(address,address,uint256)'].sighash,
        positionManager.abi.functions['safeTransferFrom(address,address,uint256,bytes)'].sighash,
        positionManager.abi.functions['selfPermit'].sighash,
        positionManager.abi.functions['selfPermitAllowed'].sighash,
        positionManager.abi.functions['selfPermitAllowedIfNecessary'].sighash,
        positionManager.abi.functions['selfPermitIfNecessary'].sighash,
        positionManager.abi.functions['setApprovalForAll'].sighash,
        positionManager.abi.functions['sweepToken'].sighash,
        positionManager.abi.functions['transferFrom'].sighash,
        positionManager.abi.functions['unwrapWNativeToken'].sighash,
    ],
    data: {
        transaction: {
            hash: true,
            input: true,
        },
    } as const,
})

processor.run(new TypeormDatabase(), async (ctx: BatchHandlerContext<Store, any>) => {
    let transactions: Transaction[] = []
    let blocks: Block[] = []
    let other: Record<string, any[]> = {}
    for (let {header: block, items} of ctx.blocks) {
        let b = new Block({
            id: block.id,
            number: block.height,
            timestamp: new Date(block.timestamp),
        })
        blocks.push(b)
        let blockTransactions = new Map<string, Transaction>()
        for (let item of items) {
            let t = blockTransactions.get(item.transaction.id)
            if (t == null) {
                t = new Transaction({
                    id: item.transaction.id,
                    blockNumber: block.height,
                    timestamp: new Date(block.timestamp),
                    contract: item.address,
                    hash: item.transaction.hash,
                })
                blockTransactions.set(t.id, t)
            }

            let addEntity = (e: any) => {
                let a = other[e.constructor.name]
                if (a == null) {
                    a = []
                    other[e.constructor.name] = a
                }
                a.push(e)
            }

            if (item.address === factory.address) {
                let e = factory.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === router.address) {
                let e = router.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === routerV21.address) {
                let e = routerV21.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === swapForGas.address) {
                let e = swapForGas.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === farmsV1.address) {
                let e = farmsV1.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === farmsV2Dual.address) {
                let e = farmsV2Dual.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === vaults.address) {
                let e = vaults.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === xStella.address) {
                let e = xStella.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === locker.address) {
                let e = locker.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === avaxIlo.address) {
                let e = avaxIlo.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === maticIlo.address) {
                let e = maticIlo.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === ftmIlo.address) {
                let e = ftmIlo.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === stellaTimelock.address) {
                let e = stellaTimelock.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === timelockMain.address) {
                let e = timelockMain.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === zap.address) {
                let e = zap.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === zapHelper.address) {
                let e = zapHelper.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === celrRewarder.address) {
                let e = celrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === bcmcRewarder.address) {
                let e = bcmcRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === usdcRewarder.address) {
                let e = usdcRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === glmrRewarderFirst.address) {
                let e = glmrRewarderFirst.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === atomGlmrGlmrRewarder.address) {
                let e = atomGlmrGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === atomUsdcGlmrRewarder.address) {
                let e = atomUsdcGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === celerRewarder0.address) {
                let e = celerRewarder0.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === celerRewarder1.address) {
                let e = celerRewarder1.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === glmrRewarderForUstGlmr.address) {
                let e = glmrRewarderForUstGlmr.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === atomGlmrRewarderNew.address) {
                let e = atomGlmrRewarderNew.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === atomUsdcRewarderNew.address) {
                let e = atomUsdcRewarderNew.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === dualEthGlmrRewarder.address) {
                let e = dualEthGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === celerRewarder0102.address) {
                let e = celerRewarder0102.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === xcDotGlmr.address) {
                let e = xcDotGlmr.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === wbtcUsdtContract.address) {
                let e = wbtcUsdtContract.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === xStellaUsdcRewarder.address) {
                let e = xStellaUsdcRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === xStellaGlmrRewarder.address) {
                let e = xStellaGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === xStellaGlmrRewarder2Nd.address) {
                let e = xStellaGlmrRewarder2Nd.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === ustGlmrRewarder.address) {
                let e = ustGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === ethMadGlmrRewarder.address) {
                let e = ethMadGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === madUsdcGlmrRewarder.address) {
                let e = madUsdcGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === mistakeInRewarderRewarder.address) {
                let e = mistakeInRewarderRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === madUsdcGlmrRewarder2.address) {
                let e = madUsdcGlmrRewarder2.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === dotXcGlmrRewarder.address) {
                let e = dotXcGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === ethMadGlmrRewarder2.address) {
                let e = ethMadGlmrRewarder2.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === swapFlashLoanDualEthPoolMultiNomad.address) {
                let e = swapFlashLoanDualEthPoolMultiNomad.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === sfl4PoolNomad.address) {
                let e = sfl4PoolNomad.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === glmrMaiVault.address) {
                let e = glmrMaiVault.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === acalaGlmrRewarder.address) {
                let e = acalaGlmrRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === routerV3.address) {
                let e = routerV3.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === sflAthUsdc4Pool.address) {
                let e = sflAthUsdc4Pool.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === acalaRewarder.address) {
                let e = acalaRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === xStellaMaiVault.address) {
                let e = xStellaMaiVault.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === mai4BpWh.address) {
                let e = mai4BpWh.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === sfl4PoolWh.address) {
                let e = sfl4PoolWh.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === interlayRewarder.address) {
                let e = interlayRewarder.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === sflMai4Pool.address) {
                let e = sflMai4Pool.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === sflLp.address) {
                let e = sflLp.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === stableRouter.address) {
                let e = stableRouter.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === sflAxlUsdc4Pool.address) {
                let e = sflAxlUsdc4Pool.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }

            if (item.address === positionManager.address) {
                let e = positionManager.parse(ctx, block, item)
                if (e != null) {
                    addEntity(e)
                }
            }
        }
        transactions.push(...blockTransactions.values())
    }
    await ctx.store.save(blocks)
    await ctx.store.save(transactions)
    for (let e in other) {
        await ctx.store.save(other[e])
    }
})
