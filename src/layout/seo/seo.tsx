import Head from "next/head";
import React from "react";
import { SeoProps } from "./seo.props";
import { siteConfig } from "@/config/site.config";

const SEO = ({
  children,
  metaTitle = siteConfig.metaTitle,
  metaDescription = siteConfig.metaDescription,
  metaKeywords = siteConfig.metaKeywords,
  author = siteConfig.author,
}: SeoProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <title>{metaTitle}</title>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="keyword" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="description" content={metaDescription} />
      <link rel="shortcut icon" href={"/vercel.svg"} type="image/x-icon" />
    </Head>
    {children}
  </>
);

export default SEO;
