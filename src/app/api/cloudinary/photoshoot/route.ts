import { NextResponse } from 'next/server';
import { fetchCloudinaryPhotoshoot } from '@/lib/cloudinary';

export async function GET() {
  const photos = await fetchCloudinaryPhotoshoot();
  return NextResponse.json({ photos });
}

