import * as Web3 from '@solana/web3.js'
const publickey = new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4')

async function main() 
{
    console.log('devnet url', Web3.clusterApiUrl('devnet'))
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publickey)
    console.log('balance', balance)

    const AccountInfo = await connection.getAccountInfo(publickey)
    console.log('accountInfo', AccountInfo?.data.toString())

    // LAMPORTS PER SOL : 1000000000
    const balance_in_sol = balance / Web3.LAMPORTS_PER_SOL
    console.log('SOL', balance_in_sol)
}
main()