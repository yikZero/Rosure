import { tCategory } from '@/data/category.type';

type CategoryPair = [tCategory, tCategory];
type CategoryTriple = [tCategory, tCategory, tCategory];

export interface iLink {
  title: string;
  description: string;
  feature: string[];
  icon?: string;
  iconThemed?: {
    light?: string;
    dark?: string;
  };
  category: tCategory | CategoryPair | CategoryTriple;
  url: string;
  isFavorite?: boolean;
}
