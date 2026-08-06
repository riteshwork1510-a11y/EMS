import { ResourceHub } from "@/components/resources/ResourceHub";

export const metadata = {
  title: "Resources & Guides | EasyMsgSender",
  description: "Explore our collection of expert insights, success stories, and tutorials to help you scale your business with WhatsApp marketing.",
};

export default function ResourcesPage() {
  return (
    <main className="flex flex-col w-full">
      <ResourceHub />
    </main>
  );
}
