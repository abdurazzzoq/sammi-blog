import { BlogsType } from "@/interfaces/blogs.interface";
import { GetCategories } from "@/interfaces/categories.interface";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          slug
          createdAt
          title

          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
          image {
            url
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getLatestBlog() {
    const query = gql`
      query GetLatestBlog {
        blogs(last: 2) {
          id
          slug
          createdAt
          title
          image {
            url
          }
          description {
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          label
          slug
        }
      }
    `;
    const result = await request<{ categories: GetCategories[] }>(
      graphqlAPI,
      query
    );
    return result.categories;
  },
  async getDetailedBlog(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          excerpt
          id
          slug
          createdAt
          title
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
            html
          }
          image {
            url
          }
        }
      }
    `;

    const result = await request<{ blog: BlogsType[] }>(graphqlAPI, query, {
      slug,
    });
    return result.blog;
  },

  async getDetailedCategoryPage(slug: string) {
    const query = gql`
      query getCategoriesBlog($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          excerpt
          id
          slug
          createdAt
          title

          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
          image {
            url
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, { slug });
    return result.blogs;
  },
};
