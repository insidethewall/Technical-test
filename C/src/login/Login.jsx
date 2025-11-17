// @ts-nocheck
import { useForm, useWatch } from "react-hook-form";
import { mockEmails } from "./MockEmail";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "onBlur" });

  const buttonFill =
    "bg-linear-90 from-brand-primary to-brand-accent btn-gradient-animate";
  const emailValue = useWatch({ control, name: "email", defaultValue: "" });
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
    >
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            const email = value.trim();
            const exists = mockEmails.map((item) => item.email);
            const exist = exists.includes(email);
            return exist ? true : "Email does not exist";
          },
        })}
        className="w-full p-3 mb-4 border border-gray-300 rounded"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 16,
            message: "Password cannot be longer than 16 characters",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            message:
              "Must contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
          },
          validate: (value) => {
            const email = emailValue.trim();
            const user = mockEmails.find((item) => item.email === email);
            if (user) {
              return value === user.password || "Incorrect password";
            }
            return true;
          },
        })}
        className="w-full p-3 mb-4 border border-gray-300 rounded"
      />
      <button
        className={`${buttonFill} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md  w-full py-4 rounded-xl cursor-pointer text-white`}
      >
        Login
      </button>
    </form>
  );
}
