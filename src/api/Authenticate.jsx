import axios from "axios";

const Register = (inputName,inputPhoneNumber,inputEmail) => {
   axios
     .post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_CUSTOMER}`,{
      "name": inputName,
      "email": inputEmail,
      "phoneNumber": inputPhoneNumber})
     .then((response) => { 
      console.log(response.data)
      // Assuming your response contains a customer object with a customerID property
      const customerId = response.data.content.customer._id;

      // Store the customerID locally, e.g., in localStorage
      localStorage.setItem('customerId', customerId);
       
     })
     .catch((error) => {
       console.log("Error", error);
     });
 };

 
export { Register };