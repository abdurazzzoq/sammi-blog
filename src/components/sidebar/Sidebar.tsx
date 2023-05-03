import { NavItems } from "@/config/constants";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

import { Fragment } from "react";

const Sidebar = () => {
  return (
    <>
      <Box width={"30%"}>
        <Box position={'sticky'} top={'100px'} sx={{transition:'all .03 ease'}}>
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Latest blog</Typography>

          <Box
            sx={{ display: "flex", marginTop: "10px", flexDirection: "column" }}
          >
            {data.map((item) => (
              <Box
                key={item.title}
                marginTop={'20px'}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Image
                    alt={item.image}
                    src={item.image}
                    width={100}
                    height={100}
                  />
          

                <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                  <Typography>{item.title}</Typography>


                  <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                   
                  }}
                >
                  <Avatar alt={item.author.name} src={item.author.image} />
                  <Box>
                    <Typography variant="body2">{item.author.name}</Typography>
                    <Box sx={{opacity:'.5'}}>{format(new Date(), "dd MMM, yyyy")}</Box>
                  </Box>
                </Box>
                </Box>

              </Box>
                <Divider sx={{marginTop:'20px'}} />
              </Box>
            ))}
          </Box>
        </Box>



        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}  mt={'20px'}>
          <Typography variant="h5">Category</Typography>

          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {NavItems.map((nav) => (
              <Fragment key={nav.route}>
                <Button
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {nav.label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>

       
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];
