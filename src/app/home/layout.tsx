import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home / X",
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
