import React from 'react'
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table"
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface booleanProp {
    isUser: boolean;
  }

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'year_', headerName: 'Year', width: 130, type: 'number'},
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
];

const rows = [
    { id: 1, make: 'TEST', model: 'test', year_: 2000, color: 'color', price: 'price'},
    { id: 2, make: 'TEST2', model: 'test2', year_: 2000, color: 'color2', price: 'price2'},
];

export default function DataTable( prop: booleanProp ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(prop.isUser)

    if (prop.isUser == true) {
        return (
            <div className="flex flex-col align-center">
                <div>
                    {/* OBVIOUSLY, these are not functional buttons */}
                    <button className="bg-gray-500 text-black m-3 p-1 rounded hover:bg-gray-800 hover:text-white">add new car</button>
                    <button className="bg-gray-500 text-black m-3 p-1 rounded hover:bg-gray-800 hover:text-white">update car</button>
                    <button className="bg-gray-500 text-black m-3 p-1 rounded hover:bg-red-700 hover:text-white" onClick={handleOpen}>delete car</button>
                    <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                        <div className="text-center bg-gray-800 text-white h-24 w-80 inset-0">
                            <h1 className="text-xl bg-gray-900">Are you sure you want to delete?</h1>
                            <div className="flex flex-row justify-center">  
                                <button className="bg-red-600 text-black m-3 p-1 rounded hover:bg-red-700 hover:text-white w-12" onClick={handleClose}>yes</button>
                                <button className="bg-gray-200 text-black m-3 p-1 rounded hover:bg-gray-400 hover:text-black w-12" onClick={handleClose}>no</button>
                            </div>
                        </div>
                    </Modal>
                    <div className="font-mono">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page:0, pageSize: 5},
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
          )
    } else { return ( <div className="items-center text-center flex flex-col"><h1 className="text-2xl font-bold text-red-700">Sorry, you do not have access to data</h1></div> ) }
    
}
