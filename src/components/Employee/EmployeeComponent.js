import React, { useEffect, useState } from "react";
import EmployeeService from "../../service/EmployeeService";

const EmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getEmployees();
    }, [])

    const getEmployees = () => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((Response) => {
        getEmployees();
    }).catch(error => {
        console.log(error);
    })
}

        return (
            <div>
                <h1 className="text-center"> Employees List</h1>
                <a href = "/add-employee" className="btn btn-primary mb-2"> Add Employee</a>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Employee id</td>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Email</td>
                            <td>Position</td>
                            <td>Buidling </td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map(
                                employee => 
                                <tr key = {employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.building.name}</td>
                                    <td>
                                        <a className="btn btn-info" href ={`/edit-employee/${employee.id}`}> Update</a>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)} style={{marginLeft:"10px"}}> Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


export default EmployeeComponent