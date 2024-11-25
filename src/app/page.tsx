import Image from "next/image";
import xlogo from "../../public/X_logo.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { footerData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <div className="flex flex-row">
        <div className=" w-[55%] flex justify-center items-center ">
          <Image
            src={xlogo}
            height={400}
            width={400}
            alt="X-logo"
            className=""
          />
        </div>
        <div className="  w-[45%]">
          <p className="font-bold text-[55px] mb-3">Happening now</p>
          <p className="font-bold text-[31px]">Join today.</p>
          <div className="flex flex-col gap-y-2">
            <div className="rounded-full py-2 px-8 bg-white flex flex-row gap-x-2 items-center justify-center cursor-pointer w-[260px]">
              <FaGoogle color="#000000 " size={15} />
              <p className=" text-black text-xs">Sign up with Google</p>
            </div>
            <div className="rounded-full py-2 px-8 bg-white flex flex-row gap-x-2 items-center justify-center cursor-pointer  w-[260px]">
              <FaApple color="#000000 " size={15} />
              <p className=" text-black text-xs">Sign up with Apple</p>
            </div>
          </div>
          <div className="my-1 flex flex-row gap-x-2 items-center  w-[260px]">
            <div className="w-[50%] h-[1px] bg-[#2F3336]" />
            <p>or</p>
            <div className="w-[50%] h-[1px] bg-[#2F3336]" />
          </div>
          <div>
            <div className="bg-[#1A8CD8] rounded-full py-2 px-8  flex flex-row gap-x-2 items-center justify-center cursor-pointer w-[260px]">
              <p className="text-white text-xs">Create account</p>
            </div>
            <p className="text-[10px] mt-1 w-[260px]">
              By signing up, you agree to the{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">Terms of Service</span> and{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">Privacy Policy</span>, including{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">Privacy Policy</span>
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm">Already have an account?</p>
            <div className="cursor-pointer hover:bg-transparent border-[1px] rounded-full py-2 px-8 mt-4 flex flex-row gap-x-2 items-center justify-center w-[260px]">
              <p className="text-[#1A8CD8] text-sm">Sign in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-[10.5px]">
        {footerData.map((data) => (
          <p
            key={data.id}
            className="text-[10px] hover:underline text-[#71767B] cursor-pointer"
          >
            {data.name}
          </p>
        ))}
      </div>
    </main>
  );
}
