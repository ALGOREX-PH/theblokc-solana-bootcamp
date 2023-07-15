import { createMetaplexInstance } from "./metaplex";

const metaplex = createMetaplexInstance()

const metadata = 
{
    name : "TIGERTIDES ART NFT",
    description : "My First Solana NFT uinsg Metaplex Token Standard at the BLOKC",
    image : "https://arweave.net/0fNmaHYCLtdSrMkn7IMDEai-T3HVJuXL43ONANBOniM",
    attributes : [
       {
        trait_type : 'Event',
        value : 'Solana Developers Bootcamp'
       }
    ]
}

async function main() 
{
    const { uri } = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri);
}
// metadata uri https://arweave.net/LKmwl9268aO8ahzmU4HZ-283TOEE9PHiCZQ2si5q2ks
main()