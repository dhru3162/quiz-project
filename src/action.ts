import nookies from 'nookies';
import { NextPageContext } from 'next';

interface CookieSerializeOptions {
  maxAge?: number;
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'lax' | 'strict' | 'none';
}

// Create a cookie (client or server)
export const createCookie = (
  key: string,
  value: string,
  options: CookieSerializeOptions = {},
  ctx?: NextPageContext | null,
): void => {
  nookies.set(ctx || null, key, value, {
    path: '/',
    ...options,
  });
};

// Read a cookie (client or server)
export const readCookie = (
  key: string,
  ctx?: NextPageContext | null
): string | null => {
  const cookies = nookies.get(ctx || null);
  return cookies[key] || null;
};

// Delete a cookie (client or server)
export const deleteCookie = (
  key: string,
  ctx?: NextPageContext | null
): void => {
  nookies.destroy(ctx || null, key, { path: '/' });
};
