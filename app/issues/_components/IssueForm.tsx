"use client";
// import SimpleMDE from "react-simplemde-editor";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validationSchemas.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import SimpleMDE from "react-simplemde-editor";
import Button from "@/app/components/Button";
import { Issue } from "@prisma/client";
// interface IssueForm {
//   title: string;
//   description: string;
// }

// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });

type IssueFormData = z.infer<typeof issueSchema>;
const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setError("An unexpected error occured");
      setIsSubmitting(false);
    }
  });
  const router = useRouter();
  return (
    <div className=" w-2/3">
      {error && (
        <p className="px-3 py-2 rounded-md mb-4 bg-rose-300">{error}</p>
      )}
      <form className="  space-y-4" onSubmit={onSubmit}>
        <input
          {...register("title")}
          type="text"
          defaultValue={issue?.title}
          placeholder="Title"
          className=" w-full border px-2 py-1 focus:outline-none "
        />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {issue ? <p> Update Issue</p> : <p> Submit New Issue</p>}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
