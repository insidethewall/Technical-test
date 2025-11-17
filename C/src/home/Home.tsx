export function Home() {
  const userEmail = localStorage.getItem("isLoggedIn");
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl">
        Welcome{" "}
        <span className="text-brand-primary font-bold">{userEmail}</span>
      </div>
      <button
        onClick={logout}
        className="border rounded-2xl max-w-xl hover:bg-black hover:text-white cursor-pointer px-4 py-2"
      >
        Log out
      </button>
    </div>
  );
}
