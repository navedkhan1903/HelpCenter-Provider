"use client";

import { useState } from "react";
import WorkCard from "./WorkCard";
import toast from "react-hot-toast";
import Cycle from "@/lotties/Cycle.json";
import { FiMapPin } from "react-icons/fi";
import CustomInput from "@/components/shared/CustomInput";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import LottieWrapper from "@/components/shared/LottieWrapper";

export default function Client() {
  const [loading, setLoading] = useState(false);
  const [work, setWork] = useState([]);
  const [pincode, setPincode] = useState("");

  async function getWork() {
    if (pincode.length != 6) return toast.error("Kindly enter a valid pincode");
    setLoading(true);
    try {
      const res = await fetch(`/api/findWork/${pincode}`).then((res) =>
        res.json(),
      );
      setWork(res.reverse());
      if (res.length === 0) toast.error("No Services available");
      console.log(res);
    } catch (err: any) {
      toast.error(err.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="flex justify-center">
        <CustomInput
          onKeyDown={(event) => {
            if (event.key === "Enter") getWork();
          }}
          onClick={getWork}
          onChange={(e) => setPincode(e.target.value)}
          icon={<FiMapPin />}
          placeholder="Enter Pincode"
          label="Search"
          loading={loading}
        />
      </div>
      {work.length > 0 ? (
        <div className="mt-20 grid grid-cols-1 place-items-center gap-7 md:grid-cols-3 md:place-items-start">
          {work.length > 0 &&
            work.map((item, i) => <WorkCard key={i} data={item} />)}
        </div>
      ) : (
        <>
          <LottieWrapper
            options={{
              loop: true,
              autoplay: true,
              animationData: Cycle,
            }}
            height={300}
            width={300}
          />
          <p className="mx-auto flex w-fit items-center gap-2 rounded-full bg-yellow-50 px-3 py-1 text-center text-sm font-medium text-yellow-700">
            <AiOutlineExclamationCircle />
            Kindly enter a pincode
          </p>
        </>
      )}
    </>
  );
}
