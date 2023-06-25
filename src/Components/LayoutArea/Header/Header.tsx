import "./Header.css";
import logo from "../../../Assets/Images/resources/logo.png"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { SyntheticEvent, useEffect } from "react";
import { styled } from "@mui/system";
import { redirect, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const navItems = [{ display: 'צור קשר', value: "contact" }, { display: 'העבודות שלנו', value: "portfolio" }, { display: 'שירותים', value: "services" }, { display: 'קצת עלינו', value: "about" }, { display: 'בית', value: "home" }];

const styles = {
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        margin: '15px auto',
    },
    appBar: {
        backgroundColor: '#270B55',
    }
}

const ContactButton = styled(Button)({
    transition: 'all 0.3s',
    color: 'white',
    backgroundColor: "#E95A9C",
    padding: "10px 30px",
    borderRadius: "30px",
    '&:hover': {
        backgroundColor: "white",
        color: "#E95A9C",
        boxShadow: '0px 0px 1px 3px white',
        //fade in transition
        transition: 'all 0.3s',
    }
})

const NavigationButton = styled(Button)({
    transition: "300ms",
    fontSize: "18px",
    '&:hover': {
        transition: "300ms",
        color: "#E95A9C"
    }
})

export default function Header() {
    const location = useLocation()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(()=>{
        console.log("location changed ->",location.pathname)
        toggleActive(location.pathname)
    },[location])

    function toggleActive(id:string){
        //document.querySelectorAll(".active-tab").forEach((element)=>element.classList.remove("active-tab"))
        let element = document.getElementById(id.substring(1))
        if (element){
            console.log(element)
            element.classList.add("active-tab")
        }
    }

    function navigateTo(path:string, event?:SyntheticEvent){
        navigate(path)
        document.querySelectorAll(".active-tab").forEach((element)=>element.classList.remove("active-tab"))
        if (event){
            (event.target as HTMLButtonElement).classList.add("active-tab")
        }
    }


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img onClick={()=>navigateTo("/home")} src={logo} alt="logo" />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem  key={item.display} disablePadding>
                        <ListItemButton className={item.value} sx={{ textAlign: 'center' }}>
                            <ListItemText onClick={(e)=>navigateTo(item.value,e)} primary={item.display} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = document.body;

    return (
        <Box className="Header" sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={styles.appBar} elevation={0}>
                <Toolbar sx={styles.toolBar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <img src={logo} style={{cursor:"pointer"}} onClick={()=>navigateTo("/home")} alt="a pink logo of webies media" width="200px" />
                    </Box>
                    <Box sx={{ whiteSpace:"nowrap" ,display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <NavigationButton disableRipple onClick={(e)=>navigateTo(item.value, e)} key={item.display} sx={{ color: '#fff' }}>
                                {item.display}
                            </NavigationButton>
                        ))}
                    </Box>
                    <ContactButton onClick={()=>navigateTo("contact")} sx={{ display: { xs: 'none', sm: 'flex' } }} variant="contained" href="#contained-buttons" endIcon={<ArrowForwardIosIcon />}>
                        <b>בואו נדבר</b>
                    </ContactButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

