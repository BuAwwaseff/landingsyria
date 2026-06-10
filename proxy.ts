import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getLocaleFromPathname,
  LANGUAGE_COOKIE_MAX_AGE,
  LANGUAGE_COOKIE_NAME,
  normalizeLanguage,
} from "@/lib/market/syria.globals";

export function proxy(request: NextRequest) {
  const pathnameLanguage = getLocaleFromPathname(request.nextUrl.pathname);
  const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value;
  const requestLanguage = pathnameLanguage ?? normalizeLanguage(cookieLanguage);
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-language", requestLanguage);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (cookieLanguage !== requestLanguage) {
    response.cookies.set(LANGUAGE_COOKIE_NAME, requestLanguage, {
      path: "/",
      maxAge: LANGUAGE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
