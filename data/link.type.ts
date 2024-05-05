import { tCategory } from '@/data/category.type';

type CategoryPair = [tCategory, tCategory];
type CategoryTriple = [tCategory, tCategory, tCategory];

export interface iLink {
  title: string;
  description: string;
  category: tCategory | CategoryPair | CategoryTriple;
  url: string;
}
