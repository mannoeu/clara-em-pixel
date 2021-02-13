import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import { Container } from './styles';

function PortfolioItem({ children, ...rest }) {
  /* ------------------------------------- */
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const itemsPortfolioVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      {...rest}
      initial="hidden"
      ref={ref}
      variants={itemsPortfolioVariants}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default PortfolioItem;
