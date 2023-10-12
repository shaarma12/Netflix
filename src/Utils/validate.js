export const validateName = (name) => {
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  if (!isNameValid) return "Please enter a valid name.";
  return null;
};
export const validateEmail = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Please enter a valid email address.";
  return null;
};
export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordValid) return "Please enter a valid password.";
  return null;
};
