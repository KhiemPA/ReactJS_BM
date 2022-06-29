import React, { useEffect, useState } from "react";
import InvoiceService from "../../service/InvoiceService";

const InvoiceComponent = () => {

    const [invoices, setInvoices] = useState([])

    useEffect(() => {

        getInvoices();
    }, [])

    const getInvoices = () => {
        InvoiceService.getInvoices().then((response) => {
            setInvoices(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

const deleteInvoice = (invoiceId) => {
    InvoiceService.deleteInvoice(invoiceId).then((Response) => {
        getInvoices();
    }).catch(error => {
        console.log(error);
    })
}

        return (
            <div>
                <h1 className="text-center"> Invoices List</h1>
                <a href= "/add-invoice" className="btn btn-primary mb-2"> Add Invoice</a>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Invoice id</td>
                            <td>Electric</td>
                            <td>Water</td>
                            <td>Service</td>
                            <td>Status</td>
                            <td>Due</td>
                            <td>Company </td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            invoices.map(
                                invoice => 
                                <tr key = {invoice.id}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.electric}</td>
                                    <td>{invoice.water}</td>
                                    <td>{invoice.service}</td>
                                    <td>{invoice.status}</td>
                                    <td>{invoice.due}</td>
                                    <td>{invoice.company.name}</td>
                                    <td>
                                        <a className="btn btn-info" href ={`/edit-invoice/${invoice.id}`}> Update</a>
                                        <button className="btn btn-danger" onClick={() => deleteInvoice(invoice.id)} style={{marginLeft:"10px"}}> Delete</button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


export default InvoiceComponent