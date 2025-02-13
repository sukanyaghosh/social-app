import Button from "../components/ui/Button";
import FormGroup from "../components/form/FormGroup";
import FormLabel from "../components/form/FormLabel";
import Input from "../components/form/Input";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <FormLabel label={label} />
      <Input {...field} {...props} />
      {meta.touched && meta.error && (
        <small className="text-danger">{meta.error}</small>
      )}
    </FormGroup>
  );
};

export default function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email id")
          .required("Email is required"),
        password: Yup.string().required("Password is required").min(6).max(15),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      onReset={() => {
        console.log("reset");
      }}
    >
      <Form>
        <h2 className="text-uppercase fw-bold mb-4">Login</h2>
        <MyInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <MyInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
        />
        <div className="mb-3 d-flex justify-content-between">
          <Button size="sm" color="light">
            Forgot password?
          </Button>
          <Button type="submit">Login</Button>
        </div>
        <hr />
        <span>New user? </span>
        <Button size="sm" color="secondary">
          Create an account
        </Button>
      </Form>
    </Formik>
  );
}
