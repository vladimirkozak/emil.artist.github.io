import { motion } from "framer-motion";

const MotionLi = ({ children, indx }) => {
  return (
    <motion.li
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 + indx / 18,
      }}
      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
    >
      {children}
    </motion.li>
  );
};

export default MotionLi;
