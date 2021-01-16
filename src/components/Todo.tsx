import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type todoConfig = {
  data: any[];
  isComplete: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "800px",
  },
  text: {
    width: 400,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    //fontWeight: theme.typography.fontWeightRegular,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  itemSpacing: {
    marginTop: theme.spacing(1.4),
    //pl: 4,
    //marginLeft: theme.spacing(1),
    align: "left",
  },
  strikethrough: {
    textDecoration: "line-through",
    color: "red",
  },
}));
const defaultProps = {
  width: 700,
  bgcolor: "background.paper",
  m: 1,
  textAlign: "left",
  alignItems: "justify",
  //style: { width: '5rem', height: '5rem' },
  borderColor: "text.primary",
};

export default function Todo(props: todoConfig) {
  const classes = useStyles();
  const [todos, setTodos] = useState(props.data);

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const todo = todos.find((todo) => Number(todo.id) === Number(id));

    if (todo) {
      console.log(`Todo for id ${id} is  ${todo.completed}`);
      todo.completed = !todo.completed;
    }

    setTodos([...todos]);
  };

  return (
    <div className={classes.root}>
      <div>
        {props.data.map((todo: any) => (
          <Accordion key={todo.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={clsx(classes.heading, {
                  [classes.strikethrough]: todo.completed && props.isComplete,
                })}
              >
                {todo.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box display="flex">
                <Box border={1} {...defaultProps}>
                  <Grid container spacing={1}>
                    <Grid
                      item
                      xs={9}
                      className={clsx(classes.itemSpacing, {
                        [classes.strikethrough]:
                          todo.completed && props.isComplete,
                      })}
                    >
                      &nbsp;{todo.description}
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={todo.completed}
                            onChange={(
                              evt: React.ChangeEvent<HTMLInputElement>
                            ) => handleChange(evt, todo.id)}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Completed"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
