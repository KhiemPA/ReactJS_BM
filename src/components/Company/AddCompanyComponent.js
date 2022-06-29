import React, { useEffect, useState } from "react";
import CompanyService from "../../service/CompanyService";
import {  useHistory, useParams } from "react-router-dom";
const AddCompanyComponent = () => {    
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [numberEmploy, setNumberEmploy] = useState('')
    const history = useHistory()
    const {id} = useParams();
    

    const saveOrUpdateCompany = (e) => {
        e.preventDefault();
        const company = { name, job, numberEmploy}

        if (id) {
            CompanyService.updateCompany(id, company).then((response) => {
                console.log(response.data)
                history.push('/companies')
                
            }).catch(error => {
                console.log(error)
            })
        }
        else {

        CompanyService.createCompany(company).then((response) =>{
            console.log(response.data)
            history.push('/company');
        }).catch(error => {
            console.log(error)
        })
        console.log(company);
        }
    }

    useEffect (() => {
        CompanyService.updateCompany(id).then((Response)=>{
        setName(Response.data.name)
        setJob(Response.data.job)
        setNumberEmploy(Response.data.numberEmploy)
        }).catch(error => {
            console.log(error)
        })
    },)

    
    const title = () => {
        if(id) {
            return <h2 className="text-center">Update company</h2>
        }
        else {
            return <h2 className="text-center">Add company</h2>
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
                                    <label className="fore-label"> Name:  </label>
                                    <input type="text" placeholder="Enter name" name = "name" className="form-control" value={name} onChange = {(e) => setName(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Job:  </label>
                                    <input type="text" placeholder="Enter job" name = "job" className="form-control" value={job} onChange = {(e) => setJob(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Number of employee:  </label>
                                    <input type="text" placeholder="Enter number of employee" name = "numberEmploy" className="form-control" value={numberEmploy} onChange = {(e) => setNumberEmploy(e.target.value)}></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateCompany(e)}>Submit</button>
                                <a href ="/companies" className="btn btn-danger"> Canel </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddCompanyComponent