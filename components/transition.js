import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Transition({ children }) {
  const { asPath } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
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
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
