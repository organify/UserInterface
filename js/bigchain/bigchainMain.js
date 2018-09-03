// // function verifyInfo(){
// const driver = require('bigchaindb-driver');
// // const bip39 = require('bip39')
// const apple = new driver.Ed25519Keypair()
// const conn = new driver.Connection(
//     'https://test.bigchaindb.com/api/v1/',
//     { 
//         app_id: 'c40a7ae7',
//         app_key: '269a4cc396a089d6d3d5ce3335607b04' 
//     }
// )
// function  verifyInfo(){
//     const tx = driver.Transaction.makeCreateTransaction(
//         {
//             product:{
//                 name: "Apple",
//                 imgUrl: "http://www.martinsapplechips.com/sites/default/files/story/growing-family-tradition-orchard.jpg"
//             },
//             timeStamp: "Aug-2018",
//             event: {
//                 name: "Harvested",
//                 location: "Dalian/China",
//                 description: "This is an organic apple hasvested from Dalian, China"
                
//             },
            
//         },
//         null,
//         [ driver.Transaction.makeOutput(
//             driver.Transaction.makeEd25519Condition(apple.publicKey))],
//         apple.publicKey)
//     const txSigned = driver.Transaction.signTransaction(tx, apple.privateKey)
//     conn.postTransactionCommit(txSigned)
//     .then(res => {
//         const elem = document.getElementById('lastTransaction')
//         elem.href = API_PATH + 'transactions/' + txSigned.id
//         elem.innerText = txSigned.id
//         console.log('Transaction', txSigned.id, 'accepted')
//     })
// }
    
//     // }
    
    
    
//     // const driver = require('bigchaindb-driver')
    
//     // // BigchainDB server instance (e.g. https://test.bigchaindb.com/api/v1/)
//     // const API_PATH = 'http://localhost:9984/api/v1/'
    
//     // // Create a new keypair.
//     // const alice = new driver.Ed25519Keypair()
    
//     // // Construct a transaction payload
//     // const tx = driver.Transaction.makeCreateTransaction(
//     //     // Define the asset to store, in this example it is the current temperature
//     //     // (in Celsius) for the city of Berlin.
//     //     { city: 'Berlin, DE', temperature: 22, datetime: new Date().toString() },
    
//     //     // Metadata contains information about the transaction itself
//     //     // (can be `null` if not needed)
//     //     { what: 'My first BigchainDB transaction' },
    
//     //     // A transaction needs an output
//     //     [ driver.Transaction.makeOutput(
//     //             driver.Transaction.makeEd25519Condition(alice.publicKey))
//     //     ],
//     //     alice.publicKey
//     // )
    
//     // // Sign the transaction with private keys
//     // const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
    
//     // // Send the transaction off to BigchainDB
//     // const conn = new driver.Connection(API_PATH)
    
//     // conn.postTransactionCommit(txSigned)
//     //     .then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'))