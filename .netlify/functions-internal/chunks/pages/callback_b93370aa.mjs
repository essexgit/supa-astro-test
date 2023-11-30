import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://ldvhhsnxndzmiqqxjedp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkdmhoc254bmR6bWlxcXhqZWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTI0NDQsImV4cCI6MjAxNjY2ODQ0NH0.eaSutW_4H6ZZ40QrLN4sWgJIyGpc12eq1-tMhAbYt5U", {
  auth: {
    flowType: "pkce"
  }
});

const GET = async ({
  url,
  cookies,
  redirect
}) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No code provided", {
      status: 400
    });
  }
  const {
    data,
    error
  } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, {
      status: 500
    });
  }
  const {
    access_token,
    refresh_token
  } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/dashboard");
};

const callback = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { callback as c, supabase as s };
