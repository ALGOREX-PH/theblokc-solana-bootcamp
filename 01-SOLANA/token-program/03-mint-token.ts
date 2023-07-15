import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';
import * as token from '@solana/spl-token'

async function main() 
{
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodePK)

    const mint_token_to = token.mintTo(
        connection, // connection
        signer,  // payer
        new Web3.PublicKey('LwEWEFJdHKBEh95qWnh58USzwaw7yS66SAjoJjHEYVY'), // Token Mint Account
        new Web3.PublicKey('GCwXqFCMvTeNTV9ehjMFEbgudQqdkbzy5BZcAfEHBtVZ'),  // Token Account 
        signer, // Minting authority
        68000000000 // Tokens to mint 
    );
    console.log('Mint :', mint_token_to)
}

main()