import { tCategory } from '@/data/category.type';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type CategoryPair = [tCategory, tCategory];
type CategoryTriple = [tCategory, tCategory, tCategory];

export interface iLink {
  title: string;
  description: string;
  feature: string[];
  icon?: StaticImport;
  iconThemed?: {
    light?: StaticImport;
    dark?: StaticImport;
  };
  category: tCategory | CategoryPair | CategoryTriple;
  url: string;
  isFavorite?: boolean;
}
