import { Route, Switch } from "wouter";
import Dashboard from "../pages/dashboard";

import Patients from "../pages/patients";
import PatientDetails from "../detail-pages.jsx/patient-detials";
import EditPatient from "../forms/edit-patient";
import AddPatient from './../forms/add-patient';
import PageNotFound from "../pages/Page-not-found";
import populateDbWithData from "../../others/populate-db-with-data";

const MainContent = () => {
  return <div className="MainContent">
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/patients" component={Patients} />
      <Route path="/seed">
        <button onClick={populateDbWithData}>Seed Database</button>
      </Route>
      <Route path="/patients/:id/details" component={PatientDetails} />
      <Route path="/patients/:id/edit" component={EditPatient} />
      <Route path="/patients/add" component={AddPatient} />
      <Route path="/:rest*" component={PageNotFound} />
    </Switch>

  </div>
}

export default MainContent;