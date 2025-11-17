import { LoginForm } from "./component/LoginForm";

export function Login() {
  return (
    <div className="min-h-screen laptop:grid laptop:grid-cols-2">
      <div className=" bg-[url('/public/Background-Image.png')] bg-cover bg-center"></div>
      <LoginForm />
    </div>
  );
}
