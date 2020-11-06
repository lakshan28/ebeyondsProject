import backgroundImg from "../img/background.jpg";

import {
   
    makeStyles
  } from "@material-ui/core/styles";

  const drawerHight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
  goToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  backContainer: {
    backgroundColor: "#21282a",
    backgroundImage: `url(${backgroundImg})`,
    width: "100%",
    height: drawerHight,
    backgroundSize: "cover",
    backgroundPosition: "center ",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    marginTop: "-1.5rem",
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      height:"60vh",
      
  },
  },
  appbar:{
      backgroundColor:"#707070"
  },
  mainLandingContainer:{
    width: "40rem",
    height: "10rem",
    backgroundColor: "#21282a",
    borderRadius: "1rem",
    marginRight: "2rem",
    opacity: "0.9",
    [theme.breakpoints.down('sm')]: {
      width: "40rem",
    height: "10rem",
    backgroundColor: "#21282a",
    borderRadius: "1rem",
    marginRight: "0rem",
    opacity: "0.9",
      
  },
  },

  cardImg:{
    width: "100%", height: "20rem" 
  },
  cardTitle:{
    marginTop: "1rem"
  },
  cardDetails:{
    marginTop: "1rem", padding: "1rem"
  },

  navLink: {
    textDecoration: "none", color: "#fff"
  },
  navLinkSmall: {
    textDecoration: "none", color: "#000"
  },
  sectionDesktop: {
    
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  imageContainer: {
   
    [theme.breakpoints.down('sm')]: {
        width: "20rem", height: "20rem",
        
    },
    [theme.breakpoints.up('sm')]: {
      width: "30rem", height: "20rem"
  },
    [theme.breakpoints.up('md')]: {
        width: "40rem", height: "30rem"
    },
    [theme.breakpoints.up('lg')]: {
        width: "40rem", height: "30rem"
    },
  },
}));

export {useStyles}