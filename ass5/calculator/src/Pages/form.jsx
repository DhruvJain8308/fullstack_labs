import React, { useState } from 'react';
import '../Styles/form.css'; // Optional: For styling

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    const newErrors = {};

    // Validation
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    // If no errors, show success message
    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage('Form submitted successfully!');
      setFormData({ name: '', email: '' }); // Reset form
      setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
    }
  };

  return (
    <div className="form-container">
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <button type="submit">Submit</button>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default UserDataForm;
