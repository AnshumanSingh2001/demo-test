import React from 'react'

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Weekdays</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.contact}</td>
            <td>{row.email}</td>
            <td>{Array.from(row.weekdays).join(', ')}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
