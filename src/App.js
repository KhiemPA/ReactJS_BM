
import './App.css';
import BuildingComponent from './components/Buidling/BuildingComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBuildingComponent from './components/Buidling/AddBuildingComponent';

import AddEmployeeComponent from './components/Employee/AddEmployeeComponent';
import EmployeeComponent from './components/Employee/EmployeeComponent';

import CompanyComponent from './components/Company/CompanyComponent';
import AddCompanyComponent from './components/Company/AddCompanyComponent';

import ContractComponent from './components/Contract/ContractComponent';
import AddContractComponent from './components/Contract/AddContractComponent';

import InvoiceComponent from './components/Invoice/InvoiceComponent';
import AddInvoiceComponent from './components/Invoice/AddInvoiceComponent';

import Navigation from './fe/Navigation';
import './App.css';
import './fe/Nav.css';
import Home from './fe/Home.js';

function App() {
  return (
    <div className="App">

        <Router>
        <Navigation/>

        <Router>
        <Switch>
        <Route path='/Home' component={Home}/>
        </Switch>
          
          <Switch>
            <Route exact path= "/buidlings" component = {BuildingComponent}></Route>
            <Route path = "/buildings" component = {BuildingComponent}></Route>
            <Route path = "/add-building" component = {AddBuildingComponent}></Route>
            <Route path = "/edit-building/:id" component = {AddBuildingComponent}></Route>
          </Switch>
  
  
          <Switch>
            <Route exact path= "/companies" component = {CompanyComponent}></Route>
            <Route path = "/companies" component = {CompanyComponent}></Route>
            <Route path = "/add-company" component = {AddCompanyComponent}></Route>
            <Route path = "/edit-company/:id" component = {AddCompanyComponent}></Route>
          </Switch>
  
  
          
  
          <Switch>
            <Route exact path= "/employees" component = {EmployeeComponent}></Route>
            <Route path = "/employees" component = {EmployeeComponent}></Route>
            <Route path = "/add-employee" component = {AddEmployeeComponent}></Route>
            <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
  
          </Switch>


          <Switch>
            <Route exact path= "/cotracts" component = {ContractComponent}></Route>
            <Route path = "/contracts" component = {ContractComponent}></Route>
            <Route path = "/add-contract" component = {AddContractComponent}></Route>
            <Route path = "/edit-contract/:id" component = {AddContractComponent}></Route>
          </Switch>
  
  
  
          <Switch>
            <Route exact path= "/invoices" component = {InvoiceComponent}></Route>
           <Route path = "/invoices" component = {InvoiceComponent}></Route>
           <Route path = "/add-invoice" component = {AddInvoiceComponent}></Route>
           <Route path = "/edit-invoice/:id" component = {AddInvoiceComponent}></Route>
          </Switch>
        </Router>
        </Router>
    </div>

  );
}

export default App;
