import React, { useState, useEffect, FormEvent } from 'react'
import { useGetCompanyApiByIdQuery } from '../../services/companies';
import { useAddNewLicenseMutation, useGetLicensesListQuery } from '../../services/licenses';
import { useParams } from 'react-router-dom';
import { ILicenseType } from '../../types/licenses';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Button, Modal, Box } from '@mui/material';
import s from './style.module.scss';


const SingleCompanyView = () => {
    const [companyLicense, setCompanyLicense] = useState<ILicenseType[]>([])
    const { id } = useParams();
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('')
    const [companyId, setCompanyId] = useState<number>(Number(id))
    const [name, setName] = useState('')


    const { data } = useGetCompanyApiByIdQuery(id || "")
    const { data: licensesList = [], refetch } = useGetLicensesListQuery("")
    const [addPost] = useAddNewLicenseMutation();

    const rows: GridRowsProp = companyLicense
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 80 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'companyId', headerName: 'Company Id', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
    ];


    const handleFindCompanyLicenses = () => {
        const foundLicense = licensesList.filter(item => item?.companyId === Number(id))
        setCompanyLicense(foundLicense)
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newLicenseBody = {
            id: Math.floor(Math.random() * 901) + 100,
            status, companyId, name
        }
        try {
            await addPost(newLicenseBody).unwrap();
            refetch()
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        handleFindCompanyLicenses()
    }, [licensesList])

    return (
        <div className={s.container}>
            <div className={s.topBox}>
                <h1>
                    {data?.name} Company
                </h1>
                <Button className={s.button} onClick={() => setOpen(true)} >
                    + Add License
                </Button>
            </div>
            {companyLicense.length > 0 &&
                <DataGrid rows={rows} columns={columns} hideFooter />
            }

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={s.modalBody}>
                    <div className={s.content}>
                        <h3>
                            Add New License
                        </h3>
                        <form onSubmit={handleSubmit} className={s.form}>
                            <label>Name</label>
                            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <label>Company Id</label>
                            <input placeholder='CompanyId' value={companyId} onChange={(e) => setCompanyId(Number(e.target.value))} />
                            <label>Status</label>
                            <input placeholder='Status' value={status} onChange={(e) => setStatus(e.target.value)} />

                            <Button className={s.submitButton} onClick={() => setOpen(true)} type="submit" >
                                Add
                            </Button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SingleCompanyView