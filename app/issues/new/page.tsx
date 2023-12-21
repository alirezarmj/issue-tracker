"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useReducer } from "react";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  return (
    <form
      className=" w-2/3 space-y-4"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <input
        {...register("title")}
        type="text"
        placeholder="Title"
        className=" w-full border px-2 py-1  "
      />
      {/* <textarea
        placeholder="Description"
        className=" w-full border px-2 py-1 "
      /> */}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <button className=" px-4 py-2  bg-cyan-700 rounded-md text-white ">
        Submit New Issue
      </button>
    </form>
  );
};

export default NewIssuePage;
