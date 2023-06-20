
import './Registerpage2.css'
import "../../../pages/Login/Login.css";
import Frame2 from '../../../assets/Frame2.svg';

// import RegisterForm1 from "../../components/RegisterForm/RegisterForm";
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import '../Registerpage2/Registerpage2/'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterForm1 from "../../Components/RegisterForm1/RegisterForm1";
import RegisterForm2 from '../../Components/RegisterForm2/RegisterForm2';

import CityData from "../../../data/CityData.json"


function Registerpage2() {
  const [page, setPage] = useState(0)
    const navigate = useNavigate()

    const nextPage = () => {
      setPage((current)=>current + 1)
    }
    const goBack = () => {
      navigate(-1);
    }
    
    
    const prevPage = () => {
      if (page === 1 || page === 2) {
        setPage(page - 1)
      }
      else {
        goBack()
      }
    }
  
    
   

    

    
    

    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
        gender: "",
        terms_and_conditions: "",
        phone_number: "",
        university_name: "",
        subject_of_study: "",
        year_of_graduation: "",
        degree_classification: "",
        highest_qualification: "",
        industry: "",
        role_type: "",
       
        
        
      })
   

    const pageDisplay = () => {
        if (page === 0) {
          return <RegisterForm formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
          return <RegisterForm1 formData={formData} setFormData={setFormData} />
        }
        else  {
          return <RegisterForm2 formData={formData} setFormData={setFormData} />
        }
        
    }
    const testData = [
      { bgcolor: "#6a1b9a", completed: 60 },
      { bgcolor: "#00695c", completed: 30 },
      { bgcolor: "#ef6c00", completed: 53 },
    ];

    

    let handleSubmitted = async (e) => {
        e.preventDefault();
       

        try {
          let res = await fetch("http://127.0.0.1:8000/authentication/register/jobseeker/",
          
            {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData),
            });
          let resJson = await res.json();
          if (res.status === 201) {
            console.log(resJson)
            navigate('/jobseeker')
          } else {
            console.log(resJson)
            alert("something went wrong")
          }
        } catch (err) {
          console.log(err);
        }
        console.log(formData)
      };
      


  return (
  <div className='main-register-container-jobseeker'>
    
    <div className='left-register-side'>
    <div className="registerion-text">
           <h1>
            Looking to start your career?
            </h1>

            <h3>We’ve got your back</h3>

           <p>Browse through thousands of job listings, companies, organisations and internships. Start creating 
              connections with companies now.</p>
         </div>
         
    </div>
    <div className="right-register-side">
    <div className="backBtn" onClick={prevPage}>
               <FontAwesomeIcon icon={faChevronLeft} className="backIcon" style={{ color: "#CA61C3" }} />
               Back
              </div>
              
              
       
        
                <form onSubmit={handleSubmitted}>
                      {pageDisplay()}
                    

                {page===2 ? ( <input type="submit" value="Register" id="submit" /> ):
                (<div className="nextBtn" id="next">
                 <button className="buttons" onClick={nextPage} type='button'>Continue </button>
                 
                </div>)}



      </form>
    </div>
  </div>
  );
    }
   
        
   

          <div className="accounts">
                </div>




export default Registerpage2;


