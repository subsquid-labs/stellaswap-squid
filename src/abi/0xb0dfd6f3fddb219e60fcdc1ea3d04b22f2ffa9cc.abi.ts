export const ABI_JSON = [
    {
        "type": "function",
        "name": "addLiquidity",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint256[]",
                "name": "meta_amounts"
            },
            {
                "type": "uint256[]",
                "name": "base_amounts"
            },
            {
                "type": "uint256",
                "name": "minToMint"
            },
            {
                "type": "uint256",
                "name": "deadline"
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
        "name": "calculateConvert",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "fromPool"
            },
            {
                "type": "address",
                "name": "toPool"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "calculateRemoveBaseLiquidityOneToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint256",
                "name": "_token_amount"
            },
            {
                "type": "uint8",
                "name": "iBase"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "availableTokenAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateRemoveLiquidity",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "meta_amounts"
            },
            {
                "type": "uint256[]",
                "name": "base_amounts"
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateSwapFromBase",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint8",
                "name": "tokenIndexFrom"
            },
            {
                "type": "uint8",
                "name": "tokenIndexTo"
            },
            {
                "type": "uint256",
                "name": "dx"
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
        "name": "calculateSwapToBase",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint8",
                "name": "tokenIndexFrom"
            },
            {
                "type": "uint8",
                "name": "tokenIndexTo"
            },
            {
                "type": "uint256",
                "name": "dx"
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
        "name": "calculateTokenAmount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint256[]",
                "name": "meta_amounts"
            },
            {
                "type": "uint256[]",
                "name": "base_amounts"
            },
            {
                "type": "bool",
                "name": "is_deposit"
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
        "name": "convert",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "fromPool"
            },
            {
                "type": "address",
                "name": "toPool"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "minToMint"
            },
            {
                "type": "uint256",
                "name": "deadline"
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
        "name": "removeBaseLiquidityOneToken",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint256",
                "name": "_token_amount"
            },
            {
                "type": "uint8",
                "name": "i"
            },
            {
                "type": "uint256",
                "name": "_min_amount"
            },
            {
                "type": "uint256",
                "name": "deadline"
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
        "name": "removeLiquidity",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint256[]",
                "name": "min_amounts_meta"
            },
            {
                "type": "uint256[]",
                "name": "min_amounts_base"
            },
            {
                "type": "uint256",
                "name": "deadline"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "amounts"
            },
            {
                "type": "uint256[]",
                "name": "base_amounts"
            }
        ]
    },
    {
        "type": "function",
        "name": "swapFromBase",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint8",
                "name": "tokenIndexFrom"
            },
            {
                "type": "uint8",
                "name": "tokenIndexTo"
            },
            {
                "type": "uint256",
                "name": "dx"
            },
            {
                "type": "uint256",
                "name": "minDy"
            },
            {
                "type": "uint256",
                "name": "deadline"
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
        "name": "swapToBase",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "basePool"
            },
            {
                "type": "uint8",
                "name": "tokenIndexFrom"
            },
            {
                "type": "uint8",
                "name": "tokenIndexTo"
            },
            {
                "type": "uint256",
                "name": "dx"
            },
            {
                "type": "uint256",
                "name": "minDy"
            },
            {
                "type": "uint256",
                "name": "deadline"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    }
]
