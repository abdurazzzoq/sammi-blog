import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#141414',
        color: "white",
      }}
      borderTop={'1px solid rgba(255, 255, 255, .5)'}
    >
      <Typography>{format(new Date(), "yyyy")}. All rights reserved</Typography>
      <Box
        sx={{display: "flex",gap:"10px",alignItems: "center"}}
      >
        <TelegramIcon sx={{cursor:'pointer'}}/>
        <InstagramIcon sx={{cursor:'pointer'}}/>
        <FacebookIcon sx={{cursor:'pointer'}}/>
      </Box>
    </Box>
  );
};

export default Footer;
