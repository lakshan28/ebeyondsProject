import React from "react";
import { Link } from "react-router-dom";

import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Typography,
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => setMobileMoreAnchorEl(false)}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <Link exact to="/home" className={classes.navLinkSmall}>
          HOME
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <AccountCircle />
        </IconButton>
        <Link exact to="/about" className={classes.navLinkSmall}>
          ABOUT
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <Link exact to="/services" className={classes.navLinkSmall}>
          SERVICES
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <AccountCircle />
        </IconButton>
        <Link exact to="/testimnils" className={classes.navLinkSmall}>
          TESTIMONIALS
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <Link exact to="/portfilo" className={classes.navLinkSmall}>
          PORTFOLIO
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Link exact to="/contacts" className={classes.navLinkSmall}>
          CONTACTS
        </Link>
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
                <Link to="/home" className={classes.navLink}>
                  HOME
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link exact to="/about" className={classes.navLink}>
                  ABOUT
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link exact to="/services" className={classes.navLink}>
                  SERVICES
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link
                  onClick={() => setMobileMoreAnchorEl(null)}
                  exact
                  to="/testimnils"
                  className={classes.navLink}
                >
                  TESTIMONIALS
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link exact to="/portfilo" className={classes.navLink}>
                  PORTFOLIO
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link exact to="/contacts" className={classes.navLink}>
                  CONTACTS
                </Link>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.sectionMobile}
            >
              <div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
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
