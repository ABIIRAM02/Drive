import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { formSchema } from "./FormValidation";

const Form = () => {

  let onSubmit = (values, actions) => {
    alert('triggered')
    console.log(values);
    actions.resetForm()
  };

  let { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        FirstName: "",
        LastName: "",
        PhoneNum: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      },
      onSubmit,
      validationSchema: formSchema
    });

    // console.log(errors);

    const matches = useMediaQuery("(max-width:450px)");

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={ matches ? 'column' : 'row'}
        // height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            height: "100vh",
            width: { xs:"100%" , sm:"100%" , md:"50%", lg:"60%"},
            background: "linear-gradient(90deg, #055D33 1%, #1C3575 80%)",
          }}
        ></Box>

        <Box sx={{ width: { sm:"100%" , md:"50%", lg:"40%"} }}>
          <Container
            sx={{
              p: "20px",
              height: "100vh",
              width: "100%",
            }}
          >
            <Box sx={{m:{xs: '30px', sm:"1rem" , md:"1.5rem", lg:"2.5rem"}}} component={"div"} color={" #314858"}>
              <Typography gutterBottom variant="h2" sx={{fontSize: { xs: '30px', sm: '2rem', md: '2.5rem' }}} >
                Create Your Account
              </Typography>
              <Typography
                gutterBottom
                fontWeight={"600"}
                color={"#5D8CA6"}
                display={"inline"}
                variant="body1"
              >
                Already have an Account.?
              </Typography>
              <Typography
                display={"inline"}
                fontWeight={"550"}
                color={"#5EA0EC"}
                sx={{ mx: "5px" }}
                variant="body1"
              >
                please Click Login
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                gap={"20px"}
                border={"2px solid lightgray"}
                padding={"20px"}
                borderRadius={"5px"}
                sx={{ backgroundColor: "#F9F9FB" }}
              >
                <Box width={"100%"} component='div' >
                  <TextField
                    id="FirstName"
                    value={values.FirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    sx={{
                      width: "100%",
                      "& input": { padding: "10px", fontSize: {xs: '15px', sm:"15px" , md:"15px", lg:'19px'} },
                    }}
                    label="Enter Your First Name"
                    type="text"
                    error={touched.FirstName && Boolean(errors.FirstName)}
                    helperText={touched.FirstName && errors.FirstName}
                  />
                </Box>

                <Box width={"100%"} component='div' >
                  <TextField
                    id="LastName"
                    value={values.LastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    sx={{
                      width: "100%",
                      "& input": { padding: "10px", fontSize: {xs: '15px', sm:"15px" , md:"15px", lg:'19px'} },
                    }}
                    label="Enter Your Last Name"
                    type="text"
                    error={touched.LastName && Boolean(errors.LastName)}
                    helperText={touched.LastName && errors.LastName}
                  />
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <TextField
                    id="PhoneNum"
                    value={values.PhoneNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    sx={{
                      width: "80%",
                      "& input": { padding: "10px", fontSize: {xs: '15px', sm:"15px" , md:"15px", lg:'19px'} },
                    }}
                    label="Enter Your Phone Number"
                    type="tel"
                    error={touched.PhoneNum && Boolean(errors.PhoneNum)}
                    helperText={touched.PhoneNum && errors.PhoneNum}
                  />
                  <Button
                    sx={{ backgroundColor: "green", m:'auto' , p: "8px" }}
                    variant="contained"
                  >
                    
                    Verify
                  </Button>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <TextField
                    id="Email"
                    value={values.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    sx={{
                      width: "80%",
                      "& input": { padding: "10px", fontSize: {xs: '15px', sm:"15px" , md:"15px", lg:'19px'} },
                    }}
                    label="Enter Your Email"
                    type="email"
                    error={touched.Email && Boolean(errors.Email)}
                    helperText={touched.Email && errors.Email}
                  />
                  <Button
                    sx={{ backgroundColor: "green", m:'auto' , p: "8px" }}
                    variant="contained"
                  >
                    
                    Verify
                  </Button>
                </Box>

                <Box width={"100%"} component='div' >
                  <TextField
                    id="Password"
                    value={values.Password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    sx={{
                      width: "100%",
                      "& input": { padding: "10px", fontSize: {xs: '15px', sm:"15px" , md:"15px", lg:'19px'} },
                    }}
                    label="Enter Your Password"
                    type="password"
                    error={touched.Password && Boolean(errors.Password)}
                    helperText={touched.Password && errors.Password}
                  />
                </Box>

                <Box width={"100%"} component='div' >
                  <TextField
                    id="ConfirmPassword"
                    value={values.ConfirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    sx={{
                      width: "100%",
                      "& input": { padding: "10px", fontSize: {xs: '15px', sm:"15px" , md:"15px", lg:'19px'} },
                    }}
                    label="Confirm Your Password"
                    type="password"
                    error={touched.ConfirmPassword && Boolean(errors.ConfirmPassword)}
                    helperText={touched.ConfirmPassword && errors.ConfirmPassword}
                  />
                </Box>

                <Box width={"100%"} component='div' >
                  <Button
                    sx={{ width: "100%", marginBottom: "15px" }}
                    variant="contained"
                    type="submit"
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </form>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Form;
