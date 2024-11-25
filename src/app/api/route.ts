"use server";

import { NextRequest, NextResponse } from "next/server";
import { getFetchFn } from "../../api/lib/getFetchFn";
import { ApiNameType } from "../../api/types";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
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
