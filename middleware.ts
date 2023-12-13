import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const ip = request.ip;
  const country = await getCountryFromIP(ip);

  if (country === 'JP') {
    return new Response('Access denied', { status: 403 });
  }

  return NextResponse.next();
}

async function getCountryFromIP(
  ip: string | undefined,
): Promise<string | null> {
  if (!ip) return null;
  const res = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode`);
  const data = await res.json();

  return data.countryCode;
}
