"use server";

import { NextResponse } from "next/server";
import { getFetchFn } from "../../api/lib/getFetchFn";
import { ApiNameType } from "../../api/types";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url as string);
    const searchParams = url.searchParams;
    const type = searchParams.get("type") as ApiNameType;

    const fetchFn = getFetchFn(type);

    if (typeof fetchFn === "string") {
      new Error("No Fetch Function Found");
    } else {
      const data = await fetchFn();
      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
