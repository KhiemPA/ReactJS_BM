
import React, { useEffect, useState } from "react";
import CompanyService from "../../service/CompanyService";


const CompanyComponent = () =>{

const [companies, setCompanies] = useState([])

    useEffect(() => {

        getCompanies();
    }, [])

    const getCompanies = () => {
        CompanyService.getCompanies().then((Response) => {
            setCompanies(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    


const deleteCompany = (companyId) => {
    CompanyService.deleteCompany(companyId).then((Response) => {
        getCompanies();
    }).catch(error => {
        console.log(error);
    })
}


    
        return (
            <div className="container">
                <h1 className="text-center"> Companies List</h1>

                <a href= "/add-company" className="btn btn-primary mb-2"> Add Company</a>

                <table className="table table -bordered table-striped">
                    <thead>
                        <tr>
                            <td>Company id</td>
                            <td>Name</td>
                            <td>Job</td>
                            <td>Number of Employess</td>
                            <td>Action </td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            companies.map(
                                company => 
                                <tr key = {company.id}>
                                    <td>{company.id}</td>
                                    <td>{company.name}</td>
                                    <td>{company.job}</td>
                                    <td>{company.numberEmploy}</td>
                                    <td>
                                        <a  className="btn btn-info" href ={`/edit-company/${company.id}`}> Update</a>
                                        <button className="btn btn-danger" onClick={() => deleteCompany(company.id)} style={{marginLeft:"10px"}}> Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


export default CompanyComponent