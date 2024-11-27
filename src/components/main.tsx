import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Main() {
  return (
    <section className="">
      <ScrollArea className="w-full h-screen ">
        <div className="p-4">
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </section>
  );
}
