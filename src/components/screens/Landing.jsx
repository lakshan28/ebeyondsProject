import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Fab,
  Zoom,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

import book from "../../img/background.jpg";
import grils from "../../img/background.jpg";
import team from "../../img/background.jpg";
import back from "../../img/background.jpg";

import CardDetails from "./CardDetails";
import Footer from "./Footer";

import { useStyles } from "../../styles/styles";

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.5rem",
  },
};
theme.typography.h2 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
};
theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.goToTop}
      >
        {children}
      </div>
    </Zoom>
  );
}

function Landing(props) {
  const classes = useStyles();

  const getUseTheme = useTheme();
  const matches = useMediaQuery(getUseTheme.breakpoints.up("sm"));

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>HOME</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>ABOUT</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>SERVICES</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>TESTIMONIALS</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>PORTFOLIO</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>CONTACTS</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Grid
              container
              justify="flex-start"
              className={classes.sectionDesktop}
            >
              <Grid item xs={1}>
                HOME
              </Grid>
              <Grid item xs={1}>
                ABOUT
              </Grid>
              <Grid item xs={1}>
                SERVICES
              </Grid>
              <Grid item xs={1}>
                TESTIMONIALS
              </Grid>
              <Grid item xs={1}>
                PORTFOLIO
              </Grid>
              <Grid item xs={1}>
                CONTACTS
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.sectionMobile}
            >
              <div>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                  {renderMobileMenu}
                </IconButton>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <div className={classes.backContainer}>
          <Grid container style={{ height: "90%" }}>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{
                marginTop: matches ? "2rem" : "-15rem",
                marginBottom: matches ? "0rem" : "0rem",
              }}
              justify="flex-end"
              alignItems="flex-end"
            >
              <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.mainLandingContainer}
              >
                <Typography variant="h4" style={{ color: "#fff" }}>
                  WELCOME TO
                </Typography>
                <br />
                <Typography variant="h4" style={{ color: "#D35400" }}>
                  EBEYONDS
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <CardDetails classes={classes} />

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Landing;
