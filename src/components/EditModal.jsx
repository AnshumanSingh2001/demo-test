import React, { useState, useEffect } from 'react'

const EditModal = ({ rowData, onSave, onClose }) => {
  const [editedData, setEditedData] = useState({ ...rowData })

  useEffect(() => {
    const weekdaysArray = Array.isArray(rowData.weekdays)
      ? rowData.weekdays
      : []

    setEditedData((prevData) => ({
      ...prevData,
      weekdays: weekdaysArray,
    }))
  }, [rowData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setEditedData((prevData) => {
      if (type === 'checkbox') {
        const weekdaysArray = Array.isArray(prevData.weekdays)
          ? prevData.weekdays
          : []
        const newWeekdays = weekdaysArray.includes(name)
          ? weekdaysArray.filter((day) => day !== name)
          : [...weekdaysArray, name]

        return {
          ...prevData,
          weekdays: newWeekdays,
        }
      } else {
        return {
          ...prevData,
          [name]: type === 'radio' ? value : checked ? value : '',
        }
      }
    })
  }

  const handleSave = () => {
    onSave(editedData)
    onClose()
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Row</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={editedData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Contact:
          <input
            type="number"
            name="contact"
            value={editedData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Weekdays:
          <label>
            Monday:
            <input
              type="checkbox"
              name="Monday"
              checked={(Array.isArray(editedData.weekdays)
                ? editedData.weekdays
                : []
              ).includes('Monday')}
              onChange={handleChange}
            />
          </label>
          <label>
            Tuesday:
            <input
              type="checkbox"
              name="Tuesday"
              checked={(Array.isArray(editedData.weekdays)
                ? editedData.weekdays
                : []
              ).includes('Tuesday')}
              onChange={handleChange}
            />
          </label>
          <label>
            Wednesday:
            <input
              type="checkbox"
              name="Wednesday"
              checked={(Array.isArray(editedData.weekdays)
                ? editedData.weekdays
                : []
              ).includes('Wednesday')}
              onChange={handleChange}
            />
          </label>
          <label>
            Thursday:
            <input
              type="checkbox"
              name="Thursday"
              checked={(Array.isArray(editedData.weekdays)
                ? editedData.weekdays
                : []
              ).includes('Thursday')}
              onChange={handleChange}
            />
          </label>
          <label>
            Friday:
            <input
              type="checkbox"
              name="Friday"
              checked={(Array.isArray(editedData.weekdays)
                ? editedData.weekdays
                : []
              ).includes('Friday')}
              onChange={handleChange}
            />
          </label>
        </label>
        <br />

        <label>
          Gender:
          <label>
            Male:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={editedData.gender === 'male'}
              onChange={handleChange}
            />
          </label>
          <label>
            Female:
            <input
              type="radio"
              name="gender"
              value="female"
              checked={editedData.gender === 'female'}
              onChange={handleChange}
            />
          </label>
        </label>
        <br />

        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={editedData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default EditModal
