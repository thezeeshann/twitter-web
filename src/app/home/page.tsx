import SideNav from "@/components/sidenav";
import RightSideNav from "@/components/right-sidenav";
import Main from "@/components/main";

export default function Home() {
  return (
    <section className=" w-[75%] mx-auto flex flex-row ">
      <div className="w-[20%] mx-auto">
        <SideNav />
      </div>
      <div className="w-[50%]">
        <Main />
      </div>
      <div className=" w-[30%]">
        <RightSideNav />
      </div>
    </section>
  );
}
