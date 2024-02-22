import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file.');
      }

      const { message } = await response.json();
      alert(message);
    } catch (error) {
      console.error(error);
      alert('An error occurred while uploading the file.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <input type="file" accept=".xlsx, .xls" name="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;