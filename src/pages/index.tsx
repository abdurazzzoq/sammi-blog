import Head from "next/head";
import { Content, Hero, Siderbar } from "@/components";
import Layout from "@/layout/layout";
import { Box } from "@mui/material";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Box sx={{ display: "flex", gap: '20px',  flexDirection:{xs:'column', md: 'row'} ,padding: "20px" }}>
      <Siderbar />
      <Content />
    </Box>
  </Layout>
);

export default IndexPage;
