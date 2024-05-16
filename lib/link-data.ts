import prisma from '@/lib/db';

interface fetchLinksProps {
  category?: string;
}

export async function fetchLinks({ category }: fetchLinksProps) {
  if (category) {
    return await prisma.link.findMany({
      where: {
        category: {
          equals: category,
        },
      },
    });
  } else {
    return await prisma.link.findMany();
  }
}

export async function fetchFavoriteLinks() {
  return await prisma.link.findMany({
    where: {
      isFavorite: true,
    },
  });
}
