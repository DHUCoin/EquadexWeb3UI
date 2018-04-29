$(document).ready(function () {
    //Initiating web3 provider
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    //Sets the default account (Makes the executer in MetaMask as default)
    web3.eth.defaultAccount = web3.eth.accounts[0];

    //ABI for contract
    var EquadexContract = web3.eth.contract([{
            "constant": false,
            "inputs": [],
            "name": "unhaltICO",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "verified",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "haltICO",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "icoStartBlock",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "investor",
                "type": "address"
            }],
            "name": "removeVerifiedInvestor",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newBottomInteger",
                "type": "uint256"
            }],
            "name": "updatePriceBottomInteger",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "mainWallet",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "liquidate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "previousUpdateTime",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newMainWallet",
                "type": "address"
            }],
            "name": "changeMainWallet",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "icoEndBlock",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "balance",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "priceUpdateWaitingTime",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newIcoEndBlock",
                "type": "uint256"
            }],
            "name": "changeIcoEndBlock",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "setTrading",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newIcoStartBlock",
                "type": "uint256"
            }],
            "name": "changeIcoStartBlock",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "enableTrading",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "minInvestment",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_oldValue",
                    "type": "uint256"
                },
                {
                    "name": "_newValue",
                    "type": "uint256"
                }
            ],
            "name": "changeApproval",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "liquidations",
            "outputs": [{
                    "name": "tokens",
                    "type": "uint256"
                },
                {
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "amountTokensToLiquidate",
                "type": "uint256"
            }],
            "name": "requestLiquidation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "amount",
                "type": "uint256"
            }],
            "name": "removeLiquidity",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "currentPrice",
            "outputs": [{
                    "name": "topInteger",
                    "type": "uint256"
                },
                {
                    "name": "bottomInteger",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "amountTokensToLiquidate",
                "type": "uint256"
            }],
            "name": "checkLiquidationValue",
            "outputs": [{
                "name": "etherValue",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "buy",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newPriceUpdateWaitingTime",
                "type": "uint256"
            }],
            "name": "changePriceUpdateWaitingTime",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "prices",
            "outputs": [{
                    "name": "topInteger",
                    "type": "uint256"
                },
                {
                    "name": "bottomInteger",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newTopInteger",
                "type": "uint256"
            }],
            "name": "updatePriceEDEX",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "newSecondaryWallet",
                "type": "address"
            }],
            "name": "changeSecondaryWallet",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "icoBottomIntegerPrice",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "maxSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "investor",
                "type": "address"
            }],
            "name": "verifyInvestor",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "grantVestedEDEXContract",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "investor",
                "type": "address"
            }],
            "name": "buyTo",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [{
                "name": "remaining",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "addLiquidity",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "grantVestedEDEXContractInput",
                "type": "address"
            }],
            "name": "setGrantVestedEDEXContract",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "secondaryWallet",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                    "name": "secondaryWalletInput",
                    "type": "address"
                },
                {
                    "name": "priceTopIntegerInput",
                    "type": "uint256"
                },
                {
                    "name": "startBlockInput",
                    "type": "uint256"
                },
                {
                    "name": "endBlockInput",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "investor",
                "type": "address"
            }],
            "name": "Verification",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "investor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountTokens",
                    "type": "uint256"
                }
            ],
            "name": "LiquidationCall",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "investor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountTokens",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "etherAmount",
                    "type": "uint256"
                }
            ],
            "name": "Liquidations",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "investor",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "ethValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "amountTokens",
                    "type": "uint256"
                }
            ],
            "name": "Buy",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": false,
                    "name": "topInteger",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "bottomInteger",
                    "type": "uint256"
                }
            ],
            "name": "PriceEDEXUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "etherAmount",
                "type": "uint256"
            }],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "etherAmount",
                "type": "uint256"
            }],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }
    ]);

    //Creates an instance of the contract
    var _EquadexContract = EquadexContract.at('0x0a6b0a0b5c6feb1feb3913b82de1828ebf0f40bf');

    var curEvent;
    var Events = {
        "ValidateEvent": 1,
        "InvalidateEvent": 2
    }

    //button to verify an address
    $("#btnVerify").click(function () {
        ResetNavbar();
        var _toVerifyAdd = $("#toVerifyAdd").val();
        //Input check
        if (isEmpty(_toVerifyAdd) || !isNumber(_toVerifyAdd)) {
            InvalidAddressAlert();
            return;
        }

        showHideLoader(1);
        _EquadexContract.verifyInvestor(_toVerifyAdd, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
        curEvent = Events["ValidateEvent"];
    });

    //button for invalidating an address
    $("#btnRemoveAdd").click(function () {
        ResetNavbar();
        var _addToInvalidate = $("#addToRemove").val();

        //Input check
        if (isEmpty(_addToInvalidate) || !isNumber(_addToInvalidate)) {
            InvalidAddressAlert();
            return;
        }

        showHideLoader(1);
        _EquadexContract.removeVerifiedInvestor(_addToInvalidate, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
        curEvent = Events["InvalidateEvent"];
    });

    //Common event for verifation
    var verificationEvent = _EquadexContract.Verification({}, 'latest');

    verificationEvent.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            switch (curEvent) {
                case Events["ValidateEvent"]:
                    $("#transactionResult").html('Address verified: ' + result.args.investor);
                    break;
                case Events["InvalidateEvent"]:
                    $("#transactionResult").html('Address removed: ' + result.args.investor);
                    break;
            }

        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });

    //Button to update main wallet
    $("#btnNewMW").click(function () {
        ResetNavbar();
        var _addNewMW = $("#addMW").val();

        //Input check
        if (isEmpty(_addNewMW) || !isNumber(_addNewMW)) {
            InvalidAddressAlert();
            return;
        }

        showHideLoader(1);
        _EquadexContract.changeMainWallet(_addNewMW, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //Button to update secondary wallet
    $("#btnNewSW").click(function () {
        ResetNavbar();
        var _addToInvalidate = $("#addSW").val();

        //Input check
        if (isEmpty(_addToInvalidate) || !isNumber(_addToInvalidate)) {
            InvalidAddressAlert();
            return;
        }

        showHideLoader(1);
        _EquadexContract.changeSecondaryWallet(_addToInvalidate, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //Button to update ICO start block
    $("#btnNewStartBlock").click(function () {
        ResetNavbar();
        var _addToInvalidate = $("#newStartBlock").val();
        showHideLoader(1);
        _EquadexContract.changeIcoStartBlock(_addToInvalidate, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //Button to update ICO bottom block
    $("#btnNewEndBlock").click(function () {
        ResetNavbar();
        var _addToInvalidate = $("#newEndBlock").val();
        showHideLoader(1);
        _EquadexContract.changeIcoEndBlock(_addToInvalidate, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //Button to enable trading
    $("#btnEnableTrading").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.enableTrading((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //Button to liquidate
    $("#btnLiquidate").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.liquidate((err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });

    //Event for liquidation
    var LiquidateEvent = _EquadexContract.Liquidations({}, 'latest');

    LiquidateEvent.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            $("#transactionResult").html('Investor: ' + result.args.investor + ', Amount of tokens: ' + result.args.amountTokens + ', Amount of Ether: ' + result.args.etherAmount);
        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });

    //button to halt ICO
    $("#btnHaltICO").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.haltICO((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //button to unhalt ICO
    $("#btnUnhaltICO").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.unhaltICO((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });

    //Button to Request liquidation
    $("#btnRequestLiquidation").click(function () {
        ResetNavbar();
        var _tokensToLiquidate = $("#tokensToLiquidate").val();
        showHideLoader(1);
        _EquadexContract.requestLiquidation(_tokensToLiquidate, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });

    //Event for liquidation request
    var RequestLiquidateEvent = _EquadexContract.LiquidationCall({}, 'latest');

    RequestLiquidateEvent.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            $("#transactionResult").html('Investor: ' + result.args.investor + ', Amount of tokens: ' + result.args.amountTokens);
        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });


    //Button to add liquidity
    $("#btnAddLiquidity").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.addLiquidity((err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });

    //Event for adding liquidity
    var Addliquidity = _EquadexContract.AddLiquidity({}, 'latest');

    Addliquidity.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            $("#transactionResult").html('Amount of ether: ' + result.args.etherAmount);
        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });

    //Button to remove liquidity
    $("#btnRemoveLiquidity").click(function () {
        ResetNavbar();
        var _tokensToRemoveLiq = $("#tokensToRemoveLiq").val();
        showHideLoader(1);
        _EquadexContract.removeLiquidity(_tokensToRemoveLiq, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });

    //Event for removing liquidity
    var RemoveLiquidityEvent = _EquadexContract.RemoveLiquidity({}, 'latest');

    RemoveLiquidityEvent.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            $("#transactionResult").html('Amount of ether: ' + result.args.etherAmount);
        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });

    //Button to approve
    $("#btnApprove").click(function () {
        ResetNavbar();
        var _spenderToApprove = $("#spenderToApprove").val();
        var _valueToApprove = $("#valueToApprove").val();
        //Input check
        if (isEmpty(_spenderToApprove) || !isNumber(_spenderToApprove)) {
            InvalidAddressAlert();
            return;
        }

        showHideLoader(1);
        _EquadexContract.approve(_spenderToApprove, _valueToApprove, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                showHideLoader(0);
                $("#TransHash").html('Transaction Hash: ' + res);
            }
        });
    });

    //Button to change approval
    $("#btnChangeApprove").click(function () {
        ResetNavbar();
        var _spenderToChngApproval = $("#spenderToChngApproval").val();
        var _oldValueToApprove = $("#oldValueToApprove").val();
        var _newValueToApprove = $("#newValueToApprove").val();
        //Input check
        if (isEmpty(_spenderToChngApproval) || !isNumber(_spenderToChngApproval)) {
            InvalidAddressAlert();
            return;
        }

        showHideLoader(1);
        _EquadexContract.changeApproval(_spenderToChngApproval, _oldValueToApprove, _newValueToApprove, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                showHideLoader(0);
                $("#TransHash").html('Transaction Hash: ' + res);
            }
        });
    });

    //Button for buyTo function
    $("#btnBuyTo").click(function () {
        ResetNavbar();
        var _buyToAddress = $("#buyToAddress").val();
        //Input check
        if (isEmpty(_buyToAddress) || !isNumber(_buyToAddress)) {
            InvalidAddressAlert();
            return;
        }
        showHideLoader(1);
        _EquadexContract.buyTo(_buyToAddress, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });

    //Buy event
    var BuyEvent = _EquadexContract.Buy({}, 'latest');

    BuyEvent.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            $("#transactionResult").html('Investor: ' + result.args.investor + ', Beneficiary: ' + result.args.beneficiary + ', ETH value: ' + result.args.ethValue + ', Amount of tokens: ' + result.args.amountTokens);
        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });

    //button for setting grant vested contract
    $("#btnSetVestedContract").click(function () {
        ResetNavbar();
        var _vestedContractAdd = $("#vestedContractAdd").val();
        //Input check
        if (isEmpty(_vestedContractAdd) || !isNumber(_vestedContractAdd)) {
            InvalidAddressAlert();
            return;
        }
        showHideLoader(1);
        _EquadexContract.setGrantVestedEDEXContract((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                $("#TransHash").html('Transaction Hash: ' + res);
                showHideLoader(0);
            }
        });
    });


    //button to update top price integer
    $("#btnUpdatePrice").click(function () {
        ResetNavbar();
        showHideLoader(1);
        var _updatePrice = $("#updatePriceTop").val();
        _EquadexContract.updatePriceEDEX(_updatePrice, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });

    //button to update bottom price integer
    $("#btnUpdateBtmPrice").click(function () {
        ResetNavbar();
        showHideLoader(1);
        var _updatePrice = $("#updatePriceBtm").val();
        _EquadexContract.updatePriceBottomInteger(_updatePrice, (err, res) => {
            if (err) {
                showHideLoader(0);
            }
        });
    });


    //Common event for getting updated price
    var updatePriceEvent = _EquadexContract.PriceEDEXUpdate({}, 'latest');

    updatePriceEvent.watch(function (error, result) {
        if (!error) {
            TransactionComplete(result);
            $("#transactionResult").html('Price updated: priceNumerator: ' + result.args.topInteger + ', priceDenominator: ' + result.args.bottomInteger);
        } else {
            alert("Something went wrong!");
            showHideLoader(0);
        }
    });


    //button for checking if verified or not
    $("#btnCheckVer").click(function () {
        ResetNavbar();
        var _addToChk = $("#addToChk").val();
        //Input check
        if (isEmpty(_addToChk) || !isNumber(_addToChk)) {
            InvalidAddressAlert();
            return;
        }
        showHideLoader(1);

        _EquadexContract.verified(_addToChk, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Verified: ' + res.toString());
            }
        });
    });

    //button for checking total supply
    $("#btnCheckSup").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.totalSupply((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Total supply: ' + res.toString());
            }
        });
    });

    //Button for checking symbol
    $("#btnCheckSym").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.symbol((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Current symbol: ' + res.toString());
            }
        });
    });

    //Button to check contract name
    $("#btnCheckName").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.name((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Contract name: ' + res.toString());
            }
        });
    });

    //Button for checking ICO start block
    $("#btnCheckSBlk").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.icoStartBlock((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Crowd sale starts at block No. ' + res.toString());
            }
        });
    });

    //Button for checking ICO end block
    $("#btnCheckEBlk").click(function () {
        ResetNavbar();
        showHideLoader(1);
        _EquadexContract.icoEndBlock((err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Crowd sale ends at block No. ' + res.toString());
            }
        });
    });

    //Button for checking balance of people
    $("#btnCheckBal").click(function () {
        ResetNavbar();
        var _addToChk = $("#addToChkBal").val();
        //Input check
        if (isEmpty(_addToChk) || !isNumber(_addToChk)) {
            InvalidAddressAlert();
            return;
        }
        showHideLoader(1);

        _EquadexContract.balanceOf(_addToChk, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Balance: ' + res.toString());
            }
        });
    });

    //Button to check liquidation
    $("#btnCheckLiq").click(function () {
        ResetNavbar();
        var _addToChk = $("#valLiquidChk").val();
        showHideLoader(1);
        _EquadexContract.checkLiquidationValue(_addToChk, (err, res) => {
            if (err) {
                showHideLoader(0);
            } else {
                ResetNavbar();
                $("#transactionResult").html('Liquidation value: ' + res.toString());
            }
        });
    });

    //Clear navbar
    function ResetNavbar() {
        showHideLoader(0);
        $("#insTrans").html('');
        $("#transBlock").html('');
        $("#TransHash").html('');
        $("#transactionResult").html('');
    }

    //Common info function (only on successful transaction)
    function TransactionComplete(block) {
        if (block.blockHash != $("#insTrans").html())
            showHideLoader(0);
        $("#insTrans").html('Block hash: ' + block.blockHash);
        $("#transBlock").html('Transaction Block: ' + block.blockNumber);
    }

    //Alert if no address is found
    function InvalidAddressAlert() {
        alert('Please enter a valid address');
    }

    //Empty string check
    function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    //Loading image switch (0: off, 1: on)
    function showHideLoader(onOff) {
        if (onOff == 1) {
            var sLoader = $("#loader").show();
        } else {
            var hLoader = $("#loader").hide();
        }
    }

    //Check if input is a number (address)
    function isNumber(str) {
        if (isNaN(str)) {
            return false;
        } else {
            return true;
        }
    }
});