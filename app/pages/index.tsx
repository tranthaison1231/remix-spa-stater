import type { MetaFunction } from "@remix-run/react";
import HomeContainer from "~/features/home/containers/HomeContainer";

export const meta: MetaFunction = () => {
  return [{ title: "Very cool app | Home" }];
};

export default function HomePage() {
  return <HomeContainer />;
}
