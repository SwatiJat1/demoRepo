import React from "react";
import { useForm } from "react-hook-form";

const UseForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => console.log(data);
  const name = "aaaaa";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="day" defaultValue={name} {...register("example")} />

      <input
        {...register("exampleRequired", {
          required: true,
          maxLength: 5,
          onBlur: (e) => alert("================"),
        })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input
        disabled={true}
        {...register("number", {
          min: {
            value: 3,
            message: <p>error message</p>, // JS only: <p>error message</p> TS only support string
          },
        })}
      />

      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="Asdkksdskd">Category A</option>
        <option value="Bxmcxmncxc,n">Category B</option>
        <option value="Bxmcxmncxc,n">Category B</option>
      </select>
      <input
        {...register("checkbox", { required: true })}
        type="checkbox"
        value="A"
      />
      {errors.checkbox && <span>This field is required</span>}
      <input {...register("checkbox1")} type="checkbox" value="B" />
      <input {...register("checkbox2")} type="checkbox" value="C" />

      <input {...register("radio")} type="radio" value="A" />
      <input {...register("radio")} type="radio" value="B" />
      <input {...register("radio")} type="radio" value="C" />
      <input type="submit" />
    </form>
  );
};

export default UseForm;
