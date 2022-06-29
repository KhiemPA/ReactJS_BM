import React, { useEffect, useState } from "react";
import EmployeeService from "../../service/EmployeeService";
import { useHistory, useParams } from "react-router-dom";
const AddEmployeeComponent = () => {    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [position, setPosition] = useState('')
    const [email, setEmail] = useState('')
    const [buildingId, setBuildingId] = useState('')
    const history = useHistory()
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName,position,email, buildingId}

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                console.log(response.data)
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })
        }
        else {

        EmployeeService.createEmployee(employee).then((response) =>{
            console.log(response.data)
            history.push('/employee');
        }).catch(error => {
            console.log(error)
        })
        console.log(employee);
        }
        
    }

    useEffect (() => {
        EmployeeService.updateEmployee(id).then((Response)=>{
            setFirstName(Response.data.firstName)
            setLastName(Response.data.lastName)
            setPosition(Response.data.position)
            setEmail(Response.data.email)
            setBuildingId(Response.data.buildingId)
        }).catch(error=> {
            console.log(error)
        })
    },)

    
    const title = () => {
        if(id) {
            return <h2 className="text-center">Update Employee</h2>
        }
        else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }

  

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> First ame:  </label>
                                    <input type="text" placeholder="Enter first name" name = "firstName" className="form-control" value={firstName} onChange = {(e) => setFirstName(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Last Name:  </label>
                                    <input type="text" placeholder="Enter last name" name = "lastName" className="form-control" value={lastName} onChange = {(e) => setLastName(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Position:  </label>
                                    <input type="text" placeholder="Enter position" name = "position" className="form-control" value={position} onChange = {(e) => setPosition(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Email:  </label>
                                    <input type="text" placeholder="Enter email" name = "email" className="form-control" value={email} onChange = {(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Building Id:  </label>
                                    <input type="text" placeholder="Enter building Id" name = "buildingId" className="form-control" value={buildingId} onChange = {(e) => setBuildingId(e.target.value)}></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <a href ="/employees" className="btn btn-danger"> Canel </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddEmployeeComponent