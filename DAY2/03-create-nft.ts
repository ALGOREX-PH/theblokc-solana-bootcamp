import { createMetaplexInstance } from "./metaplex";

async function main() 
{
    const metaplex = createMetaplexInstance()
    const metadataUri = 'https://arweave.net/LKmwl9268aO8ahzmU4HZ-283TOEE9PHiCZQ2si5q2ks'
    const { nft } = await metaplex.nfts().create({
        uri : metadataUri,
        name : 'TIGERTIDES ART NFT',
        sellerFeeBasisPoints : 0
    }, { commitment: "finalized" })

    console.log('nft : ', nft)
}
/*
nft :  {
  model: 'nft',
  updateAuthorityAddress: PublicKey [PublicKey(FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4)] {
    _bn: <BN: dc7ab09e2561563c0cdc5771aeb7b384e97e63a8a6e3ae68c13b6d921e754d7b>
  },
  json: {
    name: 'TIGERTIDES ART NFT',
    description: 'My First Solana NFT uinsg Metaplex Token Standard at the BLOKC',
    image: 'https://arweave.net/0fNmaHYCLtdSrMkn7IMDEai-T3HVJuXL43ONANBOniM',
    attributes: [ [Object] ]
  },
  jsonLoaded: true,
  name: 'TIGERTIDES ART NFT',
  symbol: '',
  uri: 'https://arweave.net/LKmwl9268aO8ahzmU4HZ-283TOEE9PHiCZQ2si5q2ks',
  isMutable: true,
  primarySaleHappened: false,
  sellerFeeBasisPoints: 0,
  editionNonce: 254,
  creators: [
    {
      address: [PublicKey [PublicKey(FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4)]],
      verified: true,
      share: 100
    }
  ],
  tokenStandard: 0,
  collection: null,
  collectionDetails: null,
  uses: null,
  programmableConfig: null,
  address: PublicKey [PublicKey(BsM4X1qB5xv6yGDk6VS8vBkDhVE1WLDUf8Z7gMVHFeGR)] {
    _bn: <BN: a17a97a51037dff5ff24f13e44305b1975781f83d7d2a0369f57f09944fd1ee2>
  },
  metadataAddress: Pda [PublicKey(CrFV6zj3LyRNVsMUoBZGBVUJUUCHvKdpnh4sZNkD7SRZ)] {
    _bn: <BN: b00e64c027a408d364de57ee28ca6baec6cf6663d5064bb9e0bd2fbd8bfdb4e4>,
    bump: 255
  },
  mint: {
    model: 'mint',
    address: PublicKey [PublicKey(BsM4X1qB5xv6yGDk6VS8vBkDhVE1WLDUf8Z7gMVHFeGR)] {
      _bn: <BN: a17a97a51037dff5ff24f13e44305b1975781f83d7d2a0369f57f09944fd1ee2>
    },
    mintAuthorityAddress: PublicKey [PublicKey(26gEMvS4D9LrTze7JD64uVqadDTYToP268t1d2p9DuTU)] {
      _bn: <BN: 104ff2e9a9822aca56938a30fbcd22a0bf4cdc38b367fe20c61128ca0448ae4f>
    },
    freezeAuthorityAddress: PublicKey [PublicKey(26gEMvS4D9LrTze7JD64uVqadDTYToP268t1d2p9DuTU)] {
      _bn: <BN: 104ff2e9a9822aca56938a30fbcd22a0bf4cdc38b367fe20c61128ca0448ae4f>
    },
    decimals: 0,
    supply: { basisPoints: <BN: 1>, currency: [Object] },
    isWrappedSol: false,
    currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
  },
  token: {
    model: 'token',
    address: Pda [PublicKey(NSttQYa6b3vaH1qDEMcgqYboFqRounG8s63pT6i5t9G)] {
      _bn: <BN: 57e79e19894ef2f0855baaf6a6da741cf5df74c2fdde4590bda3a5032bc505b>,
      bump: 255
    },
    isAssociatedToken: true,
    mintAddress: PublicKey [PublicKey(BsM4X1qB5xv6yGDk6VS8vBkDhVE1WLDUf8Z7gMVHFeGR)] {
      _bn: <BN: a17a97a51037dff5ff24f13e44305b1975781f83d7d2a0369f57f09944fd1ee2>
    },
    ownerAddress: PublicKey [PublicKey(FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4)] {
      _bn: <BN: dc7ab09e2561563c0cdc5771aeb7b384e97e63a8a6e3ae68c13b6d921e754d7b>
    },
    amount: { basisPoints: <BN: 1>, currency: [Object] },
    closeAuthorityAddress: null,
    delegateAddress: null,
    delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
    state: 1
  },
  edition: {
    model: 'nftEdition',
    isOriginal: true,
    address: Pda [PublicKey(26gEMvS4D9LrTze7JD64uVqadDTYToP268t1d2p9DuTU)] {
      _bn: <BN: 104ff2e9a9822aca56938a30fbcd22a0bf4cdc38b367fe20c61128ca0448ae4f>,
      bump: 254
    },
    supply: <BN: 0>,
    maxSupply: <BN: 0>
  }
}
*/
main()