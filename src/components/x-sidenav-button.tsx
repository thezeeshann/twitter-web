import { IconType } from "react-icons";

type XSidenavButtonProp = {
  name: string;
  icon?: IconType;
};

export default function XSidenavButton({
  name,
  icon: Icon,
}: XSidenavButtonProp) {
  return (
    <div className="flex flex-row items-center gap-x-3 w-max hover:cursor-pointer">
      {Icon && <Icon  size={25} />}
      <p className="font-semibold">{name}</p>
    </div>
  );
}
