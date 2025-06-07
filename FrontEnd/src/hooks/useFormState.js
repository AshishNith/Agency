import { useState } from 'react';

export const useFormState = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setSelectedItem(item);
    setFormData(item);
  };

  const resetForm = () => {
    setFormData(initialState);
    setEditMode(false);
    setSelectedItem(null);
  };

  return { formData, editMode, selectedItem, handleChange, handleEdit, resetForm };
};
