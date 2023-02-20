export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "admin_"
            },
            {
                "type": "uint256",
                "name": "delay_"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CancelTransaction",
        "inputs": [
            {
                "type": "bytes32",
                "name": "txHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "target",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "string",
                "name": "signature",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "data",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "eta",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExecuteTransaction",
        "inputs": [
            {
                "type": "bytes32",
                "name": "txHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "target",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "string",
                "name": "signature",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "data",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "eta",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewAdmin",
        "inputs": [
            {
                "type": "address",
                "name": "newAdmin",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewDelay",
        "inputs": [
            {
                "type": "uint256",
                "name": "newDelay",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewPendingAdmin",
        "inputs": [
            {
                "type": "address",
                "name": "newPendingAdmin",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "QueueTransaction",
        "inputs": [
            {
                "type": "bytes32",
                "name": "txHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "target",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "string",
                "name": "signature",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "data",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "eta",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "GRACE_PERIOD",
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
        "name": "MAXIMUM_DELAY",
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
        "name": "MINIMUM_DELAY",
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
        "name": "acceptAdmin",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "admin",
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
        "name": "admin_initialized",
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
        "name": "cancelTransaction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "string",
                "name": "signature"
            },
            {
                "type": "bytes",
                "name": "data"
            },
            {
                "type": "uint256",
                "name": "eta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "delay",
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
        "name": "executeTransaction",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "string",
                "name": "signature"
            },
            {
                "type": "bytes",
                "name": "data"
            },
            {
                "type": "uint256",
                "name": "eta"
            }
        ],
        "outputs": [
            {
                "type": "bytes"
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingAdmin",
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
        "name": "queueTransaction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "string",
                "name": "signature"
            },
            {
                "type": "bytes",
                "name": "data"
            },
            {
                "type": "uint256",
                "name": "eta"
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "queuedTransactions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "setDelay",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "delay_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPendingAdmin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pendingAdmin_"
            }
        ],
        "outputs": []
    }
]
