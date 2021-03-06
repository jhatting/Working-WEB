import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/newbanner-2.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <br></br>
            <h2>What inspires us to burn wood?</h2>
            <h4>Fire is more that just wood and flame. Fire has the power to unite, change and comfort us.
               There is a magical component to fire. It can make you fall in love, reminisce on special
                memories and feel inspired, all at the same time. You can sit in front of a fire for hours,
                 hypnotized by its forgiving flame content, of just being. One cannot describe the effect 
                 fire has on a basic human emotion in one word. It is one of the few basic human experiences 
                 that every person on the planet needs to experience. In some way or another it will change you, 
                 it will reconnect you on a much deeper level with yourself and others. For that basic principle 
                 we created this company with the intention of bringing you closer to nature the natural way whether 
                 you are cooking, staying warm or just wanting the experience.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
          
          
        </div>
      </div>
    </div>
  );
}
