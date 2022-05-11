import React from "react";
import { useForm } from "react-hook-form";
import "../form/style.css";

const CustomForm = ({ onSubmit }: { onSubmit: () => void}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Please enter your name"
          {...register("username", {
            required: "Your name is required",
            minLength: {
              value: 4,
              message: "minimum length is 4 characters",
            },
            maxLength: {
              value: 16,
              message: "maximum length is 16 characters",
            },
          })}
        />
        <button type="submit" className="buttonSubmit">
          Submit
        </button>
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
      </form>
    </>
  );
};

export default CustomForm;
