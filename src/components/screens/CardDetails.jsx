import React from "react";

import { Typography, Grid, Card, useMediaQuery } from "@material-ui/core";

import image1 from "../../img/imageCard.jpg";
import image2 from "../../img/imageCard2.png";

function CardDetails({ classes }) {
  return (
    <Grid container style={{ margin: "3rem 0rem" }}>
      <Grid container item xs={12} justify="center">
        <Typography variant="h4"> OUR TEAMS ARE HERE</Typography>
      </Grid>

      <Grid container item xs={12} justify="center">
        <Grid container item xs={10} sm={10} md={8} lg={6}>
          <Typography variant="subtitle1" align="center">
            {" "}
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="space-around"
        style={{ marginTop: "3rem" }}
      >
        <Grid container item xs={12} sm={12} md={6} lg={3} justify="center">
          <Card>
            <img src={image1} alt="card" className={classes.cardImg} />
            <Typography
              align="center"
              variant="h5"
              className={classes.cardTitle}
            >
              Hugo silva
            </Typography>

            <Typography
              align="center"
              variant="subtitle1"
              className={classes.cardDetails}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Typography>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={3} justify="center">
          <Card>
            <img src={image2} alt="card" className={classes.cardImg} />
            <Typography
              align="center"
              variant="h5"
              className={classes.cardTitle}
            >
              Hugo silva
            </Typography>

            <Typography
              align="center"
              variant="subtitle1"
              className={classes.cardDetails}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Typography>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={3} justify="center">
          <Card>
            <img src={image1} alt="card" className={classes.cardImg} />
            <Typography
              align="center"
              variant="h5"
              className={classes.cardTitle}
            >
              Hugo silva
            </Typography>

            <Typography
              align="center"
              variant="subtitle1"
              className={classes.cardDetails}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardDetails;
