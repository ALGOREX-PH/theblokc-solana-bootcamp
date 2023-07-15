import 'dotenv/config'
import base58 from 'bs58'
import { Metaplex, keypairIdentity, bundlrStorage} from '@metaplex-foundation/js'
import { Connection, Keypair, clusterApiUrl} from '@solana/web3.js'

const connection = new Connection(clusterApiUrl('devnet'))

export const createMetaplexInstance = () => 
{
    const keypairfromSecretKey = Keypair.fromSecretKey(
        base58.decode(process.env.SOL_PRIVATE_KEY || '')
    )

    const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(keypairfromSecretKey))
    .use(bundlrStorage({
        address : 'https://devnet.bundlr.network',
        providerUrl: 'https://api.devnet.solana.com',
        timeout: 60000
    }))
    return metaplex; 
    
}