  import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function createCookie(key: string, value: string, cookie?: Partial<ResponseCookie> | undefined) {
  cookies().set(key, value, cookie);
}

export async function readCookie(key: string) {
  return cookies().get(key)?.value;
}
export async function deleteCookie(key: string) {
  cookies().delete(key);
}
