import { ElectedCouncilFieldsFragment } from '@/queries/__generated__';

import { asBlock, Block } from './common/Block';
import { asCouncilor, Councilor } from './Councilor';

export interface ElectedCouncil {
  id: string;
  electedAt: Block;
  endedAt?: Block;
  councilors: Councilor[];
  electionCycleId: number | undefined;
}

export const asElectedCouncil = (fields: ElectedCouncilFieldsFragment): ElectedCouncil => ({
  id: fields.id,
  councilors: fields.councilMembers.map(asCouncilor),
  electionCycleId: fields.councilElections[0]?.cycleId,
  electedAt: asBlock({
    createdAt: fields.electedAtTime,
    inBlock: fields.electedAtBlock,
    network: fields.electedAtNetwork,
  }),
  endedAt:
    fields.endedAtBlock && fields.endedAtNetwork
      ? asBlock({
          createdAt: fields.electedAtTime,
          inBlock: fields.endedAtBlock,
          network: fields.endedAtNetwork,
        })
      : undefined,
});
