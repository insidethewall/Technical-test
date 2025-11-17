// @ts-nocheck
import { useForm, useWatch } from "react-hook-form";
import { mockEmails } from "../MockEmail";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();
  const buttonFill =
    "bg-linear-90 from-brand-primary to-brand-accent btn-gradient-animate";

  const emailValue = useWatch({ control, name: "email", defaultValue: "" });
  const onSubmit = (data) => {
    const { email, password } = data;
    const user = mockEmails.find((item) => item.email === email.trim());
    if (user && user.password === password) {
      localStorage.setItem("isLoggedIn", email);
      navigate("/home");
    } else {
      setError("root", {
        type: "manual",
        message: "Email or password is incorrect",
      });
    }
  };

  return (
    <div
      className="flex flex-col laptop:items-center justify-center overflow-y-auto bg-darkBlueBackGround min-h-screen
       bg-[url('/Background-Image.png')] bg-cover bg-center 
        laptop:bg-none laptop:bg-darkBlueBackGround "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[520px] px-4 py-3 tablet:p-6 laptop:p-10 mx-auto laptop:my-auto"
      >
        <div className="text-white font-bold text-7xl font-login py-4">
          SIGN IN
        </div>
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label for="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
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
          className="w-full p-3 mb-4 mt-1 border border-gray-300 rounded text-white"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <label for="password" className="text-white">
          Password
        </label>
        <input
          id="password"
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
          className="w-full p-3 mb-4 mt-1 border border-gray-300 rounded text-white"
        />
        <button
          className={`${buttonFill} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md  w-full py-4 rounded-xl cursor-pointer text-white`}
        >
          Login
        </button>
      </form>
    </div>
  );
}
