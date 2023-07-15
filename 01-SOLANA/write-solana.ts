import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';
//console.log(process.env.SOL_PRIVATE_KEY)

async function main()
{
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    console.log('Sending SOL.......')   
    const transaction = new Web3.Transaction();
    
    
    const sendSolInstruction = SystemProgram.transfer(
        {
            fromPubkey: new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4'),
            toPubkey: new Web3.PublicKey('ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD'),
            lamports: 1 * LAMPORTS_PER_SOL
        })
        transaction.add(sendSolInstruction)

        console.log('Current amount of SOL in Wallet after sending :', (await connection.getBalance(new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4'))) / LAMPORTS_PER_SOL)
        const base58DecodePK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
        const keypairFromSecret = Web3.Keypair.fromSecretKey(base58DecodePK)

        
        const txHash = await sendAndConfirmTransaction(connection, transaction, [keypairFromSecret]);
        console.log('txHash', txHash)
}
main()