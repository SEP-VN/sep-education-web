// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { Register } from "../../api/Authenticate";
// import { useState } from 'react';

const SignIn = () => {
  // const navigate = useNavigate();
  // const [inputName, setInputName] = useState(null);
  // const [inputPhoneNumber, setInputPhoneNumber] = useState(null);
  // const [inputEmail, setInputEmail] = useState(null);

  // const handleNameChange = (event) => {
  //   setInputName(event.target.value);
  // };

  // const handlePhoneNumberChange = (event) => {
  //   setInputPhoneNumber(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setInputEmail(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //    // Make the Axios call and store the customer ID
  //     Register(inputName, inputPhoneNumber, inputEmail)
    
  //   // Redirect to the "/tour-information" page
  //   navigate('/tour-information');
  // };

  return (
    <section className="">
      {/* <!-- Jumbotron --> */}
      
      <div className="container-fluid h-100">
  <iframe
    src="https://forms.gle/3rpvDNEcV5SVaT4K7"
    className="w-100"
    title="Feedback Form"
    style={{ height: '2780px' }}
  ></iframe>
</div>

  
    </section>
  )
}

export default SignIn;