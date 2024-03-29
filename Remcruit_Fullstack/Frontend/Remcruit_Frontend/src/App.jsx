import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router';
// import 'font-awesome/css/font-awesome.min.css';

// import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from '../src/pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import EmployerRegister from './Employer/Pages/Register/register';
import AboutUs from './pages/AboutUs/AboutUs'
import HomePage from './Jobseeker/Pages/Home/homePage';
import Faq from './pages/Faq/Faq';
import Terms from './pages/Legal/LegalPage';
import JobseekerRegisterpage2 from './Jobseeker/Pages/Registerpage2/Registerpage2'
// import JobseekerRegisterpage3 from './Jobseeker/Pages/Registerpage3/Registerpage3'
import JobseekerRegister from './Jobseeker/Pages/Register/Register'
import EmployerLandingPage from './Employer/Pages/Landing/LandingPage';
import AuthContext, { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import JobApplication from './Jobseeker/Pages/JobApplication/components/JobApplication';
import JobPostSummary from './Employer/Pages/jobPostSummary/JobPostSummary';
import { JobSeekerProvider } from './context/JobSeekerContext';
// import Forgotpassword from './pages/Forgotpassword/Forgotpassword'
// import Checkemail from './pages/checkemail/Checkemail';


import { FormProvider } from './context/FormContext';
import JobPost from './Employer/Pages/JobPost/components/JobPost';
import { CompanyProvider } from './context/CompanyContext';
import Profile from './Jobseeker/Pages/Profile/Profile';
import Dashboard from './Employer/Pages/dashboard/Dashboard';
import SpecificJobs from './Jobseeker/Pages/SpecificJobsPage/SpecificJobs';
// import ContactUs from './pages/contactus/contactus';
import Myjobspage from './Jobseeker/Pages/Myjobspage/Myjobspage';
import JobSeekerRoute from './utils/JobSeekerRoute';
import EmployerRoute from './utils/EmployerRoute';
import JobApplicationReview from './Jobseeker/Pages/JobApplication/components/JobApplicationReview';
import SpecificCompanyPage from './Jobseeker/Pages/SpecificCompanyPage/SpecificCompanyPage';
import Testing from './pages/Testing/Testing';
// import Forgotpassword from './components/Forgotpassword/Forgotpassword'
import terms from './pages/Legal/LegalPage';
import Legal from './pages/Legal/Term';
import Privacy from './pages/Legal/Privacy';
import Cookies from './pages/Legal/Cookies';
import Term from './pages/Legal/Term';
import ContactUs from './pages/contactus/ContactUs';
import NavbarSignedIn from './Jobseeker/Components/navbarSignedin/NavbarSignedIn';
import { useContext } from 'react';
import Notifications from './Jobseeker/Pages/Notifications/Notifications';




function App() {  
  const isLoggedIn = localStorage.getItem('authTokens')

  const getSeeker = JSON.parse(localStorage.getItem("jobseeker"))
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <FormProvider>
            <JobSeekerProvider>
              <CompanyProvider>
                {
                  isLoggedIn ? <NavbarSignedIn /> : <Navbar/>
                }
  
                <Routes>
                  <Route path='/' exact element={<LandingPage />} />
                  <Route path='*' element={<div>Page Not Found</div>} />
                  <Route path='/employer' exact element={<EmployerLandingPage />} />
                  <Route path='/login' element={<Login />} />
                  
                  <Route path='/Faq' element={<Faq/>}/>
                  <Route path='/Term' element={<Term/>}/>
                  <Route path='/Privacy' element={<Privacy/>}/>
                  <Route path='/Cookies' element={<Cookies/>}/>
                  {/* <Route path='/Forgotpassword' component={Forgotpassword } /> */}
                  <Route path='/employer/register' element={<EmployerRegister />} />
                  <Route path='/review' element={<JobApplicationReview />} />
                  <Route element={<AboutUs />} path='/aboutus' />
                  
                  <Route element={<PrivateRoute />} >

                  </Route>
                  
                  <Route element={<JobSeekerRoute />} >
                    <Route element={<Profile />} path='/profile' />
                    <Route element={<JobApplication />} path='/jobapplication' />
                    <Route element={<HomePage />} path='/home' />
                    <Route element={<SpecificJobs />} path='/specificjobs' />
                    <Route element={<Myjobspage />} path='/Myjobspage' />
                    <Route element={<SpecificCompanyPage />} path='/specificCompany' />
                    <Route element={<Testing />} path='/testing' />
                    <Route element={<Notifications />} path='/notification' />

                  </Route>
                  <Route element={<EmployerRoute />} >
                    <Route path='/employer/job/post' element={<JobPost />} />
                    <Route path='/employer/job/post/summary' element={<JobPostSummary />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                  </Route>
                  <Route path='/ContactUs' element={<ContactUs />} />
                  <Route path='/jobseeker/register' element={<JobseekerRegister />} />
                  <Route path='/jobseeker/registerpage2' element={<JobseekerRegisterpage2 />} />
                </Routes>
              </CompanyProvider>

            </JobSeekerProvider>
          </FormProvider>
        </AuthProvider >
      </Router >

    </div >
  );
}

export default App
