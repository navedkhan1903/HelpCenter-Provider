import Chat from "@/lotties/Chat.json";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import Money from "@/lotties/Money.json";
import { BsBookmark } from "react-icons/bs";
import google from "../../public/google.png";
import Discount from "@/lotties/Discount.json";
import HourGlass from "@/lotties/HourGlass.json";
import facebook from "../../public/facebook.png";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import LottieWrapper from "@/components/shared/LottieWrapper";
import { AiOutlineUser, AiOutlineLogout, AiOutlineBell } from "react-icons/ai";

export const navbarDropdown = [
  { href: "/profile", icon: <AiOutlineUser size={18} />, label: "My Profile" },
  {
    href: "/booked-services",
    icon: <HiOutlineWrenchScrewdriver size={18} />,
    label: "Booked Services",
  },
  { href: "/saved", icon: <BsBookmark size={18} />, label: "Saved Services" },
  {
    href: "/notifications",
    icon: <AiOutlineBell size={18} />,
    label: "Notifications",
  },
  {
    onClick: () => signOut(auth),
    href: "/",
    icon: <AiOutlineLogout size={18} />,
    label: "Sign out",
  },
];

export const socialLogin = [
  {
    src: google,
    alt: "google",
    name: "Google",
  },
  {
    src: facebook,
    alt: "facebook",
    name: "Facebook",
  },
];

export const numbers = [
  {
    title: 100,
    desc: "Services Offered",
    extra: "+",
  },
  {
    title: 2,
    desc: "Active Clients",
    extra: "k+",
  },
  {
    title: 50,
    desc: "Bookings Completed",
    extra: "k+",
  },
  {
    title: 1,
    desc: "Opportunities Monthly",
    extra: "k+",
  },
];

export const features = [
  {
    title: "Consistent Earnings",
    desc: "Your time and effort are valued. We strive to match you with customers consistently, so you can enjoy steady income.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: Money,
        }}
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Scheduling Flexibility",
    desc: "Enjoy the freedom of managing your own schedule while meeting customer demand.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: HourGlass,
        }}
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Partner Perks",
    desc: "Unlock partner-specific perks, including rewards, growth opportunities, and exclusive training resources.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: Discount,
        }}
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Customer Support",
    desc: "Dedicated customer support team available 24/7 to assist you with any questions or concerns you may have.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: Chat,
        }}
        height={150}
        width={150}
      />
    ),
  },
];

export const faq = [
  {
    q: "How do I become a service provider on your platform?",
    a: "To become a service provider, you need to complete an application process, which includes verifying your identity, providing necessary documents, and undergoing a background check. Once approved, you can start offering your services on our platform.",
  },
  {
    q: "How do I manage my availability and schedule?",
    a: "You can manage your availability and schedule through your provider dashboard on our platform. Set your working hours, availability, and accept bookings based on your preferred schedule.",
  },
  {
    q: "How do I receive payments for my services?",
    a: "Payments for services are processed through our secure platform and are typically deposited into your account on a regular schedule, such as weekly or monthly. You can track your earnings and payments in your provider dashboard.",
  },
  {
    q: "What happens if a booking is canceled?",
    a: "If a booking is canceled, you will be notified through the platform. Our cancellation policy outlines any fees or compensation due to you depending on the circumstances and timing of the cancellation. You can review our cancellation policy in your provider dashboard.",
  },
  {
    q: "How can I improve my rating and receive more bookings?",
    a: "Providing excellent service is key to improving your rating and receiving more bookings. Encourage clients to leave feedback and reviews, and respond promptly and professionally to any concerns. Consistently delivering high-quality service will help you earn higher ratings.",
  },
];
