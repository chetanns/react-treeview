import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid, ColDef, ValueGetterParams,ValueFormatterParams } from '@material-ui/data-grid';
import data from './data.json';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

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
 
function getFullName(params: ValueGetterParams) {
  return `${params.getValue('firstName') || ''} ${
    params.getValue('lastName') || ''
  }`;
}

function handleData(data: string) {

    console.log(`data=> ${data}`);
}

//let rowData:any[] = data.endpoints.map((endpoint,index)=>({id:index,...endpoint}));
//{id:1, ...data.endpoints};

//console.log(`rowData>> ${JSON.stringify(rowData)}`);

const colData:ColDef[] =[
    { field: 'appId', headerName: 'App Id', width: 230, headerAlign:'center'},
    { field: 'location', headerName: 'location', width: 130, headerAlign:'center' },
    { field: 'environment', headerName: 'Environment', width: 130, headerAlign:'center' },
    { field: 'documentUri', headerName: 'Document URL', width: 280, headerAlign:'center' },
]

const columns: ColDef[] = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    headerAlign:'center',
    valueGetter: getFullName,
    sortComparator: (v1, v2, cellParams1, cellParams2) =>
      getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
  },
  {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: ValueFormatterParams) => (
        <strong>
          {(params.value as string)}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={()=>console.log(`data=> ${JSON.stringify(params.value)}`)}
          >
            Open
          </Button>
        </strong>
      ),
  }
];

const rows = [
  { id: 1, lastName: 'Snows', firstName: 'Jon',action: 'test-1' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',action: 'test-2'  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',action: 'test-3'  },
  { id: 4, lastName: 'Stark', firstName: 'Arya',action: 'test-4'  },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',action: 'test-5'  },
];

export default function Datagrid({endpoint}:any) {
  console.log(`props passed ${JSON.stringify(endpoint)}`);
  const classes = useStyles();
  
  let rowData:any[] = endpoint.map((endpoint:any,index:any)=>({id:index,...endpoint}));

  console.log(`props processed ${JSON.stringify(rows)}`);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography className={classes.heading}>Testing</Typography>
      <DataGrid autoPageSize={true} pageSize={5} rows={rowData} columns={colData} />
    </div>
  );
}