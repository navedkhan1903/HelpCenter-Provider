import Cycle from "@/lotties/Cycle.json";
import { FiMapPin } from "react-icons/fi";
import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import CustomInput from "@/components/shared/CustomInput";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import LottieWrapper from "@/components/shared/LottieWrapper";

export default function FindWork() {
  return (
    <Session status="authenticated" path="/login">
      <Wrapper
        title="Find Work"
        subTitle="Unlock Opportunities in Your Neighborhood! Enter Your Pincode, Discover Available Services, and Start Working Today!"
      >
        <div className="mx-auto w-max">
          <div className="mx-auto w-max">
            <CustomInput
              icon={<FiMapPin />}
              placeholder="Enter Pincode"
              label="Search"
              loading={false}
            />
          </div>
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
        </div>
      </Wrapper>
    </Session>
  );
}
