import { NextRequest } from 'next/server';

const ADD_LINK_SECRET = process.env.ADD_LINK_SECRET;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { secret } = body;
    if (secret === ADD_LINK_SECRET) {
      return new Response(JSON.stringify({ verified: true }), {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ verified: false }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
