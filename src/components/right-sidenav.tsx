// import { CiSearch } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";

const footerData = [
  {
    id: 1,
    name: "Terms of Service",
  },
  {
    id: 2,
    name: "Privacy Policy",
  },
  {
    id: 3,
    name: "Cookie Policy",
  },
  {
    id: 4,
    name: "Accessibility",
  },
  {
    id: 5,
    name: "Ads info",
  },
  {
    id: 7,
    name: "More...",
  },
  {
    id: 7,
    name: "© 2024 X Corp.",
  },
];

export default function RightSideNav() {
  return (
    <section className="mt-4 mb-10">
      {/* <input type="text" placeholder="Search" />
      <CiSearch /> */}

      <div className="p-3 border-[1px] border-[#2F3336] rounded-xl">
        <p className="font-bold">What’s happening</p>
        <div className="mt-5 flex flex-col gap-y-4">
          <div className="">
            <div className="flex flex-row items-center justify-between">
              <p className="text-[#71767B] text-[10px]">Politics · Trending</p>
              <HiDotsHorizontal
                color="#71767B"
                className="hover:cursor-pointer "
              />
            </div>
            <p className="font-semibold text-xs">#IslamabadMassacre</p>
            <p className="text-[#71767B] text-xs">23.3K posts</p>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-between">
              <p className="text-[#71767B] text-[10px]">Cricket · Trending</p>
              <HiDotsHorizontal
                color="#71767B"
                className="hover:cursor-pointer "
              />
            </div>
            <p className="font-semibold text-xs">#PrithviShaw</p>
            <p className="text-[#71767B] text-[10px]">3,487 posts</p>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-between">
              <p className="text-[#71767B] text-xs">Politics · Trending</p>
              <HiDotsHorizontal
                color="#71767B"
                className="hover:cursor-pointer "
              />
            </div>
            <p className="font-semibold text-[10px]">#IslamabadMassacre</p>
            <p className="text-[#71767B] text-xs">23.3K posts</p>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-between">
              <p className="text-[#71767B] text-xs">Politics · Trending</p>
              <HiDotsHorizontal
                color="#71767B"
                className="hover:cursor-pointer "
              />
            </div>
            <p className="font-semibold text-[10px]">#IslamabadMassacre</p>
            <p className="text-[#71767B] text-xs">23.3K posts</p>
          </div>
          <p className="cursor-pointer text-[#1A8CD8] mt-3 text-sm">
            Show more
          </p>
        </div>
      </div>

      <div className="p-3 border-[1px] border-[#2F3336] rounded-xl mt-3">
        <p className="font-bold">Who to follow</p>

        <div className="flex flex-row items-center justify-between mt-4">
          <div className="flex flex-row items-center gap-x-2">
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
          <button className="bg-white rounded-full py-1 px-4 text-black text-xs">
            Follow
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mt-4">
          <div className="flex flex-row items-center gap-x-2">
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
          <button className="bg-white rounded-full py-1 px-4 text-black text-xs">
            Follow
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mt-4">
          <div className="flex flex-row items-center gap-x-2">
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
          <button className="bg-white rounded-full py-1 px-4 text-black text-xs">
            Follow
          </button>
        </div>
        <p className="cursor-pointer text-[#1A8CD8] mt-3 text-sm">Show more</p>
      </div>

      <div className="mt-3 flex flex-wrap flex-row gap-x-3">
        {footerData.map((data) => (
          <p
            className="text-[10px] hover:underline text-[#71767B] cursor-pointer"
            key={data.id}
          >
            {data.name}
          </p>
        ))}
      </div>
    </section>
  );
}
