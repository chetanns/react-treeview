import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AssignmentIndIcon from "@material-ui/icons/ListAlt";
import AssignmentLateIcon from "@material-ui/icons/List";
import AssignmentTurnedInIcon from "@material-ui/icons/PlaylistAddCheck";
import Todo from "./Todo";
import todos from "../resources/data.json";
import { AppsOutlined } from "@material-ui/icons";
import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/PlaylistAdd";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "left",
    backgroundColor: theme.palette.background.paper,
    width: 900,
  },
  box: {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
  },
  text: {
    width: 871,
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
}));

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  //style: { width: "5rem", height: "5rem" },
};

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [todoList, setTodosList] = React.useState(todos);
  const [item, setItem] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0: {
        console.log(`Selected tabs ALL value>>${newValue}`);
        setTodosList(todos);
        break;
      }
      case 1: {
        console.log(`Selected tabs Active value>>${newValue}`);
        const activeTodos = todos.filter((todo) => todo.completed === false);
        console.log(`Active Todos >> ${JSON.stringify(activeTodos)}`);
        setTodosList(activeTodos);
        break;
      }
      case 2: {
        console.log(`Selected tabs Completed value>>${newValue}`);
        const completedTodos = todos.filter((todo) => todo.completed === true);

        setTodosList(completedTodos);
        console.log(`Completed Todos >> ${JSON.stringify(todoList)}`);
        break;
      }
    }
  };

  const onChangeValue = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(evt.currentTarget.value);
    setItem(evt.currentTarget.value);
  };

  const onChangeDescription = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("test");
    setDescription(evt.currentTarget.value);
  };

  const addItem = (item: string, description: string) => {
    let maxId: number =
      Number(
        todoList.reduce(
          (maxId: number, todo: any) =>
            (maxId = maxId > todo.id ? maxId : todo.id),
          0
        )
      ) + Number(1);

    console.log(`New Item>> ${item} with id : ${maxId}`);

    todoList.push({
      id: String(maxId),
      title: item,
      description: description,
      completed: false,
    });

    console.log("Added new item");
    console.log(`todos>>>${JSON.stringify(todoList)}`);

    setTodosList(todoList);
    setItem("");
    setDescription("");
  };

  return (
    <div className={classes.root}>
      <Box borderColor="primary.main" {...defaultProps}>
        <Paper component="form" className={classes.text}>
          <InputBase
            className={classes.input}
            placeholder="Add new title"
            inputProps={{ "aria-label": "Add new title" }}
            value={item}
            onChange={(evt) => onChangeValue(evt)}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <InputBase
            className={classes.input}
            placeholder="Add new description"
            inputProps={{ "aria-label": "Add new description" }}
            value={description}
            onChange={(evt) => onChangeDescription(evt)}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            onClick={() => addItem(item, description)}
            aria-label="directions"
          >
            <AddIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            // onClick={this.findTodo}
            aria-label="directions"
          >
            <AppsOutlined />
          </IconButton>
        </Paper>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Todo data={todoList} isComplete={true} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Todo data={todoList} isComplete={false} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Todo data={todoList} isComplete={false} />
        </TabPanel>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="All" icon={<AssignmentIndIcon />} {...a11yProps(0)} />
            <Tab
              label="Active"
              icon={<AssignmentLateIcon />}
              {...a11yProps(1)}
            />
            <Tab
              label="Completed"
              icon={<AssignmentTurnedInIcon />}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
      </Box>
    </div>
  );
}
