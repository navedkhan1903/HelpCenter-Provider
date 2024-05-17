import axios from "axios";
import { useState } from "react";
import { auth } from "@/utils/firebase";
import { CgSpinner } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import toast from "react-hot-toast";

export default function WorkCard({ data }: { data: any }) {
  const [loading, setLoading] = useState(false);

  async function acceptBooking(id: string) {
    setLoading(true);
    try {
      await axios.post("/api/acceptBooking", {
        id: id,
        pid: auth.currentUser?.uid,
      });
      toast.success("Service accepted successfully");
    } catch (err: any) {
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div className="h-full w-full rounded-3xl border border-lightGray p-7">
      <p className="mb-2 text-xl font-semibold">{data.service}</p>
      <div className="flex gap-2 border-b-[1px] border-dashed border-gray pb-7 text-xs font-medium">
        <div className="flex items-center gap-2 rounded-full border border-lightGray bg-primaryLight px-2 py-1">
          <FaRegClock />
          {data.slot}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-lightGray bg-primaryLight px-2 py-1">
          <IoCalendarClearOutline />
          {new Date(data.date).toLocaleDateString()}
        </div>
      </div>
      <p className="mt-7 text-xs font-medium text-gray">
        {data.address.phone}
        {data.address.altPhone && ", " + data.address.altPhone}
      </p>
      <p className="text-sm font-semibold">
        {data.address.address}, {data.address.locality}, {data.address.city},{" "}
        {data.address.state}, {data.address.pincode}
      </p>
      <div className="flex gap-7">
        <button className="mt-7 w-full rounded-md border border-dashed border-red-700 bg-red-100 px-6 py-3 text-center text-sm font-semibold text-red-700 duration-200 hover:bg-red-200">
          Deny
        </button>
        {loading ? (
          <button className="mt-7 flex w-full justify-center rounded-md border border-dashed border-green-700 bg-green-100 px-6 py-3 text-center text-sm font-semibold text-green-700 duration-200 hover:bg-green-200">
            <CgSpinner size={20} className="animate-spin" />
          </button>
        ) : (
          <button
            onClick={() => acceptBooking(data.id)}
            className="mt-7 w-full rounded-md border border-dashed border-green-700 bg-green-100 px-6 py-3 text-center text-sm font-semibold text-green-700 duration-200 hover:bg-green-200"
          >
            Accept
          </button>
        )}
      </div>
    </div>
  );
}
