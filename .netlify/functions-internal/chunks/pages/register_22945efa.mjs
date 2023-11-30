import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_ef9e10b7.mjs';
import { $ as $$BaseLayout } from './__00457d05.mjs';

const $$Astro = createAstro("https://remarkable-fairy-a9040b.netlify.app/");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form action="/api/auth/register" method="post"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/register.astro", void 0);

const $$file = "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
