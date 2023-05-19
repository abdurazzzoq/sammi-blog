import { Content, Siderbar } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { GetCategories } from "@/interfaces/categories.interface";
import Layout from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogService } from "@/services/blog.servic";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

const DetailedCategoryPage = ({
  blog,
  sidebar,
  category,
}: GetDetailedCategoryPage) => {
  const router = useRouter()
  return (
    <SEO metaTitle={`${router.query.slug}-category`}>

    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
        }}
        mt={{xs:"9vh", md: ''}}
      >
        <Siderbar sidebar={sidebar} category={category} />
        <Content blogs={blog} />
      </Box>
    </Layout>
    </SEO>
  );
};

export default DetailedCategoryPage;

export const getServerSideProps: GetServerSideProps<
  GetDetailedCategoryPage
> = async ({ query }) => {
  const blog = await BlogService.getDetailedCategoryPage(query.slug as string);
  const sidebar = await BlogService.getLatestBlog();
  const category = await BlogService.getCategories();
  return {
    props: {
      blog,
      sidebar,
      category,
    },
  };
};

interface GetDetailedCategoryPage {
  blog: BlogsType[];
  sidebar: BlogsType[];
  category: GetCategories[];
}
