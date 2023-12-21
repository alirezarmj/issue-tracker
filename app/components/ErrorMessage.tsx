import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return <p className=" text-rose-600 ">{children}</p>;
};

export default ErrorMessage;
