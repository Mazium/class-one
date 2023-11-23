import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export const RootLayer = () => {
  return (
    <div>
      <Nav/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
