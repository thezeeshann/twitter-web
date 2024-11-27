"use client";

import Image from "next/image";
import xlogo from "../../public/X_logo.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { footerData } from "@/lib/data";
import { useState } from "react";
import SignInDialog from "@/components/modals/sign-in-modal";
import XButton from "@/components/x-button";

export default function Home() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <section className="flex flex-col h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
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
            <XButton
              bgColor="bg-white"
              textColor="text-black"
              name="Sign up with Google"
              icon={FaGoogle}
            />
            <XButton
              bgColor="bg-white"
              textColor="text-black"
              name="Sign up with Apple"
              icon={FaApple}
            />
          </div>
          <div className="my-1 flex flex-row gap-x-2 items-center  w-[260px]">
            <div className="w-[50%] h-[1px] bg-[#2F3336]" />
            <p>or</p>
            <div className="w-[50%] h-[1px] bg-[#2F3336]" />
          </div>
          <div>
            <XButton
              bgColor="bg-[#1A8CD8]"
              textColor="text-white"
              name="Create account"
            />
            <p className="text-[10px] mt-1 w-[260px]">
              By signing up, you agree to the{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">
                Privacy Policy
              </span>
              , including{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm">Already have an account?</p>
            <div
              onClick={() => setIsSignInOpen(true)}
              className="cursor-pointer hover:bg-transparent border-[1px] rounded-full py-2 px-8 mt-4 flex flex-row gap-x-2 items-center justify-center w-[260px]"
            >
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

      {isSignInOpen && (
        <SignInDialog
          isSignInOpen={isSignInOpen}
          setIsSignInOpen={setIsSignInOpen}
        />
      )}
    </section>
  );
}
