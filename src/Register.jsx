import { useFormik } from 'formik';
// import * as Yup from "yup";

function Register(props) {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='formContainer'>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit} className="loginForm">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
        {/* <button className="linkBtn" onClick={() => props.onFormSwitch('login')}>Don't have an account? Register here</button> */}
      </form>
    </div>

  )
}

export default Register
