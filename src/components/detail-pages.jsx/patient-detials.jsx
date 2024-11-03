import { Link, useLocation } from "wouter";
import patientService, { deletePatient, getPatients } from "../../service/patient-service";
import useFetch from "../../hooks/use-fetch";
import PatientTable from "../tables/patient-table";
import deleteItem from "../../others/handle-delete";


export default function PatientDetails({ params: { id } }) {
    const [fetchInProgress, error, patient, setPatient] = useFetch(() => patientService.getPatient({ id }));
    const [location, setLocation] = useLocation();

    const onPatientDelete = (id) => deleteItem({
        item: { id },
        itemType: "patient",
        asyncDelete: patientService.deletePatient,
        onSuccess: () => setLocation("/patients")

    })


    return <div className="Patients recent--patients">
        <div className="title ">
            <h2 className="section--title"> Patient Details</h2>
            <Link href="/patients">
                <button className="add">View All</button>
            </Link>
        </div>
        <h4 className="section--title mt-5 ">Patient Info</h4>
        {fetchInProgress ? <div>Fetching patient data....</div>
            : error ? <div>Failed to fetch patient. Reason: {error}</div>
                : !patient ? <div>No patient details available</div>
                    : <PatientTable
                        data={[patient]}
                        onDelete={onPatientDelete}
                        compact
                        edit
                    />
        }
       
    </div>
}