import { connect } from "@/utils/dbConfig";
import Booking from "@/models/bookingModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { id, pid } = await req.json();
    await Booking.updateOne({ id: id }, { status: "Booked" });

    return NextResponse.json({ message: "Service accepted successfully" });
  } catch {
    return NextResponse.error();
  }
}
