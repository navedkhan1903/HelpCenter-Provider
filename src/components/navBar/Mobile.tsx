import NavItem from "./NavItem";
import { motion } from "framer-motion";

export default function Mobile() {
  return (
    <motion.div
      initial={{ y: "-25px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ y: "-25px", opacity: 0 }}
    >
      <div className="mt-10 flex flex-col gap-6">
        <NavItem title="About Us" href="/about-us" />
        <NavItem title="Services" href="/services" />
        <NavItem title="Sell your services" href="/sell-services" />
      </div>
    </motion.div>
  );
}
