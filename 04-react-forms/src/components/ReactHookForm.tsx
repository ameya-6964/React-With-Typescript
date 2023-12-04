import React from "react";
import { useForm, FieldValues } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name <span className="text-danger">*</span>
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p style={{ color: "red" }}>Name Field Is Required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p style={{ color: "red" }}>Name Must Be Atleast 3 Characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age <span className="text-danger">*</span>
        </label>
        <input
          {...register("age", { required: true, minLength: 2, maxLength: 2 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p style={{ color: "red" }}>Age Field Is Required</p>
        )}
        {errors.age?.type === "minLength" && (
          <p style={{ color: "red" }}>Above 10 Only</p>
        )}
        {errors.age?.type === "maxLength" && (
          <p style={{ color: "red" }}>Below 100 Only</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
