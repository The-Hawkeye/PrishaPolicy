const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empCode: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  relationToEmployee: {
    type: String,
    required: true,
    enum: ['Self', 'Spouse', 'Mother', 'Father', 'Son', 'Daughter']
  },
  gender: {
    type: String,
    required: true,
    enum: ['M', 'F']
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  sumInsured: {
    type: Number,
    required: true
  }
});

employeeSchema.path('dateOfBirth').validate(function(value) {
  if (this.relationToEmployee === 'Son' || this.relationToEmployee === 'Daughter') {
    const ageInYears = (new Date() - value) / (1000 * 60 * 60 * 24 * 365); // Calculate age
    return ageInYears <= 21; // Age should not be greater than 21
  }
  return true;
}, 'Age of Son or Daughter should not be greater than 21');

employeeSchema.path('gender').validate(function(value) {
  if (this.relationToEmployee === 'Son' || this.relationToEmployee === 'Father') {
    return value === 'M'; // Son and Father cannot be Female
  }
  if (this.relationToEmployee === 'Daughter' || this.relationToEmployee === 'Mother') {
    return value === 'F'; // Daughter and Mother cannot be Male
  }
  return true;
}, 'Invalid combination of gender and relation');

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
