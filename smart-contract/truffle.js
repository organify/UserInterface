// module.exports = {
//   networks: {
//     development: {
//       host: '127.0.0.1',
//       port: 8545,
//       network_id: '5777',
//       from: '0xE71A1Cb389dc5B877E4c032492a2c83AC522460a',
//     },
//   }
// };
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      from: '0xD3e4265540E0730Ad0D247381b88416CF32D4e19',
    },
     ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     gas:   2900000
}
  },
   rpc: {
 host: 'localhost',
 post:8080
   }
};