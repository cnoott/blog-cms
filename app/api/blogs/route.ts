import { NextRequest, NextResponse } from 'next/server';
import { Post } from '../../models';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, date } = body;

    if (!title || !content || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const newPost = await Post.create({ title, content, date });

    return NextResponse.json(newPost, { status: 201 });
  } catch (e) {
    console.log(e);
  }
}
