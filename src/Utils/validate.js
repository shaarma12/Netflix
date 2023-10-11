export const validate = (name, email, password) => {
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Please Enter a Valid Name";
  if (!isEmailValid) return "Please Enter a valid Email Address";
  if (!isPasswordValid) return "Please Enter a Valid Password";
  return null;
};
