import * as yup from "yup";

export const formSchema = yup.object().shape({
  FirstName: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "name can only contain letters and spaces")
    .required("name field is required"),
  LastName: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "name can only contain letters and spaces")
    .required("name field is required"),
  PhoneNum:yup
    .number()
    .typeError('Please enter a valid phone number')
    .required('Phone number is required'),
  Email: yup
    .string()
    .email("please provide a valid emailID")
    .required("email field is required"),
  Password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("password field is required"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Password Mismatch")
    .required("required confirmation"),
});
