import { Formik } from 'formik';
import * as Yup from "yup";
// import axios from "axois";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function Login() {

  return (
    <div className='formContainer'>
      <h2>Login</h2>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          axios({
            method: 'POST',
            url: 'https://edeaf-api-staging.azurewebsites.net/connect/token',
            data: data,
            headers: {'Content-Type': 'multipart/form-data'}
          })
            .then(function (res) {
               console.log(res)
               alert('Successfully signed up!');  
            })
            .catch(function (res) {
               console.log(res)
          });
        }}
      >
        
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Login
