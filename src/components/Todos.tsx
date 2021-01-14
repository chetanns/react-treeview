import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Theme,
  withStyles,
  Box,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import todos from "../resources/data.json";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import clsx from "clsx";

const useStyles = (theme: Theme) => ({
  root: {
    width: "800px",
    marginLeft: 14,
  },
  text: {
    width: 793,
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
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft: 300,
    marginRight: -20,
  },
  itemSpacing: {
    marginTop: theme.spacing(1.5),
    align: "left",
  },
  strikethrough: {
    textDecoration: "line-through",
    color: "red",
  },
});

interface TodoProps {
  data: any[];
  isComplete: boolean;
  classes: any;
}

interface TodoState {
  open: boolean;
  completed: boolean;
  item: string;
  description: string;
  todos: any[];
}

class Todos extends Component<TodoProps, TodoState> {
  constructor(props: TodoProps) {
    super(props);
    console.log(`constructor todos>>>${JSON.stringify(this.props.data)}`);
  }

  state = {
    open: false,
    completed: false,
    item: "",
    description: "",
    todos: this.props.data,
  };

  findTodo = () => {
    const todo = todos.find((todo) => Number(todo.id) === 1);

    console.log(`todo item with id>>${JSON.stringify(todo)}`);
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>, id: string) => {
    console.log(`Id>>${id}`);

    const todo = todos.find((todo) => Number(todo.id) == Number(id));

    if (todo) {
      todo.completed = !todo.completed;
    }

    console.log(`todos>>${JSON.stringify(todos)}`);

    this.setState({
      todos: todos,
    });
  };

  onChangeDescription(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.setState({
      description: evt.currentTarget.value,
    });
  }

  render() {
    const { classes } = this.props;
    const defaultProps = {
      width: 700,
      bgcolor: "background.paper",
      m: 1,
      textAlign: "left",
      alignItems: "justify",
      //style: { width: '5rem', height: '5rem' },
      borderColor: "text.primary",
    };

    return (
      <div className={classes.root}>
        <div>
          {this.props.data.map((todo: any) => (
            <Accordion key={todo.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className={clsx(classes.heading, {
                    [classes.strikethrough]:
                      todo.completed && this.props.isComplete,
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
                        xs={6}
                        className={clsx(classes.itemSpacing, {
                          [classes.strikethrough]:
                            todo.completed && this.props.isComplete,
                        })}
                      >
                        &nbsp;{todo.description}
                      </Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={todo.completed}
                              onChange={(evt) =>
                                this.handleChange(evt, todo.id)
                              }
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
}

export default withStyles(useStyles)(Todos);
