import type { Metadata } from "next";
import MenuPage from "./MenuPage";

export const metadata: Metadata = {
  title: "お品書き | 炉ばた 浜",
  description:
    "炉ばた浜のお品書き。備長炭で焼き上げる炉端焼き、新鮮なお刺身、一品料理、各種お飲み物。16時〜18時はハッピーアワー。",
};

export default function Page() {
  return <MenuPage />;
}
