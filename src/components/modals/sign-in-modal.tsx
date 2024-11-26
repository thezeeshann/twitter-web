import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import xLogo from "../../../public/X_logo.jpg";
import XButton from "../x-button";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { Input } from "../ui/input";

type SignInDialogProp = {
  isSignInOpen: boolean;
  setIsSignInOpen: (value: boolean) => void;
};

export default function SignInDialog({
  isSignInOpen,
  setIsSignInOpen,
}: SignInDialogProp) {
  return (
    <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
      <DialogContent className="bg-[#000000]">
        <DialogHeader>
          <DialogTitle asChild>
            <Image
              src={xLogo}
              width={40}
              height={40}
              alt="x-logo"
              className="mx-auto"
            />
          </DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center">
            <p className="font-semibold text-xl text-[#E7E9EA]">Sign in to X</p>
            <div className="flex flex-col gap-y-4 mt-8">
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
            <div className="my-2 flex flex-row gap-x-2 items-center  w-[260px]">
              <div className="w-[50%] h-[1px] bg-[#2F3336]" />
              <p className="text-[#E7E9EA]">or</p>
              <div className="w-[50%] h-[1px] bg-[#2F3336]" />
            </div>
            <Input
              placeholder="Phone, email, or username"
              className="w-[260px] focus:outline-blue-500 mb-5"
            />

            <div>
              <XButton bgColor="bg-white" textColor="text-black" name="Next" />
              <div className="cursor-pointer hover:bg-transparent border-[1px] rounded-full py-2 px-8 mt-4 flex flex-row gap-x-2 items-center justify-center w-[260px]">
                <p className="text-[#1A8CD8] text-sm">Sign in</p>
              </div>
            </div>

            <p className="mt-8">
              Don&apos;t have an account?{" "}
              <Link
                className="text-[#1A8CD8] cursor-pointer hover:underline"
                href="/home"
              >
                Sign up
              </Link>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
