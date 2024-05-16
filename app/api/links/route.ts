import prisma from '@/lib/db';
import type { Link } from '@prisma/client';

interface LinkCategory {
  category: string;
  count: number;
  links: Link[];
}

export async function GET() {
  try {
    const groupedLinks = await prisma.link.groupBy({
      by: ['category'],
      _count: {
        _all: true,
      },
      orderBy: {
        category: 'asc',
      },
    });

    const result: LinkCategory[] = groupedLinks.map(({ category, _count }) => ({
      category,
      count: _count._all,
      links: [],
    }));

    const allLinks: Link[] = await prisma.link.findMany();

    result.forEach((categoryObj) => {
      categoryObj.links = allLinks.filter(
        (link) => link.category === categoryObj.category,
      );
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
