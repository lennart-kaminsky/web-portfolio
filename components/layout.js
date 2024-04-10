import { motion } from "framer-motion";
import Background from "@/components/background";
import Header from "@/components/header";

export default function Layout({ children }) {
  return (
    <>
      <Background />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {children}
      </motion.main>
    </>
  );
}
