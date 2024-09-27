import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api/UserApi'

// Enum tanımlaması
enum Role {
    Admin = 'admin',
    User = 'user',
    // Guest = 'Guest'
}

interface User {
  id: number
  name: string
  email: string
  role: Role
  created_at: string
}

const Users = () => {
  const [globalFilter, setGlobalFilter] = useState<string | null>(null)

    const { data, isLoading, error } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => getUsers()
    })
  console.log(data)

  const formatDate = (rowData: User) => {
    const date = new Date(rowData.created_at);
    return date.toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
    if (isLoading) {
      return (
        <div className='loader-overlay'>
          <img className='loader' src='./loader.svg' />
        </div>
      )
    }

    if (error) {
      return (
        <p>
          Error: {error instanceof Error ? error.message : 'An error occurred'}
        </p>
      )
    }

  const header = (
    <div className='table-header'>
      <h1 className='text-center text-2xl p-2'>User List</h1>
      <IconField iconPosition='right' className='flex justify-end'>
        <InputIcon className='pi pi-search' />
        <InputText
          type='search'
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGlobalFilter(e.target.value)
          }
          placeholder='Search'
        />
      </IconField>
    </div>
  )

  return (
    <div>
      <DataTable
        value={data}
        paginator
        rows={10}
        globalFilter={globalFilter}
        header={header}
        emptyMessage='No users found.'
        sortField='created_at'
        sortOrder={-1}
      >
        <Column field='name' header='Name' filter sortable />
        <Column field='email' header='Email' filter sortable />
        <Column field='role' header='Role' filter sortable />
        <Column field='created_at' header='CreatedAt' body={formatDate} filter sortable />
      </DataTable>
    </div>
  )
}

export default Users
