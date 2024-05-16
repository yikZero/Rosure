import prisma from '@/lib/db';

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

    const totalCount = groupedLinks.reduce(
      (sum, group) => sum + group._count._all,
      0,
    );

    const responseData = {
      total: totalCount,
      categories: groupedLinks.map((group) => ({
        category: group.category,
        count: group._count._all,
      })),
    };

    return new Response(JSON.stringify(responseData), {
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
