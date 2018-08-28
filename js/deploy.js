web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [
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
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_role",
				"type": "string"
			}
		],
		"name": "isSubscribed",
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
	}
]

var monthlysubscriptionContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"checkRole","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"hasRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"string"},{"name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"},{"name":"_role","type":"string"}],"name":"removeAddressesFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"string"}],"name":"subscribe","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_role","type":"string"}],"name":"getPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operators","type":"address[]"},{"name":"_role","type":"string"}],"name":"addAddressesToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_role","type":"string"}],"name":"isSubscribed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"removeAddressFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_role","type":"string"}],"name":"addAddressToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"role","type":"string"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]);

var ContractAddress = "0xe31ae51f7c9be06a132d5a2d8d60530f18274179";

function checkIfWhitelist(){
    wallet = $("#first-name").val();
    month = $("#string").val();
    var MonthlySubscription = web3.eth.contract(abi);
    var contractInstance = MonthlySubscription.at(ContractAddress); 

    /**
     *  @dev contract is working with different wallets
    */ 

    if(contractInstance.whitelist(wallet, month) == true){
        alert('it worked');
    }else{
        alert('please validate your month membership so we can unlock your access. Thank you!')
        console.log(wallet);
        console.log(month);
    }
}

function setGreeting1(){
    paramString = $("#Param-String").val();
    paramPrice = parseInt($(".Param-Price").val());
    var MonthlySubscription = web3.eth.contract(abi);
    var contractInstance = MonthlySubscription.at(ContractAddress); 
    contractInstance.setPrice(paramString, paramPrice);
    alert('thank you for submitting: ' + paramString + ', for ' + paramPrice + ' wei')
};

// to create new contracts
// var monthlysubscription = monthlysubscriptionContract.new(
//    {
//      from: web3.eth.accounts[0], 
//      data: '0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611369806100536000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630988ca8c146100d5578063217fe6c61461015e57806322e01192146101ff5780632beeaca4146102725780633595310814610313578063507e7888146103bf578063524f38891461041b578063715018a61461049857806372c7e48d146104af5780637a1a14f51461055b5780638da5cb5b146105fc578063db31dd1714610653578063e6d4d217146106dc578063f2fde38b14610765575b600080fd5b3480156100e157600080fd5b5061015c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506107a8565b005b34801561016a57600080fd5b506101e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610829565b604051808215151515815260200191505060405180910390f35b34801561020b57600080fd5b50610270600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506108b0565b005b34801561027e57600080fd5b506102f9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061097f565b604051808215151515815260200191505060405180910390f35b34801561031f57600080fd5b506103bd60048036038101908080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610993565b005b610419600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a31565b005b34801561042757600080fd5b50610482600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610b20565b6040518082815260200191505060405180910390f35b3480156104a457600080fd5b506104ad610b95565b005b3480156104bb57600080fd5b5061055960048036038101908080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610c97565b005b34801561056757600080fd5b506105e2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610d35565b604051808215151515815260200191505060405180910390f35b34801561060857600080fd5b50610611610d4f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561065f57600080fd5b506106da600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610d74565b005b3480156106e857600080fd5b50610763600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610ddd565b005b34801561077157600080fd5b506107a6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e46565b005b610825826001836040518082805190602001908083835b6020831015156107e457805182526020820191506020810190506020830392506107bf565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020610ead90919063ffffffff16565b5050565b60006108a8836001846040518082805190602001908083835b6020831015156108675780518252602082019150602081019050602083039250610842565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020610ec690919063ffffffff16565b905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561090b57600080fd5b806002836040518082805190602001908083835b602083101515610944578051825260208201915060208101905060208303925061091f565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055505050565b600061098b8383610829565b905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109f057600080fd5b600090505b8251811015610a2c57610a1f8382815181101515610a0f57fe5b9060200190602002015183610d74565b80806001019150506109f5565b505050565b6002816040518082805190602001908083835b602083101515610a695780518252602082019150602081019050602083039250610a44565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020543410151515610aab57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610b12573d6000803e3d6000fd5b50610b1d3382610ddd565b50565b60006002826040518082805190602001908083835b602083101515610b5a5780518252602082019150602081019050602083039250610b35565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bf057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cf457600080fd5b600090505b8251811015610d3057610d238382815181101515610d1357fe5b9060200190602002015183610ddd565b8080600101915050610cf9565b505050565b60008282610d4382826107a8565b60019250505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dcf57600080fd5b610dd98282610f1f565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e3857600080fd5b610e428282611053565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ea157600080fd5b610eaa81611187565b50565b610eb78282610ec6565b1515610ec257600080fd5b5050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f9c826001836040518082805190602001908083835b602083101515610f5b5780518252602082019150602081019050602083039250610f36565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902061128190919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167fd211483f91fc6eff862467f8de606587a30c8fc9981056f051b897a418df803a826040518080602001828103825283818151815260200191508051906020019080838360005b83811015611015578082015181840152602081019050610ffa565b50505050905090810190601f1680156110425780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b6110d0826001836040518082805190602001908083835b60208310151561108f578051825260208201915060208101905060208303925061106a565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206112df90919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167fbfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b700489826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561114957808201518184015260208101905061112e565b50505050905090810190601f1680156111765780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156111c357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820a7efb291ccac9a84375eedea3a03f69147cfd20bc8d3412169a00a9f09146df60029', 
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  })