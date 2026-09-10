/**
 * Website-wide configuration.
 *
 * VITE_APP_URL points to the hosted CollabKaro application (the web app with
 * authentication, creator portal, brand portal, etc.).
 *
 * On this marketing website, all "Sign Up" and "Login" buttons link out to
 * the app URL, keeping the website itself completely static and auth-free.
 */
export const APP_URL =
  (import.meta.env.VITE_APP_URL as string | undefined) ?? "https://app.collabkaro.in";

/**
 * Build an absolute URL to the app — e.g. appUrl("/register?role=creator")
 */
export function appUrl(path: string): string {
  return `${APP_URL.replace(/\/$/, "")}${path}`;
}
