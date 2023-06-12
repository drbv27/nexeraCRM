import React from 'react'
import clients from '../data/clients'

const CompaniesTable = () => {
  return (
    <div>
        {clients.map(client =>(
            <div key={client.id}>{client.companyName}</div>
        ))}
    </div>
  )
}

export default CompaniesTable