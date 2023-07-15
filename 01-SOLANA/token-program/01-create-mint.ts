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
    const minter = await token.createMint(
        connection,
        keypairFromSecret,
        new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4'),
        new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4'),
        9
    );

    console.log('tokenMint', minter.toBase58());
    // Token Mint Account : LwEWEFJdHKBEh95qWnh58USzwaw7yS66SAjoJjHEYVY
}

main()
