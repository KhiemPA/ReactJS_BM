import React, { useEffect, useState } from "react";
import ContractService from "../../service/ContractService";
import {  useHistory, useParams } from "react-router-dom";
const AddContractComponent = () => {    
    const [startDay, setStartDay] = useState('')
    const [endDay, setEndDay] = useState('')
    const [fee, setFee] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [buildingId, setBuildingId] = useState('')

    const history = useHistory()
    const {id} = useParams();

    const saveOrUpdateContract = (e) => {
        e.preventDefault();
        const contract = { startDay, endDay, fee, companyId,buildingId};

        if (id) {
            ContractService.updateContract(id, contract).then((response) => {
                console.log(response.data)
                history.push('/contracts')
            }).catch(error => {
                console.log(error)
            })
        }
        else {

        ContractService.createContract(contract).then((response) =>{
            console.log(response.data)
            history.push('/contracts');
        }).catch(error => {
            console.log(error)
        })
        console.log(contract);
        }
    }


    useEffect (() => {
        ContractService.updateContract(id).then((response)=>{
        setStartDay(response.data.startDay)
        setEndDay(response.data.endDay)
        setFee(response.data.fee)
        setCompanyId(response.data.companyId)
        setBuildingId(response.data.buildingId)
        }).catch(error => {
            console.log(error)
        })
    },)


    
    const title = () => {
        if(id) {
            return <h2 className="text-center">Update Contract</h2>
        }
        else {
            return <h2 className="text-center">Add Contract</h2>
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
                                    <label className="fore-label"> Start day:  </label>
                                    <input type="text" placeholder="Enter start day" name = "startDay" className="form-control" value={startDay} onChange = {(e) => setStartDay(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> End day:  </label>
                                    <input type="text" placeholder="Enter end day" name = "endDay" className="form-control" value={endDay} onChange = {(e) => setEndDay(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Fee:  </label>
                                    <input type="text" placeholder="Enter fee" name = "fee" className="form-control" value={fee} onChange = {(e) => setFee(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Company:  </label>
                                    <input type="text" placeholder="Enter copmany" name = "companyId" className="form-control" value={companyId} onChange = {(e) => setCompanyId(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Building:  </label>
                                    <input type="text" placeholder="Enter building" name = "buildingId" className="form-control" value={buildingId} onChange = {(e) => setBuildingId(e.target.value)}></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateContract(e)}>Submit</button>
                                <a href="/contracts" className="btn btn-danger"> Canel </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddContractComponent