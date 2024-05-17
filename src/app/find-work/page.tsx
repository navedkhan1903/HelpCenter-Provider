import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import Client from "@/components/find-work/Client";
import { Toaster } from "react-hot-toast";

export default function FindWork() {
  return (
    <>
      <Toaster containerStyle={{ top: 75 }} />
      <Session status="authenticated" path="/login">
        <Wrapper
          title="Find Work"
          subTitle="Unlock Opportunities in Your Neighborhood! Enter Your Pincode, Discover Available Services, and Start Working Today!"
        >
          <div className="mx-auto">
            <Client />
          </div>
        </Wrapper>
      </Session>
    </>
  );
}
