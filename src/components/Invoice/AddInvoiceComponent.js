import React, { useEffect, useState } from "react";
import InvoiceService from "../../service/InvoiceService";
import { useHistory, useParams } from "react-router-dom";
const AddInvoiceComponent = () => {    
    const [electric, setElectric] = useState('')
    const [water, setWater] = useState('')
    const [service, setService] = useState('')
    const [status, setStatus] = useState('')
    const [due, setDue] = useState('')
    const [companyId, setCompanyId] = useState('')
    const history = useHistory()
    const {id} = useParams();

    const saveOrUpdateInvoice = (e) => {
        e.preventDefault();
        const invoice = {electric, water, service, status, due, companyId};

        if (id) {
            InvoiceService.updateInvoice(id, invoice).then((response) => {
                history.push('/invoices')
            }).catch(error => {
                console.log(error)
            })
        }
        else {

        InvoiceService.createInvoice(invoice).then((response) =>{
            console.log(response.data)
            history.push('/invoice');
        }).catch(error => {
            console.log(error)
        })
        console.log(invoice);
        }
    }

    useEffect(() =>{
        InvoiceService.updateInvoice(id).then((response)=>{
            setElectric(response.data.electric)
            setWater(response.data.water)
            setService(response.data.service)
            setStatus(response.data.status)
            setDue(response.data.due)
            setCompanyId(response.data.companyId)
        }).catch(error => {
            console.log(error)
        })
    },)
    
    const title = () => {
        if(id) {
            return <h2 className="text-center">Update invoice</h2>
        }
        else {
            return <h2 className="text-center">Add invoice</h2>
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
                                    <label className="fore-label"> Electric:  </label>
                                    <input type="text" placeholder="Enter Electric" name = "electric" className="form-control" value={electric} onChange = {(e) => setElectric(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Water:  </label>
                                    <input type="text" placeholder="Enter Water" name = "water" className="form-control" value={water} onChange = {(e) => setWater(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Service:  </label>
                                    <input type="text" placeholder="Enter service" name = "service" className="form-control" value={service} onChange = {(e) => setService(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Status:  </label>
                                    <input type="text" placeholder="Enter  Status" name = "status" className="form-control" value={status} onChange = {(e) => setStatus(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Due:  </label>
                                    <input type="text" placeholder="Enter due" name = "due" className="form-control" value={due} onChange = {(e) => setDue(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Company Id:  </label>
                                    <input type="text" placeholder="Enter Company Id" name = "companyId" className="form-control" value={companyId} onChange = {(e) => setCompanyId(e.target.value)}></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateInvoice(e)}>Submit</button>
                                <a href ="/invoices" className="btn btn-danger"> Canel </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddInvoiceComponent