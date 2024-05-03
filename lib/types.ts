import { Address } from "viem";

export type MerkleEntry = {
    minter: Address;
    maxCount: bigint;
    price: bigint;
    hash?: string | Buffer;
    proof?: string[];
};