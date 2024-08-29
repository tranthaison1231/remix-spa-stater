import type { MetaFunction } from "@remix-run/react";
import TailwindIntersectContainer from "~/features/tailwind-intersect/containers/TailwindIntersectContainer";

export const meta: MetaFunction = () => {
  return [{ title: "Very cool app | Tailwind" }];
};

export default function TailwindIntersectPage() {
  return <TailwindIntersectContainer />;
}
