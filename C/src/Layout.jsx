import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <div>footer</div>
    </div>
  );
}

export default Layout;
