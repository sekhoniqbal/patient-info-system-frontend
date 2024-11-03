import { ErrorMessage, Field, Form, Formik } from "formik";
import FormHeading from "./form-heading";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string().required('password is required'),
});

export default function LoginForm({ heading, handleSubmit, initialValues, submitLabel }) {

    return <div className="LoginForm m-auto p-4 rounded" style={{ width: "350px", background: "white" }}>
         <h3 className="section--title text-center">{heading}</h3>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group mb-2" >
                        <label className="" htmlFor="username">UserName</label>
                        <Field className="form-control" name="username" placeholder="" />
                        <small className="text-danger"><ErrorMessage name="username" /></small><br />

                        <label className="" htmlFor="password">Password</label>
                        <Field className="form-control" name="password" placeholder="" />
                        <small className="text-danger"><ErrorMessage name="password" /></small><br />

                    </div>
                    <button type="submit" className="add" disabled={isSubmitting}>
                        {submitLabel}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}