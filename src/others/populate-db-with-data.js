import patients from '../data/patients.json';
import { addPatient } from '../service/patient-service';

export default async function populateDbWithData() {
   
    for (const item of patients) {
        await addPatient(item).catch(() => { });;
    }
  

}
