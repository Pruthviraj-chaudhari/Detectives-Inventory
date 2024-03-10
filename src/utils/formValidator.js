import { toast } from 'sonner'; 

const checkRequiredFields = (formData, requiredFields) => {
  const isFormValid = requiredFields.every((field) => formData[field]);

  if (!isFormValid) {
    toast.warning(`Please fill in all required fields`);
  }

  return isFormValid;
};

export { checkRequiredFields };
