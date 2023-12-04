import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name Must Be Atleast 3 Characters" }),
  age: z
    .number({ invalid_type_error: "Age Field Cannot Be Empty" })
    .min(18, { message: "Age Must Be Above 18" })
    .max(99, { message: "Age Must Be Below 100" }),
});

type FormData = z.infer<typeof schema>;

const ZodValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name <span className="text-danger">*</span>
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age <span className="text-danger">*</span>
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ZodValidation;
