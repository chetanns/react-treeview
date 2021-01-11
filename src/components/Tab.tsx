import React, { useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AssignmentIndIcon from "@material-ui/icons/ListAlt";
import AssignmentLateIcon from "@material-ui/icons/List";
import AssignmentTurnedInIcon from "@material-ui/icons/PlaylistAddCheck";
import Todos from "./Todos";
import todos from "../resources/data.json";

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

  useEffect(() => {
    console.log(`value>>${value}`);

    const original_todos = todos;
  }, [value, setValue]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      console.log(`Selected tabs ALL value>>${newValue}`);
      setTodosList(todos);
    } else if (newValue === 1) {
      console.log(`Selected tabs Active value>>${newValue}`);
      const activeTodos = todos.filter((todo) => todo.completed === false);
      console.log(`Active Todos >> ${JSON.stringify(activeTodos)}`);
      setTodosList(activeTodos);
    } else if (newValue === 2) {
      console.log(`Selected tabs Completed value>>${newValue}`);
      const completedTodos = todos.filter((todo) => todo.completed === true);

      setTodosList(completedTodos);
      console.log(`Completed Todos >> ${JSON.stringify(todoList)}`);
    }
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Box borderColor="primary.main" {...defaultProps}>
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
        {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Todos data={todoList} isComplete={true} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Todos data={todoList} isComplete={false} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Todos data={todoList} isComplete={false} />
        </TabPanel>
        {/* </SwipeableViews> */}
      </Box>
    </div>
  );
}
