import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { prisma } from '@/prisma/client';

interface Props {
  params: { id: number };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });

  return NextResponse.json({}); // delete user
}
