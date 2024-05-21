import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectRoute = createRouteMatcher(['/']);

export default clerkMiddleware((auth, request) => {
  if (isProtectRoute(request)) {
    auth().protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
