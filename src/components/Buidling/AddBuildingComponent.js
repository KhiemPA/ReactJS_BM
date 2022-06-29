import React, { useEffect, useState } from "react";
import BuildingService from "../../service/BuildingService";
import {  useHistory, useParams } from "react-router-dom";
const AddBuildingComponent = () => {    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [owner, setOwner] = useState('')
    const history = useHistory()
    const {id} = useParams();

    const saveOrUpdateBuilding = (e) => {
        e.preventDefault();
        const building = { name, address, owner}

        if (id) {
            BuildingService.updateBuilding(id, building).then((response) => {
                console.log(response.data)
                history.push('/buildings')
            }).catch(error => {
                console.log(error)
            })
        }
        else {

        BuildingService.createBuilding(building).then((response) =>{
            console.log(response.data)
            history.push('/building');
            
        }).catch(error => {
            console.log(error)
        })
        console.log(building);
        }
    }


    useEffect (() => {
        BuildingService.updateBuilding(id).then((Response)=>{
        setName(Response.data.name)
        setAddress(Response.data.address)
        setOwner(Response.data.owner)
        }).catch(error => {
            console.log(error)
        })
    },)

    
    const title = () => {
        if(id) {
            return <h2 className="text-center">Update building</h2>
        }
        else {
            return <h2 className="text-center">Add building</h2>
        }
    }

  

    return (
        <div>
            <br></br>
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
                                    <label className="fore-label"> Address:  </label>
                                    <input type="text" placeholder="Enter address" name = "address" className="form-control" value={address} onChange = {(e) => setAddress(e.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fore-label"> Owner:  </label>
                                    <input type="text" placeholder="Enter owner" name = "owner" className="form-control" value={owner} onChange = {(e) => setOwner(e.target.value)}></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateBuilding(e)}>Submit</button>
                                <a href ="/buildings" className="btn btn-danger"> Canel </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddBuildingComponent