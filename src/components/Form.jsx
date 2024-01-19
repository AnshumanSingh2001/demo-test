import React, { useState } from 'react'

const Form = ({ onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekdays: new Set(),
    gender: 'male',
    dob: '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      const newWeekdays = new Set(formData.weekdays)
      if (checked) {
        newWeekdays.add(name)
      } else {
        newWeekdays.delete(name)
      }
      setFormData((prevData) => ({
        ...prevData,
        weekdays: newWeekdays,
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekdays: new Set(),
      gender: 'male',
      dob: '',
    })
  }

  React.useEffect(() => {
    if (editData) {
      setFormData(editData)
    }
  }, [editData])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
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
          value={formData.email}
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
          value={formData.contact}
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
            checked={formData.weekdays.has('Monday')}
            onChange={handleChange}
          />
        </label>
        <label>
          Tuesday:
          <input
            type="checkbox"
            name="Tuesday"
            checked={formData.weekdays.has('Tuesday')}
            onChange={handleChange}
          />
        </label>
        <label>
          Wednesday:
          <input
            type="checkbox"
            name="Wednesday"
            checked={formData.weekdays.has('Wednesday')}
            onChange={handleChange}
          />
        </label>
        <label>
          Thursday:
          <input
            type="checkbox"
            name="Thursday"
            checked={formData.weekdays.has('Thursday')}
            onChange={handleChange}
          />
        </label>
        <label>
          Friday:
          <input
            type="checkbox"
            name="Friday"
            checked={formData.weekdays.has('Friday')}
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
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
        </label>
        <label>
          Female:
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
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
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">{editData ? 'Update' : 'Submit'}</button>
    </form>
  )
}

export default Form
