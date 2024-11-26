import { IconType } from "react-icons";

type XButtonProp = {
  name: string;
  bgColor: string;
  textColor: string;
  icon?: IconType;
};

export default function XButton({
  name,
  bgColor,
  textColor,
  icon: Icon,
}: XButtonProp) {
  return (
    <div
      className={`${bgColor} rounded-full py-2 px-8  flex flex-row gap-x-2 items-center justify-center cursor-pointer w-[260px]`}
    >
      {Icon && <Icon color="#000000" size={15} />}
      <p className={`${textColor} text-xs`}>{name}</p>
    </div>
  );
}
