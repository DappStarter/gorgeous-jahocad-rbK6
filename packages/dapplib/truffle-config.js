require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember equip half kitchen success sight'; 
let testAccounts = [
"0xcaea1d30f568b79bf36e1baf55be770be9c94acdf3f1243b11a5fe09f1c90726",
"0x5f86312b2debb8446975eb021e7e02d01e2df692aa6708d088ea7bf53db469a3",
"0x74786773e5fce10319fb36007ccdac68175645042d34ed45c84811e4cd1865d7",
"0x911322e872dd17f4be69e7163038994fc45a62ecdd2723f968162b2d0644229a",
"0xe6b9761e610604d477fa825179bed93b05b1437cf716137fcf5077aeab5ee078",
"0xd0ed9fb31bcc5d121b6338661d390230e8ea2116b6aaf979289f42e6382bf2e1",
"0x2254be5670819a6f4d94bfd93c6b59babe520a4ec6609c7421c0abb829b3dd62",
"0xe7784d2b20298c2ab27a4cc250b4dddada8bf8361e2337960d5800bdacab6c95",
"0x2257095f47d65f211e79289ebe22c793c217cc6cef477a60d0d35440f411ef63",
"0xadf5bbe697c16768db6ee8bcf7f2744a36ceac81e9d4aea878e03c90974629f8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


