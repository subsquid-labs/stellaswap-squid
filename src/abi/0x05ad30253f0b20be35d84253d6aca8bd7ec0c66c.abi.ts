export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_rewardToken"
            },
            {
                "type": "address",
                "name": "_distributorV2"
            },
            {
                "type": "bool",
                "name": "_isNative"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddPool",
        "inputs": [
            {
                "type": "uint256",
                "name": "pid",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "allocPoint",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddRewardInfo",
        "inputs": [
            {
                "type": "uint256",
                "name": "pid",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "phase",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "endTimestamp",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rewardPerSec",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OnReward",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardRateUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "oldRate",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newRate",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetPool",
        "inputs": [
            {
                "type": "uint256",
                "name": "pid",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "allocPoint",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatePool",
        "inputs": [
            {
                "type": "uint256",
                "name": "pid",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "lastRewardTimestamp",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "lpSupply",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "accTokenPerShare",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "_getTimeElapsed",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_from"
            },
            {
                "type": "uint256",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_endTimestamp"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_updatePool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "pid"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "pool",
                "components": [
                    {
                        "type": "uint256",
                        "name": "accTokenPerShare"
                    },
                    {
                        "type": "uint256",
                        "name": "startTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "lastRewardTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "allocPoint"
                    },
                    {
                        "type": "uint256",
                        "name": "totalRewards"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "add",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "uint256",
                "name": "_allocPoint"
            },
            {
                "type": "uint256",
                "name": "_startTimestamp"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addRewardInfo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "uint256",
                "name": "_endTimestamp"
            },
            {
                "type": "uint256",
                "name": "_rewardPerSec"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "currentEndTimestamp",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "distributorV2",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "emergencyRewardWithdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "address",
                "name": "_beneficiary"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "inCaseTokensGetStuck",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isNative",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "massUpdatePools",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "onStellaReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingTokens",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "poolIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "poolInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "accTokenPerShare"
            },
            {
                "type": "uint256",
                "name": "startTimestamp"
            },
            {
                "type": "uint256",
                "name": "lastRewardTimestamp"
            },
            {
                "type": "uint256",
                "name": "allocPoint"
            },
            {
                "type": "uint256",
                "name": "totalRewards"
            }
        ]
    },
    {
        "type": "function",
        "name": "poolRewardInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "startTimestamp"
            },
            {
                "type": "uint256",
                "name": "endTimestamp"
            },
            {
                "type": "uint256",
                "name": "rewardPerSec"
            }
        ]
    },
    {
        "type": "function",
        "name": "poolRewardsPerSec",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rewardInfoLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "rewardToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "stuckTimeLock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalAllocPoint",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updatePool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "pool",
                "components": [
                    {
                        "type": "uint256",
                        "name": "accTokenPerShare"
                    },
                    {
                        "type": "uint256",
                        "name": "startTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "lastRewardTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "allocPoint"
                    },
                    {
                        "type": "uint256",
                        "name": "totalRewards"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "userInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "rewardDebt"
            }
        ]
    }
]
