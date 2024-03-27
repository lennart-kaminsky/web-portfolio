import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
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
