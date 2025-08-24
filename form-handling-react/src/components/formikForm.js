import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("username is required").min(8, "Username must be at least 8 characters"),   
  email: Yup.string().required("email is required").email("Invalid Email Address"),
  password: Yup.string().required("password is required").min(6, "Password must be at least 6 characters"),
});

function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="mb-4">Registration Form (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          resetForm();
        }}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <Field
              type="text"
              name="username"
              placeholder="Enter Your Username"
              className="border border-gray-800 rounded px-3 py-2 mb-2"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="border border-gray-800 rounded px-3 py-2 mb-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border border-gray-800 rounded px-3 py-2 mb-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
