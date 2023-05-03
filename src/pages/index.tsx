import Head from "next/head";
import { Button, Box } from "@mui/material";
import { Hero, Navbar } from "@/components";
import Layout from "@/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
