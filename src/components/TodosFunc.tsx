import { Theme } from '@material-ui/core';
import React, { useState } from 'react'

const useStyles = (theme: Theme) =>
    ({
    root: {
      width: '800px',
    },
    text:{
      width: 400,
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
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
  });

function TodosFunc() {

    const [todo, setTodos] = useState([]);
    const [item,setItem] = useState('');    
}