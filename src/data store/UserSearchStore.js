import React, {useState, createContext} from "react";

export const UserSearchContext = createContext();

export default function UserSearchStore(props) {
  const [search, setSearch] = useState("");
  return (
    <UserSearchContext.Provider value={[search, setSearch]}>
      {props.children}
    </UserSearchContext.Provider>
  );
}
