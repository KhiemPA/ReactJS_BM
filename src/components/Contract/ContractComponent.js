import React, { useEffect, useState } from "react";
import ContractService from "../../service/ContractService";


const ContractComponent = () => {

    const [contracts, setContracts] = useState([])

    useEffect(() => {

        getContracts();
    }, [])

    const getContracts = () => {
        ContractService.getContracts().then((Response) => {
            setContracts(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

const deleteContract = (contractId) => {
    ContractService.deleteContract(contractId).then((Response) => {
        getContracts();
    }).catch(error => {
        console.log(error);
    })
}

        return (
            <div className="container">
                <h1 className="text-center"> Contracts List</h1>

                <a href= "/add-contract" className="btn btn-primary mb-2"> Add contract</a>

                <table className="table table -bordered table-striped">
                    <thead>
                        <tr>
                            <td>Contract id</td>
                            <td>Start day</td>
                            <td>End day</td>
                            <td>Fee</td>
                            <td>Company </td>
                            <td>Building</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            contracts.map(
                                contract => 
                                <tr key = {contract.id}>
                                    <td>{contract.id}</td>
                                    <td>{contract.startDay}</td>
                                    <td>{contract.endDay}</td>
                                    <td>{contract.fee}</td>
                                    <td>{contract.company.name}</td>
                                    <td>{contract.building.name}</td>
                                    <td>
                                        <a className="btn btn-info" href ={`/edit-contract/${contract.id}`}> Update</a>
                                        <button className="btn btn-danger" onClick={() => deleteContract(contract.id)} style={{marginLeft:"10px"}}> Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

export default ContractComponent