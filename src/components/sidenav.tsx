import { CiSearch } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { CgShortcut } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import Image from "next/image";
import xLogo from "../../public/X_logo.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import XSidenavButton from "./x-sidenav-button";

export default function SideNav() {
  return (
    <section>
      <Image src={xLogo} width={50} height={50} alt="x-logo" />
      <div className="flex flex-col mt-5 gap-y-4">
        <XSidenavButton name="Home" icon={GoHome} />
        <XSidenavButton name="Explore" icon={CiSearch} />
        <XSidenavButton name="Notifications" icon={IoIosNotificationsOutline} />
        <XSidenavButton name="Messages" icon={LuMessageSquare} />
        <XSidenavButton name="Grok" icon={CgShortcut} />
        <XSidenavButton name="Communities" icon={GoPeople} />
        <XSidenavButton name="Premium" icon={FaXTwitter} />
        <XSidenavButton name="Verified Orgs" icon={AiOutlineThunderbolt} />
        <XSidenavButton name="Profile" icon={CgProfile} />
        <XSidenavButton name="More" icon={CiCircleMore} />
      </div>
      <button className="cursor-pointer bg-[#1A8CD8] font-medium w-[80%] rounded-full py-2 px-8 mt-4">
        Post
      </button>
      <div className="flex flex-row items-center justify-between mt-7">
        <div className="flex flex-row items-center gap-x-4">
          <Image
          className="rounded-full"
            src={
              "https://pbs.twimg.com/profile_images/1825841240480374784/SkltiG00_400x400.jpg"
            }
            width={35}
            height={35}
            alt="profile"
          />
          <div className="flex flex-col items-start">
            <p className="text-xs">Zeeshan</p>
            <p className="text-xs text-[#71767B]">@thezeeshann</p>
          </div>
        </div>
        <HiDotsHorizontal />
      </div>
    </section>
  );
}
