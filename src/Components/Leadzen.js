import React , { useState , useEffect } from 'react';
import "./Leadzen.css";
import axios from 'axios';

const Leadzen = () => {

    const[apiData , setApiData] = useState("");

    const [noOfElement , setNoOfElement] = useState(5);

    const showMoreItems = () =>{
        setNoOfElement((prevValue=>prevValue + 5))
    }

    useEffect(() => {
        async function callapi () {
            const apiResult = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(apiResult);
            setApiData(apiResult.data)
        }
        callapi()
        console.log(apiData);
      } , [apiData]);


  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row">

               { apiData && 

                (apiData.slice(0, noOfElement).map)((apiDetails , index) => {
                return(
                    <div className="card mb-4">
                    <div className="card-body">
    
    
                    <div className="row mt-4">
    
    <div className="col-lg-3 col-md-3 col-sm-12">
        <p>{apiDetails.company.name}</p>
    </div>
    
    <div className="col-lg-2 col-md-2 col-sm-12">
        <p><strong>Contact</strong></p>
        <p>{apiDetails.name}</p>
    </div>
    
    <div className="col-lg-2 col-md-2 col-sm-12">
        <p><strong>Street</strong></p>
        <p>{apiDetails.address.street}</p>  
    </div>
    
    <div className="col-lg-2 col-md-2 col-sm-12">
        <p><strong>City</strong></p>
        <p>{apiDetails.address.city}</p>
    </div>
    
    <div className="col-lg-3 col-md-3 col-sm-12">
    <p>
            {/* <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a> */}
            <button class="btn btn-primary leadzen-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                View Details
            </button>
    </p>
           
    </div>
    
    <div className="col-lg-12">
    <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <div className="row">
                    <div className="col-lg-12">
                        <p><strong>Description</strong></p>
                        <p>{apiDetails.company.name} : </p>

                        <p>{apiDetails.company.catchPhrase}</p>
                    </div>
    
                    <div className="col-lg-4">
                        <p><strong>Contact Person</strong></p>
                        <p>{apiDetails.name}</p>
    
                        <p><strong>Designation</strong></p>
                        <p>{apiDetails.company.catchPhrase}</p>
    
                        <p><strong>Emails</strong></p>
                        <p>{apiDetails.email}</p>
    
                        <p><strong>Phones</strong></p>
                        <p>{apiDetails.address.zipcode}</p>
                    </div>
    
                    <div className="col-lg-8">
                    <p><strong>Address</strong></p>
                        <p>{apiDetails.address.street} {apiDetails.address.suite} {apiDetails.address.city}</p>
    
                        <p><strong>City</strong></p>
                        <p>{apiDetails.address.city}</p>
    
                        <p><strong>State </strong></p>
                        <p>Maharastra</p>
    
                        <p><strong>Country</strong></p>
                        <p>India</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
    </div>
                    </div>
                </div>
                )
                })

                }


<nav aria-label="Page navigation example">
  <ul className="pagination leadzen-pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item" onClick={showMoreItems}><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
       
        </div>
    </div>
    </>
  )
}

export default Leadzen;