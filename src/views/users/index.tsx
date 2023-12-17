import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import React from 'react'
import { useGetUsersListQuery } from '../../services/users'

const UsersView = () => {
    const { data = [], error, isLoading } = useGetUsersListQuery("")

    const rows: GridRowsProp = data
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 80 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'companyId', headerName: 'Company Id', width: 200 },
        { field: 'accessGroup', headerName: 'Access Group', width: 200 },
    ];

    return (
        <>
            <h1>Users list</h1>
            <DataGrid rows={rows} columns={columns} hideFooter />
        </>
    )
}

export default UsersView