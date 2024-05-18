import { connect } from "@/utils/dbConfig";
import Booking from "@/models/bookingModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await connect();
    return NextResponse.json(
      await Booking.find({
        "address.pincode": context.params.id,
        status: "Initiated",
      }),
    );
  } catch (err: any) {
    return NextResponse.error();
  }
}
