import { Formik } from 'formik';
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});


function Login() {

  const navigate = useNavigate;

  return (
    <div className='formContainer'>
      <h2>Login</h2>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "prac@codehedsion.co.za", password: "Password1!" }}
        onSubmit={() => {
          return axios({
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            responseType: JSON,
            url: 'https://figjam-api.onrender.com/oauth/token',
            data: {
              "client_id": "oAtRxBTsY2Oh-br4l-ktBgtZTV0ZBRrhiqGHWe5HL1Y",
              "client_secret": "bnpvnebUmQ25i6irNxHqUphQELoWjzj6xqTWZFb7mLY",
              "grant_type": "password",
              "username": "prac@codehesion.co.za",
              "password": "Password1!"
            }
          })
            .then(function (res) {
              console.log(res)
              alert('Success!');
              window.location = '/Home';
            })
            .catch(function (res) {
              console.log('error', res);
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
              <form noValidate >
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
                <button type='submit' onClick={handleSubmit}>Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Login
