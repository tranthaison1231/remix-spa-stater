import type { MetaFunction } from "@remix-run/react";
import UserContainer from "~/features/user/containers/UserContainer";

export const meta: MetaFunction = () => {
  return [{ title: "Very cool app | User" }];
};

export default function UserPage() {
  return <UserContainer />;
}
