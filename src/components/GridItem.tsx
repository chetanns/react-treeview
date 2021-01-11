import {
  Checkbox,
  createStyles,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "right",
      color: theme.palette.text.secondary,
    },
    formControl: {
      margin: theme.spacing(1),
      marginLeft: 500,
      marginRight: -20,
    },
    itemSpacing: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(0),
    },
    strikethrough: {
      marginTop: theme.spacing(2),
      textDecoration: "line-through",
      color: "red",
    },
  })
);

const GridItem = () => {
  const classes = useStyles();
  const [completed, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted(!completed);
    // if (completed) {
    //   setCompleted(false);
    // } else {
    //   setCompleted(true);
    // }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6}
          className={clsx(classes.itemSpacing, {
            [classes.strikethrough]: completed,
          })}
        >
          Testing2
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Completed"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default GridItem;
