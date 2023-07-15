import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import { sendAndConfirmTransaction } from '@solana/web3.js'
import base58 from 'bs58';
async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const keypairFromSecret = Web3.Keypair.fromSecretKey(base58DecodePK)
    const signer = keypairFromSecret;
    const transaction = new Web3.Transaction()
    const publicKey = new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4')
    const message = "Name : " + "Danielle" + " Student Number : " + "2022102669" + " Course : " + "BMCS";
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        
        data: Buffer.alloc(100, message, 'utf8'),
        programId: new Web3.PublicKey("A9cGSBPTiq1nySm8ES9QMP63PtBaWWqhPXYEsjPtQ6Fe")
        
    })
    transaction.add(instruction)
    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )

    console.log('SIGNATURE', signature)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err)


        
    })


main()
