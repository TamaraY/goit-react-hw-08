import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await dispatch(register(values)).unwrap();
      navigate("/contacts");
    } catch (error) {
      setErrors({ server: error.message });
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.formWrapp}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 7) {
            errors.password = "Password must be at least 7 characters";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <div className={styles.regForm}>
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              {errors.server && <div>{errors.server}</div>}
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
