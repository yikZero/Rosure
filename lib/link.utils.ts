import { iLink } from '@/data/link.type';
import { allLinks } from '@/data/links';

export function linkBelongsToCategory(link: iLink, category: string): boolean {
  const linkCategories = Array.isArray(link.category)
    ? link.category
    : [link.category];

  return linkCategories.some((cat) => cat.toLowerCase() === category);
}

export function getLinksCountForCategory(category: string): number {
  if (category.toLowerCase() === 'all') {
    return allLinks.length;
  } else {
    return allLinks.filter((link) => linkBelongsToCategory(link, category))
      .length;
  }
}
export function getLinksForCategory(category: string): iLink[] {
  return allLinks.filter((link) => linkBelongsToCategory(link, category));
}
