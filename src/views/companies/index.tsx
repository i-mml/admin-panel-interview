import React, { useState } from 'react'
import { useGetCompaniesListQuery } from '../../services/companies'
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'



const CompaniesView = () => {
    const { data = [] } = useGetCompaniesListQuery("")
    const navigate = useNavigate();

    const rows: GridRowsProp = data
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 80 },
        { field: 'name', headerName: 'Name', width: 200 },
    ];

    const handleNavigate = (e: GridRowParams) => {
        navigate(`/company/${e?.row?.id}`)
    }

    return (
        <>
            <h1>Companies list</h1>
            <DataGrid rows={rows} columns={columns} hideFooter onRowClick={handleNavigate} />
        </>
    )
}

export default CompaniesView