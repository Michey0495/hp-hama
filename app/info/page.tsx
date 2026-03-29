import type { Metadata } from "next";
import InfoPage from "./InfoPage";

export const metadata: Metadata = {
  title: "店舗情報 | 炉ばた 浜",
  description:
    "炉ばた浜の店舗情報。北海道釧路市北大通13-1。JR釧路駅から徒歩約5分。16:00〜23:00営業。カウンター席あり。",
};

export default function Page() {
  return <InfoPage />;
}
