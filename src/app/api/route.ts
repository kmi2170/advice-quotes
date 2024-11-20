"use server";

import { NextResponse } from "next/server";
import { getFetchFn } from "../../api/lib/getFetchFn";
import { ApiCategoryType } from "../../api/types";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url as string);
    const searchParams = url.searchParams;
    const type = searchParams.get("type") as ApiCategoryType;

    const fetchFn = getFetchFn(type);

    console.log(fetchFn);
    const data = await fetchFn();
    console.log(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
