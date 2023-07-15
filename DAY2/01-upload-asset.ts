import { createMetaplexInstance } from "./metaplex";
import { toMetaplexFile } from "@metaplex-foundation/js";
import fs from 'fs'

const buffer = fs.readFileSync(__dirname + "/assets/photo.jpg");
const file = toMetaplexFile(buffer, "photo.jpg");

const metaplex = createMetaplexInstance()

async function main(){
    const imageUrl = await metaplex.storage().upload(file)
    console.log('image Url', imageUrl);
}
// image url : https://arweave.net/0fNmaHYCLtdSrMkn7IMDEai-T3HVJuXL43ONANBOniM
main()