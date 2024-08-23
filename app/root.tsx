import { Outlet, Scripts } from "@remix-run/react";
import "./globals.css";

export default function Component() {
  return (
    <>
      <Outlet />
      <Scripts />
    </>
  );
}

export function HydrateFallback() {
  return (
    <>
      <p>Loading...</p>
      <Scripts />
    </>
  );
}
