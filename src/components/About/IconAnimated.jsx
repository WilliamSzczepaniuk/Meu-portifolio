import { motion } from "framer-motion";

export const IconAnimated = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.8, scale: 1.2 }}
      transition={{ duration: 2.5 }}
      style={{
        margin: "0px 20px 0px 20px",
        borderRadius: 120,
        minWidth: "60px",
        minHeight: "60px",
        maxHeight: "200px",
        maxWidth: "180px",
        backgroundImage: `url(${image})`,
        backgroundSize: "104%",
      }}
      drag
      dragConstraints={{ left: -60, top: 50, right: 10, bottom: 10 }}
    />
  );
};
