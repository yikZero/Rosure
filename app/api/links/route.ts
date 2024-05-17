import prisma from '@/lib/db';
import { NextRequest } from 'next/server';

const ADD_LINK_SECRET = process.env.ADD_LINK_SECRET;

export async function POST(req: NextRequest) {
  const addLinkSecret = req.headers.get('ADD_LINK_SECRET');
  if (!addLinkSecret || addLinkSecret !== ADD_LINK_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      description,
      feature,
      icon,
      iconLight,
      iconDark,
      category,
      url,
      isFavorite,
    } = body;

    const link = await prisma.link.create({
      data: {
        title,
        description,
        feature,
        icon,
        iconLight,
        iconDark,
        category,
        url,
        isFavorite,
      },
    });

    return new Response(JSON.stringify(link), {
      status: 201,
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
