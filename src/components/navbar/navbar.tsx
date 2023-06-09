import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavItems } from "@/config/constants";
import CloseIcon from '@mui/icons-material/Close';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
        <Box onClick={()=>router.push('/')} sx={{display: 'flex', alignItems:'center', gap:'5px', cursor:'pointer'}}>
          <CatchingPokemonIcon />
          <Typography>
            Sammi
          </Typography>
        </Box>
        <CloseIcon sx={{my:2,}} />
      </Box>

      <Divider />
      <List>
        {NavItems.map((item) => (
          <ListItem key={item.route} onClick={()=> router.push(item.route)} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar  sx={{ backgroundColor:'#141414'}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box onClick={()=>router.push('/')} sx={{ cursor:'pointer', alignItems:'center', gap:'5px',  flexGrow: 1, display: { xs: "none", sm: "flex" }}}>
          <CatchingPokemonIcon />
          <Typography variant="h6" component='div'>
            Sammi
          </Typography>
        </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {NavItems.map((item) => (
              <Button onClick={()=> router.push(item.route)} key={item.route} sx={{ color: "#fff" }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
