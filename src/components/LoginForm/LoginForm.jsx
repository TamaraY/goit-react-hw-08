import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate("/contacts"); // Перенаправляємо до сторінки контактів після успішного логіну
    } catch (error) {
      setErrors({ server: error.message });
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.formWrapp}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <div className={styles.logForm}>
            <Form>
              <div>
                <label className={styles.label}>
                  <span>Email</span>
                  <Field type="email" name="email" className={styles.input} />
                  <ErrorMessage
                    name="email"
                    className={styles.error}
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
                    className={styles.error}
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
                Log In
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
