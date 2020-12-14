import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Datagrid from './Datagrid';
import data from './data.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
);



export default function SimpleAccordion() {
  const classes = useStyles();

  const accordian = data.map((app)=>(
    
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{app.appGroup}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Datagrid endpoint={app.endpoints} />
      </AccordionDetails>
    </Accordion>
  ))

  return (
    <div className={classes.root}>
      {
        accordian
      }
    </div>
  );
}
