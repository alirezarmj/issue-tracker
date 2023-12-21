import React from "react";

const NewIssuePage = () => {
  return (
    <div className=" w-2/3 space-y-4">
      <input
        type="text"
        placeholder="Title"
        className=" w-full border px-2 py-1  "
      />
      <textarea
        placeholder="Description"
        className=" w-full border px-2 py-1 "
      />
      <button className=" px-4 py-2  bg-cyan-700 rounded-md text-white ">
        Submit New Issue
      </button>
    </div>
  );
};

export default NewIssuePage;
