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
                <label className={styles.label}>
                  <span>Name </span>
                  <Field type="text" name="name" className={styles.input} />
                  <ErrorMessage
                    name="name"
                    className={styles.input}
                    component="p"
                  />
                </label>
              </div>
              <div>
                <label className={styles.label}>
                  <span>Email</span>
                  <Field type="email" name="email" className={styles.input} />
                  <ErrorMessage
                    name="email"
                    className={styles.input}
                    component="p"
                  />
                </label>
              </div>
              <div>
                <label className={styles.label}>
                  <span>Password</span>
                  <Field
                    type="password"
                    name="password"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="password"
                    className={styles.input}
                    component="p"
                  />
                </label>
              </div>
              {errors.server && <div>{errors.server}</div>}
              <button
                type="submit"
                className={styles.btn}
                disabled={isSubmitting}
              >
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
