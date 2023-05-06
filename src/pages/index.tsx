import Head from "next/head";
import { Content, Hero, Siderbar } from "@/components";
import Layout from "@/layout/layout";
import { Box } from "@mui/material";

import { BlogService } from "@/services/blog.servic";
import { GetServerSideProps } from "next";
import { BlogsType } from "@/interfaces/blogs.interface";
import { GetCategories } from "@/interfaces/categories.interface";


const IndexPage = ({ blogs, sidebar, category }: HomeProps) => {
  console.log(blogs);

  return (
    <Layout>
      <Hero blogs={blogs.slice(0, 3)}/>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
        }}
      >
        <Siderbar sidebar={sidebar}  category={category}/>
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const blogs = await BlogService.getAllBlogs();
  const sidebar = await BlogService.getLatestBlog();
  const category = await BlogService.getCategories();
  return {
    props: {
      blogs,
      sidebar,
      category,
    },
  };
};

interface HomeProps {
  blogs: BlogsType[];
  sidebar: BlogsType[];
  category: GetCategories[];
}
