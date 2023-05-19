import { BlogsType } from "@/interfaces/blogs.interface";
import { GetCategories } from "@/interfaces/categories.interface";
import Layout from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogService } from "@/services/blog.servic";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ category }: GetCategory) => {

  const router = useRouter()
  return (
    <SEO metaTitle="All Categories">
    <Layout>
      <Box
      mt={'80px'}
       marginX={'auto'}
      width={{ xs: "100%", md: "80%" }}
        height={{ xs: "30vh", md: "50vh" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          flexDirection:"column",
          rowGap:'10px'
        }}
      >
        <Typography variant="h3">All Categories</Typography>

        <ButtonGroup variant="outlined" aria-label="outlined button group">

          {category.map(item=>(

  <Button onClick={()=> router.push(`/category/${item.slug}`)} key={item.slug}># {item.label}</Button>
          ))}
</ButtonGroup>
      </Box>
    </Layout>
    </SEO>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<GetCategory> = async () => {
  const category = await BlogService.getCategories();
  return {
    props: { category },
  };
};  

interface GetCategory {
  category: GetCategories[];
}
