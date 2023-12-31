"use client";

import { Issue, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import { Skeleton } from "@/app/components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AsignSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  const [selectedUserId, setSelectedUserId] = useState(
    issue.assignedTouserId || ""
  ); // Track the selected user ID

  const handleAssignChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const userId = event.target.value;
    setSelectedUserId(userId);
    try {
      await axios.patch(`/api/issues/${issue.id}`, {
        assignedTouserId: userId || null,
      });
      if (userId) {
        toast.success("Issue Assigned for user.");
      } else {
        toast.warn("Issue Unassigned.");
      }
    } catch (error) {
      toast.error("Changes could not be saved.");
    }
  };

  if (isLoading) return <Skeleton height="2.5rem" />;
  if (error) return null;

  //   const [users, setUsers] = useState<User[]>([]);
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const { data } = await axios.get<User[]>("/api/users");
  //       setUsers(data);
  //     };
  //     fetchUsers();
  //   }, []);
  return (
    <div>
      {/* <label htmlFor="suggestions">Suggestions</label> */}
      <select
        // defaultValue={issue.assignedTouserId || ""}
        className=" w-full border border-cyan-500 focus:border-cyan-500 focus:outline-0 rounded-md h-10"
        id="suggestions"
        onChange={handleAssignChange} // Attach the onChange handler
        value={selectedUserId} // Control the select value using state
      >
        <option value="">Unassign</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
        {/* Add other options here */}
      </select>
      <ToastContainer />
    </div>
  );
};

export default AsignSelect;
