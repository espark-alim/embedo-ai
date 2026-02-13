"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1300px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          style={{ display: "flex", alignItems: "center", gap: 5 }}
        >
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <Image src={"/images/chip.png"} alt="logo" width={40} height={40} />
          </motion.div>

          <Typography variant="h4" color="white">
            embedo.ai
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Navbar;
