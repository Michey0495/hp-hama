const SHOP_INFO = {
  name: "炉ばた 浜",
  nameEn: "ROBATA HAMA",
  address: "北海道釧路市北大通13-1",
  phone: "0154-64-6544",
  hours: "16:00〜23:00（L.O. 22:30）",
  closedDays: "不定休",
  priceRange: "¥4,000〜¥5,000",
  nearestStation: "JR釧路駅 徒歩約5分",
  features: [
    "備長炭炉端焼き",
    "釧路産新鮮魚介",
    "ハッピーアワー 16:00〜18:00",
    "カウンター席あり",
    "全席喫煙可",
  ],
  menu: {
    robata: ["本日の焼き魚", "ホッケ開き", "ホタテバター焼き", "イカ丸焼き", "サンマ塩焼き", "エビ串"],
    sashimi: ["本日の刺身盛り合わせ", "ホタテ刺身", "サーモン刺身"],
    ippin: ["枝豆", "冷奴", "ポテトサラダ", "漬物盛り合わせ"],
    drinks: ["生ビール", "日本酒（地酒各種）", "焼酎", "ハイボール", "サワー各種", "ソフトドリンク"],
  },
};

export async function GET() {
  return Response.json({
    jsonrpc: "2.0",
    result: {
      name: "robata-hama-mcp",
      version: "1.0.0",
      description: "炉ばた 浜 の店舗情報を提供する MCP サーバー",
      tools: [
        {
          name: "get_shop_info",
          description: "炉ばた浜の基本情報（住所・電話・営業時間等）を返します",
        },
        {
          name: "get_menu",
          description: "炉ばた浜のメニュー情報を返します",
        },
      ],
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { method, params, id } = body;

  if (method === "tools/call") {
    const toolName = params?.name;

    if (toolName === "get_shop_info") {
      const { menu: _, ...info } = SHOP_INFO;
      return Response.json({
        jsonrpc: "2.0",
        id,
        result: { content: [{ type: "text", text: JSON.stringify(info, null, 2) }] },
      });
    }

    if (toolName === "get_menu") {
      return Response.json({
        jsonrpc: "2.0",
        id,
        result: { content: [{ type: "text", text: JSON.stringify(SHOP_INFO.menu, null, 2) }] },
      });
    }

    return Response.json({
      jsonrpc: "2.0",
      id,
      error: { code: -32601, message: "Tool not found" },
    });
  }

  if (method === "tools/list") {
    return Response.json({
      jsonrpc: "2.0",
      id,
      result: {
        tools: [
          {
            name: "get_shop_info",
            description: "炉ばた浜の基本情報（住所・電話・営業時間等）を返します",
            inputSchema: { type: "object", properties: {} },
          },
          {
            name: "get_menu",
            description: "炉ばた浜のメニュー情報を返します",
            inputSchema: { type: "object", properties: {} },
          },
        ],
      },
    });
  }

  return Response.json({
    jsonrpc: "2.0",
    id,
    error: { code: -32601, message: "Method not found" },
  });
}
