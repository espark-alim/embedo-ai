"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "url(/images/org.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={1}
        sx={{ height: "90%", maxHeight: "900px" }}
        justifyContent={"space-between"}
        textAlign={"center"}
      >
        <Stack spacing={2} pt={8} px={2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 500,
                textShadow: `
                  0px -1px 15px #74c2cc,
                  0px 0px 0px rgba(116,194,204,0.8),
                  0px 0px 0px rgba(116,194,204,0.6)
                `,
              }}
            >
              Coming Soon
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="h5"
              color="white"
              maxWidth={{ xs: 450, md: 560 }}
              mx="auto"
            >
              AI-powered embedded design intelligence for the future of hardware
              development.
            </Typography>
          </motion.div>
        </Stack>

        <Stack>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography variant="h4" color="white">
              Contact Us
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Typography variant="body1" color="white">
              <Link
                href="mailto:info@embedo.ai"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                info@embedo.ai
              </Link>
            </Typography>
          </motion.div>
        </Stack>
      </Stack>
    </Box>
  );
}
