
import React, { useEffect, useState } from "react";
import BuildingService from "../../service/BuildingService";




const BuildingComponent = () => {
    const [buildings,setBuildings] = useState([])
    useEffect(() => {
        getBuildings();
    },[])
    const getBuildings = () => {
        BuildingService.getBuildings().then((Response) => {
            setBuildings(Response.data)
            console.log(Response.data);
        }).catch(error => {
            console.log(error);
        })
    }


const deleteBuilding = (buildingId) => {
    BuildingService.deleteBuilding(buildingId).then((Response) => {
        getBuildings();
    }).catch(error => {
        console.log(error);
    })
}


        return (
            <div className="container">
                <h1 className="text-center"> Buildings List</h1>

                <a href= "/add-building" className="btn btn-primary mb-2"> Add Building</a>

                <table className="table table -bordered table-striped">
                    <thead>
                        <tr>
                            <td>Building id</td>
                            <td>Name</td>
                            <td>Address</td>
                            <td>Owner</td>
                            <td>Action </td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            buildings.map(
                                building => 
                                <tr key = {building.id}>
                                    <td>{building.id}</td>
                                    <td>{building.name}</td>
                                    <td>{building.address}</td>
                                    <td>{building.owner}</td>
                                    <td>
                                        <a  className="btn btn-info" href={`/edit-building/${building.id}`}> Update</a>
                                        <button className="btn btn-danger" onClick={() => deleteBuilding(building.id)} style={{marginLeft:"10px"}}> Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }




export default BuildingComponent