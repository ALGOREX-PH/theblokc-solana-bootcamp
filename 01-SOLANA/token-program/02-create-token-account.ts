import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';
import * as token from '@solana/spl-token'

async function main()
{
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const keypairFromSecret = Web3.Keypair.fromSecretKey(base58DecodePK)
    const tokenAccount = token.createAccount(
        connection, // connection
        keypairFromSecret, // signer
        new Web3.PublicKey('LwEWEFJdHKBEh95qWnh58USzwaw7yS66SAjoJjHEYVY'), // token mint account
        new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4')); // owner
    console.log('token Account', (await tokenAccount).toBase58())
}
// token Account : GCwXqFCMvTeNTV9ehjMFEbgudQqdkbzy5BZcAfEHBtVZ
main()