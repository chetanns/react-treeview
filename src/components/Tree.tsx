import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import "../utils/string.extensions";
import dataJson from "../resources/app-data.json";
interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

const data: RenderTree = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
  ],
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();

  console.log(`Testing -- > ${dataJson[0].appGroup}`);

  const map = new Map<string, string>();

  map.set("1", "test-1");
  map.set("2", "test-2");
  map.set("3", "test-3");
  map.set("4", "test-4");

  console.log("testing".getByDefault());
  console.log(map.getByDefault("5", "Default-value"));

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  // const handleChange = (event: any, node:any)=>{
  //     console.log("Testing---"+ node.name);
  //   //console.log(node.name+"-"+ Array.isArray(node))
  // }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}
