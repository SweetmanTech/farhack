import { Address } from 'viem';
import { supabase } from '../supabase';
import { MerkleEntry } from '../types';
import { makeTree } from './merkle';
import callSaleMerkle from '../zora/callSaleMerkle';

const updateWhitelist = async (minter: Address) => {
  const { data: existingEntries } = (await supabase.from('entries').select()) as {
    data: any[];
  };
  let found = false;
  for (let entry of existingEntries) {
    if (entry.minter === minter) {
      entry.maxCount = (BigInt(entry.maxCount) + 1n).toString();
      found = true;
      break;
    }
  }

  if (!found) {
    existingEntries.push({
      minter: minter,
      maxCount: 1n,
      price: 0n,
    });
  }
  const { root, entries } = makeTree(existingEntries as MerkleEntry[]);
  await supabase.from('root').upsert({ root, id: 1 });
  const supabaseEntries = entries.map((entry: MerkleEntry) => ({
    proof: entry.proof,
    minter: entry.minter,
    maxCount: entry.maxCount.toString(),
    price: entry.price.toString(),
  }));
  await supabase.from('entries').upsert(supabaseEntries);
  await callSaleMerkle(root as Address);
};

export default updateWhitelist;
