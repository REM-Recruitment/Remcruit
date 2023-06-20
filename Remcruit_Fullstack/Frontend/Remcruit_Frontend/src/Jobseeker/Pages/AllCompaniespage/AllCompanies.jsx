import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllCompanies.css';
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn';

const AllCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/employer/allEmployers/');
      if (response.ok) {
        const data = await response.json();
        setCompanies(data);
      } else {
        throw new Error('Failed to fetch companies');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substring(0, maxLength) + '...';
    }
  };

  return (
    <div>
      <NavbarSignedIn />
      <p className="company-count">Showing {companies.length} results</p>
   
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {companies.length > 0 && (
            <div className="allcompanies">
             
              {companies.map(company => (
                <div className="allcompaniesbox" key={company.id}>
                  <img className="companys_banner" src={company?.company_banner} alt="" />
                  {/* <div className="specific-company-page-header">
                    <img className='company_banner' src={company?.company_banner} alt="" />
                    </div> */}

                  <div className="specifics-companys-logo">
                    <img src={company?.company_logo} alt="" />
                  </div>
                  <div className="companys-names">
                    <h4>{company?.organisation_name}</h4>
                    <div className="companys-industry">
                      <p>{company?.industry}</p>
                    </div>
                    <p>{truncateDescription(company?.organisation_description, 100)}</p>
                    <Link to={'/specificCompany'} className="show-more-link">Check Available Offers</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default AllCompanies;
