import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useGetLicensesListQuery } from '../../services/licenses';

const LicensesView = () => {
    const { data = [] } = useGetLicensesListQuery("")

    const rows: GridRowsProp = data
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 80 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'companyId', headerName: 'Company Id', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
    ];


    return (
        <>
            <h1>Licenses list</h1>
            <DataGrid rows={rows} columns={columns} hideFooter />
        </>
    )
}

export default LicensesView