import { ContactLayout } from "@/components/contact/ContactLayout";

export const metadata = {
  title: "Contact Us | EasyMsgSender",
  description: "Get in touch with the EasyMsgSender team. We are here to help you automate your messaging and drive massive growth.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full">
      <ContactLayout />
    </main>
  );
}
