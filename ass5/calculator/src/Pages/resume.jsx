import React, { useState } from 'react';
import '../Styles/r esume.css'; // Optional: For styling

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    professionalSummary: '',
    education: '',
    skills: '',
    careerObjective: '',
    experience: '',
    achievements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Resume Submitted!');
    console.log(formData); // You can process the data further as needed
    // Reset form data
    setFormData({
      professionalSummary: '',
      education: '',
      skills: '',
      careerObjective: '',
      experience: '',
      achievements: '',
    });
  };

  return (
    <div className="resume-builder">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="professionalSummary">Professional Summary:</label>
          <textarea
            id="professionalSummary"
            name="professionalSummary"
            value={formData.professionalSummary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education Qualifications:</label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Academic and Non-Academic Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="careerObjective">Career Objective:</label>
          <textarea
            id="careerObjective"
            name="careerObjective"
            value={formData.careerObjective}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience and Internships:</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="achievements">Skills and Achievements:</label>
          <textarea
            id="achievements"
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
