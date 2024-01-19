import React, { useState } from 'react'
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'
import EditModal from './components/EditModal.jsx'

const App = () => {
  const [formData, setFormData] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const handleFormSubmit = (data) => {
    if (isEditing) {
      const updatedData = [...formData]
      updatedData[editIndex] = data
      setFormData(updatedData)
      setIsEditing(false)
      setEditIndex(null)
    } else {
      setFormData((prevData) => [...prevData, data])
    }
  }

  const handleEdit = (index) => {
    setIsEditing(true)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const updatedData = [...formData]
    updatedData.splice(index, 1)
    setFormData(updatedData)
  }

  const handleEditModalClose = () => {
    setIsEditing(false)
    setEditIndex(null)
  }

  return (
    <div>
      <h1>React Form and Table</h1>
      <Form onSubmit={handleFormSubmit} />
      <Table data={formData} onEdit={handleEdit} onDelete={handleDelete} />
      {isEditing && (
        <EditModal
          rowData={formData[editIndex]}
          onSave={handleFormSubmit}
          onClose={handleEditModalClose}
        />
      )}
    </div>
  )
}

export default App
