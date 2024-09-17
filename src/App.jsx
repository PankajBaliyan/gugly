import NavStaff from "./Doctor/NavStaff";
import PatientDetails from "./Doctor/PatientDetails";
import Medicines from "./Doctor/Medicines";
import Symptoms from "./Doctor/Symptoms";
import Diagnosis from "./Doctor/Diagnosis";
import Instructions from "./Doctor/Instructions";
import PatientsSummary from "./Doctor/PatientsSummary";
import Password from "./Doctor/Password";
import Logout from "./Doctor/Logout";

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavStaff/>
      <Routes>
        <Route path='/patientdetails' element= {<PatientDetails/>}> </Route>
        <Route path='/medicines' element= {<Medicines/>}> </Route>
        <Route path='/symptoms' element= {<Symptoms/>}> </Route>
        <Route path='/diagnosis' element= {<Diagnosis/>}> </Route>
        <Route path='/instructions' element= {<Instructions/>}> </Route>
        <Route path='/patientssummary' element= {<PatientsSummary/>}> </Route>
        <Route path='/password' element= {<Password/>}> </Route>
        <Route path='/logout' element= {<Logout/>}> </Route>
      </Routes>
    </Router>   
    </>
  )
}
export default App;
