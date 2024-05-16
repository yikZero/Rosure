import prisma from '@/lib/db';

interface fetchLinksProps {
  category?: string;
}

export default async function fetchLinks({ category }: fetchLinksProps) {
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
