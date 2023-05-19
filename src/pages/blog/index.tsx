import { Content } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import Layout from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogService } from "@/services/blog.servic";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

const Blogpage = ({ blog }: BlogPage) => {
  return (
    <SEO metaTitle="All Blogs">
    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
          justifyContent:'center'
        }}>

      <Content blogs={blog} />
        </Box>
    </Layout>
    </SEO>
  );
};

export default Blogpage;

export const getServerSideProps: GetServerSideProps<BlogPage> = async () => {
  const blog = await BlogService.getAllBlogs();
  return {
    props: { blog },
  };
};
interface BlogPage {
  blog: BlogsType[];
}
