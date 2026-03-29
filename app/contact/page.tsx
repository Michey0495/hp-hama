import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "お問い合わせ | 炉ばた 浜",
  description:
    "炉ばた浜へのお問い合わせ・ご予約はお電話にて。TEL: 0154-64-6544。北海道釧路市北大通13-1。",
};

export default function Page() {
  return <ContactPage />;
}
