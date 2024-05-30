import prisma from '@/lib/db';
import { cache } from 'react';

export const fetchLinks = cache(async function () {
  return await prisma.link.findMany();
});

export const fetchFavoriteLinks = cache(async function () {
  return await prisma.link.findMany({
    where: {
      isFavorite: true,
    },
  });
});
