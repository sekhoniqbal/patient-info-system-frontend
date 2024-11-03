import { ErrorMessage, Field, Form, Formik } from "formik";
import FormHeading from "./form-heading";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'first name is too long')
      .required('First Name is Required'),
      lastName: Yup.string().max(50,"last name too long").required("Last Name is required"),
      dateOfBirth:Yup.date().max(new Date(), "Date of birth cannot be in future").required("Date of Birth is required")
 
  });

export default function PatientForm({ heading, handleSubmit, initialValues, submitLabel }) {

    return <div className="AddPatient m-auto p-4 rounded" style={{ width: "350px", background: "white" }}>
        <FormHeading heading={heading} cancelUrl="/patients" />
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group mb-2" >
                            <label className="" htmlFor="firstName">First Name</label>
                            <Field className="form-control" name="firstName" placeholder="Jane" />
                            <small className="text-danger"><ErrorMessage name="firstName" /></small><br />

                            <label className="" htmlFor="lastName">Last Name</label>
                            <Field className="form-control" name="lastName" placeholder="Jane" />
                            <small className="text-danger"><ErrorMessage name="lastName" /></small><br />
                            
                            <label className="" htmlFor="dateOfBirth">Date of Birth</label>
                            <Field className="form-control" type="date" name="dateOfBirth" placeholder="Jane" />
                            <small className="text-danger"><ErrorMessage name="dateOfBirth" /></small><br />

                        </div>
                        <button type="submit" className="add" disabled={isSubmitting}>
                            {submitLabel}
                        </button>
                    </Form>
                )}
            </Formik>
    </div>
}