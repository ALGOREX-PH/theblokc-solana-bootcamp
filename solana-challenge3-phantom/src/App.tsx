
// import functionalities
import * as Web3 from '@solana/web3.js'
import React from 'react';
import './App.css';
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import {useEffect , useState } from "react";
import './App.css'
import base58 from 'bs58';
import { sendAndConfirmTransaction } from '@solana/web3.js';
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;
// create types
type DisplayEncoding = "utf8" | "hex";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}


interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}


 const getProvider = (): PhantomProvider | undefined => {
  if ("solana" in window) {
    // @ts-ignore
    const provider = window.solana as any;
    if (provider.isPhantom) return provider as PhantomProvider;
  }
};

export default function App() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );

  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
  undefined
  );

  useEffect(() => {
	  const provider = getProvider();

	  if (provider) setProvider(provider);
	  else setProvider(undefined);
  }, []);

  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log('wallet account ', response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
      }
    }
  };

  const click = async () => {
    const input_name = document.getElementById('name') as HTMLInputElement | null;
    const input_student_number = document.getElementById('student_number') as HTMLInputElement | null;
    const input_course = document.getElementById('Course') as HTMLInputElement | null;
    const value_name = input_name?.value;
    const value_student_number = input_student_number?.value;
    const value_course = input_course?.value;
    console.log("Name : " + value_name);
    console.log("Student Number : " + value_student_number);
    console.log("Course : " + value_course);
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePK = base58.decode('5BeWvAMqPBwJQT5Zj2pS4HcHpTiZuijaSDa64CYoVqAjEebna8bFAe57H9xJkZKnbTZGxm7pe9segd8WiCkKEee')
    const keypairFromSecret = Web3.Keypair.fromSecretKey(base58DecodePK)
    const signer = keypairFromSecret;
    const message = "Name : " + value_name + " Student Number : " + value_student_number + " Course : " + value_course;
    const transaction = new Web3.Transaction()
    const publicKey = new Web3.PublicKey('FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4')
const instruction = new Web3.TransactionInstruction({
  keys: [
      {
          pubkey: publicKey,
          isSigner: true,
          isWritable: false,
      }
  ],
  
  data: Buffer.alloc(message.length, message, 'utf8'),
  programId: new Web3.PublicKey("A9cGSBPTiq1nySm8ES9QMP63PtBaWWqhPXYEsjPtQ6Fe")
  
})
transaction.add(instruction)
const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [signer]
)

console.log('SIGNATURE', signature)
};
  

	// HTML
  return (
    <div className="App">
      <header className="App-header">
        <h2>Connect to Phantom Wallet</h2>
      {provider && !walletKey && (
      <button
        style={{
          fontSize: "16px",
          padding: "15px",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
        )}

       
        {
        provider && walletKey && 
        (<>
        <p>Phantom Wallet has successfully connected</p>
        <label>Name : <input type = "text" id = "name"></input></label>
        <label>Student Number : <input type = "text" id = "student_number"></input></label>
        <label>Course : <input type = "text" id = "Course"></input></label>
        <button
        style={{
          fontSize: "16px",
          paddingTop : "50px",
          padding: "15px",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        onClick={click}>
        Send</button>
        </>
        )
        }

         
        {!provider && (
          <p>
            No provider found. Please Install{" "}
            <a href="https://phantom.app/">Phantom Browser extension</a>
          </p>
        )}
        </header>
    </div>
  );



}