import { SenlerStatsRes } from '@features/senlerStats';

export const setCostPerSub = (senlerStats: SenlerStatsRes) => {
  const { count_subscribe, spent } = senlerStats;
  const costPerSub = count_subscribe ? +spent / count_subscribe : 0;
  return { ...senlerStats, costPerSub };
};
