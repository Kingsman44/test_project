export const validatePhoneNumber = (phone) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return cleanPhone.length === 10;
};