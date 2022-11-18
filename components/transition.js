import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Transition({ children }) {
  const { asPath } = useRouter();
  // const variants = {
  //   out: {
  //     opacity: 0,
  //     y: 20,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   in: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.3,
  //       delay: 0.1,
  //       type: 'easeInOut'
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     x: 0,
  //     y: 20,
  //   },
  // };

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    in: { opacity: 1, x: 0, y: 0 },
    out: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <div className="effect-1">
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          key={asPath}
          initial="hidden"
          variants={variants}
          animate="in"
          exit="out"
          transition={{ duration: 0.3, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
