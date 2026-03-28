export function GET() {
  return Response.json({
    name: "炉ばた 浜 HP",
    description:
      "北海道釧路市の備長炭炉端焼き居酒屋「浜」のホームページ。店舗情報・メニュー・アクセスを提供。",
    url: "https://hp-hama.vercel.app",
    provider: {
      organization: "EZOAI",
      url: "https://ezoai.jp",
    },
    version: "1.0.0",
    capabilities: {
      streaming: false,
      pushNotifications: false,
    },
    skills: [
      {
        id: "shop-info",
        name: "店舗情報取得",
        description: "炉ばた浜の営業時間・住所・電話番号等の基本情報を取得",
      },
    ],
  });
}
