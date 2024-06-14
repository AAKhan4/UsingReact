import { createContext } from "react";

export const UserInfoContext = createContext({
  username: "guest",
  isAdmin: false,
});
