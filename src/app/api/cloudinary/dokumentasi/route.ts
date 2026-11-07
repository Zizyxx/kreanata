import { NextResponse } from 'next/server';
import { fetchCloudinaryDokumentasi } from '@/lib/cloudinary';

export async function GET() {
  const photos = await fetchCloudinaryDokumentasi();
  return NextResponse.json({ photos });
}
