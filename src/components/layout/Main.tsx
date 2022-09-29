import { Outlet } from "react-router-dom";
import withAuthenticator from "../HOC/withAuthenticator";
import Navbar from "./Header";
import SideBar from "./Sidebar";

function Main(props: any) {
  return (
    <div className="h-screen flex overflow-y-hidden">
      <div className="flex-shrink-0 overflow-y-scroll w-64 border lg:block hidden">
        <h2 className="text-center py-4">Role Hunt</h2>
        <div className="h-full">
          <SideBar />
        </div>
      </div>

      <div className="flex-1 flex flex-col flex-shrink-0  ">
        <Navbar user={props.user} />
        <section className="overflow-y-scroll p-10">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default withAuthenticator(Main);
