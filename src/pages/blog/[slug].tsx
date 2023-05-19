import { Siderbar } from "@/components";
import { calculateEstimateTimeToRead } from "@/helpers/time.format";
import { BlogsType } from "@/interfaces/blogs.interface";
import { GetCategories } from "@/interfaces/categories.interface";
import Layout from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogService } from "@/services/blog.servic";

import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Detailed = ({ blogs, sidebar, category }: DetailedBlogPage) => {
  return (
  <SEO metaTitle={blogs.title}>
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
        <Box width={{ xs: "100%", md: "70%" }}>
          <Box
            sx={{
              backgroundColor: "black",
              padding: "20px",
              boxShadow: "0 8px 16px rgba(255, 255, 255, .1)",
              borderRadius: "8px",
            }}
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={blogs.image.url}
              alt={blogs.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                mt: "30px",
              }}
            >
              <Avatar alt={blogs.author.name} src={blogs.author.avatar.url} />
              <Box>
                <Typography variant="body2">{blogs.author.name}</Typography>
                <Box color={"gray"} sx={{ opacity: ".5" }}>
                  {format(new Date(blogs.createdAt), "dd MMM, yyyy")} &#x2022;
                  {calculateEstimateTimeToRead(blogs.description.text)} min read
                </Box>
              </Box>
            </Box>

            <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
              {blogs.title}
            </Typography>
            <Typography color={"gray"}>{blogs.excerpt}</Typography>
            <Divider />
            <div
              style={{ opacity: ".8" }}
              dangerouslySetInnerHTML={{ __html: blogs.description.html }}
            />
          </Box>
        </Box>
        <Siderbar sidebar={sidebar} category={category} />
      </Box>
    </Layout>

  </SEO>
  );
};

export default Detailed;

export const getServerSideProps: GetServerSideProps<DetailedBlogPage> = async ({
  query,
}) => {
  const blogs = await BlogService.getDetailedBlog(query.slug as string);
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

interface DetailedBlogPage {
  blogs: BlogsType;
  sidebar: BlogsType[];
  category: GetCategories[];
}
