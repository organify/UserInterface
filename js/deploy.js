var Web3 = require('web3');
// var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/[FWRMZMXII4UVR3UDW373EVEW1UUP1JK2WE]'));
var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_operators",
				"type": "address[]"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "addAddressesToWhitelist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_operator",
				"type": "address"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "addAddressToWhitelist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fromAdd",
				"type": "address"
			},
			{
				"name": "_toAdd",
				"type": "address"
			},
			{
				"name": "_publicKey",
				"type": "string"
			}
		],
		"name": "confirmTransferItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_operators",
				"type": "address[]"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "removeAddressesFromWhitelist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_operator",
				"type": "address"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "removeAddressFromWhitelist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fromAdd",
				"type": "address"
			},
			{
				"name": "_toAdd",
				"type": "address"
			},
			{
				"name": "_publicKey",
				"type": "string"
			}
		],
		"name": "requestTransferItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "role",
				"type": "string"
			}
		],
		"name": "RoleAdded",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_publicKey",
				"type": "string"
			},
			{
				"name": "_privateKey",
				"type": "string"
			}
		],
		"name": "setItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "role",
				"type": "string"
			}
		],
		"name": "RoleRemoved",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_role",
				"type": "string"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "subscribe",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_operator",
				"type": "address"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "checkRole",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getItem",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_operator",
				"type": "address"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_operator",
				"type": "address"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "whitelist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

var monthlysubscriptionContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"checkRole","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getItem","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"hasRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"string"},{"name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"},{"name":"_role","type":"string"}],"name":"removeAddressesFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"string"}],"name":"subscribe","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_role","type":"string"}],"name":"getPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"},{"name":"_role","type":"string"}],"name":"addAddressesToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_name","type":"string"},{"name":"_publicKey","type":"string"},{"name":"_privateKey","type":"string"}],"name":"setItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromAdd","type":"address"},{"name":"_toAdd","type":"address"},{"name":"_publicKey","type":"string"}],"name":"confirmTransferItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromAdd","type":"address"},{"name":"_toAdd","type":"address"},{"name":"_publicKey","type":"string"}],"name":"requestTransferItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"removeAddressFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"addAddressToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]);


var ContractAddress = "0x8d1086dc3395c556ba10c2b17d213c308c33fce2";


var MonthlySubscription = web3.eth.contract(abi);
var contractInstance = MonthlySubscription.at(ContractAddress); 

function checkIfWhitelist(){
    wallet = $("#first-name").val();
    month = $("#string").val();

    /**
     *  @dev contract is working with different wallets
    */ 

    if(contractInstance.whitelist(wallet, month) == true){
        alert('it worked');
    }else{
        alert('please validate your monthly membership so we can unlock your access. Thank you!')
        console.log(wallet);
        console.log(month);
    }
}

function setGreeting1(){
    paramString = $("#Param-String").val();
    paramPrice = parseInt($(".Param-Price").val());
    
    contractInstance.setPrice(paramString, paramPrice, (function (err, result){}));
    alert('thank you for submitting: ' + paramString + ', for ' + paramPrice + ' wei')
};

var priceStore;

function storeWei(){
		var selectBox = document.getElementById("selectBox");
		var paramString = selectBox.options[selectBox.selectedIndex].value;
		contractInstance.getPrice(paramString, (function (err, result) {
			priceStore = web3.fromWei(result.toNumber(), "ether" );
			return priceStore;
		}));
		var price = document.getElementById("DealPrice");
		price.innerHTML = ""
		var appendButton = document.getElementById("paymentbutton");
		appendButton.innerHTML = ""
}
function appendWei(){
	if(parseFloat(priceStore) > 0){
		var price = document.getElementById("DealPrice");
		price.innerHTML = "This membership will cost you " + priceStore + " wei";
		var appendButton = document.getElementById("paymentbutton");
		appendButton.innerHTML = 
		"<button class=" + "login100-form-btn onclick=" + "sendWei()" +">" +
		"Register new parameters." +
		"</button>";
	} else {
		var price = document.getElementById("DealPrice");
		price.innerHTML = "please select a payment plan"
	}
}

function sendWei(){
	var selectBox = document.getElementById("selectBox");
	var paramString = selectBox.options[selectBox.selectedIndex].value;
	contractInstance.subscribe(paramString, {
		from: web3.eth.accounts[0],
		to: ContractAddress, 
		value: web3.toWei(parseFloat(priceStore))},(function(err,result){}));
}


// to send transaction
// web3.eth.sendTransaction({
// 	from: web3.eth.accounts[0],
//     to: ContractAddress, 
//     value: web3.toWei(1, "ether"),}
// 		, function(err, transactionHash) {
//     if (err) { 
//         console.log(err); 
//     } else {
//         console.log(transactionHash);
//     }
// });