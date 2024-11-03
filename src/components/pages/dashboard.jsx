import { useState } from 'react';
import useFetch from '../../hooks/use-fetch';
import patientService, { addPatient, deletePatient, getPatients } from '../../service/patient-service';
import OverviewCard from '../layout/overview-card';
import AddButton from '../layout/add-button';
import PatientTable from '../tables/patient-table';
import deleteItem from '../../others/handle-delete';

const providerFilters = {
  all: doctor => true,
  available: doctor => doctor.isAcceptingPatients,
  unavailable: doctor => !doctor.isAcceptingPatients
}


export default function Dashboard() {
  const [fetchingPatients, errorPatients, patients, setPatients] = useFetch(getPatients);

  const onPatientDelete = (id) => deleteItem({
    item: { id },
    asyncDelete: patientService.deletePatient,
    itemType: "patient",
    onSuccess: () => setPatients(patients.filter(p => p.id !== id))
  })

  return <div className="Dashboard">
    
    <div className="overview">
      <div className="title">
        <h2 className="section--title">Overview</h2>
      </div>
      <div className="cards">
       
        <OverviewCard
          className={'card-2'}
          data={patients}
          error={errorPatients}
          fetching={fetchingPatients}
          heading={"Total Patients"}
          icon={"user-line"}
        />

      </div>
    </div>
    {/* patient section */}
    <div className="recent--patients">
      <div className="title">
        <h2 className="section--title">Recently Added Patients</h2>
        <AddButton name="patients" />
      </div>
      {!patients || patients.length == 0 ? <div>No recent Patients</div>
        : <PatientTable
          data={patients.sort((a, b) => b.id - a.id).slice(0, 5)}
          onDelete={onPatientDelete}
          edit
          details
          compact

        />
      }
    </div>
  </div>
}
