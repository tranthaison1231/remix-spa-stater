import { Navigate, type MetaFunction } from "@remix-run/react";
import { lazy } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "Very cool app | User" }];
};

const UserContainer = lazy(
  () => import("~/features/user/containers/UserContainer")
);

export default function UserPage() {
  const username = "test";
  if (username === "test") {
    return <Navigate to="/404" />;
  }

  return <UserContainer />;
}
