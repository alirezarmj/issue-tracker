"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas.ts";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";

// interface IssueForm {
//   title: string;
//   description: string;
// }
type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
  const [error, setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  return (
    <div className=" w-2/3">
      {error && (
        <p className="px-3 py-2 rounded-md mb-4 bg-rose-300">{error}</p>
      )}
      <form
        className="  space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured");
            console.log(error);
          }
        })}
      >
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className=" w-full border px-2 py-1 focus:outline-none "
        />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <button className=" px-4 py-2  bg-cyan-700 rounded-md text-white ">
          Submit New Issue
        </button>
      </form>
    </div>
  );
};

export default NewIssuePage;
