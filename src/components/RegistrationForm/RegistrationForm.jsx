import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label>
            Name
            <Field type="text" name="name" required />
          </label>
          <label>
            Email
            <Field type="email" name="email" required />
          </label>
          <label>
            Password
            <Field type="password" name="password" required />
          </label>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
