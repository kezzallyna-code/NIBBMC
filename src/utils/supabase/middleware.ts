import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase environment variables missing in middleware. Bypassing auth checks.')
    return supabaseResponse
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  
  let user = null;
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('dummy')) {
      const { data } = await supabase.auth.getUser()
      user = data.user;
    }
  } catch (e) {
    console.error("Supabase auth error in middleware (likely dummy credentials):", e);
  }

  if (
    !user &&
    request.nextUrl.pathname.startsWith('/admin') &&
    request.nextUrl.pathname !== '/admin-login' &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('dummy') // Allow admin access with dummy keys for preview
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone()
    url.pathname = '/admin-login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
