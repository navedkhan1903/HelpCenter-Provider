import Session from "@/components/shared/Session";
import SignupClient from "@/components/auth/SignupClient";
import AuthContainer from "@/components/auth/AuthContainer";
import ReduxProvider from "@/components/shared/ReduxProvider";

export default function Signup() {
  return (
    <Session status="unauthenticated" path="/">
      <AuthContainer
        label="Register Now!"
        footerText="Already have an account?"
        link="/login"
        footerLabel="Login"
      >
        <ReduxProvider>
          <SignupClient />
        </ReduxProvider>
      </AuthContainer>
    </Session>
  );
}
