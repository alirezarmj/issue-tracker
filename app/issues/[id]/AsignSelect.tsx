"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

const AsignSelect = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {/* <label htmlFor="suggestions">Suggestions</label> */}
      <select
        className=" w-full border border-cyan-500 focus:border-cyan-500 focus:outline-0 rounded-md h-10"
        id="suggestions"
      >
        <option value="" defaultValue="Assign">
          Assign
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
        {/* Add other options here */}
      </select>
    </div>
  );
};

export default AsignSelect;
