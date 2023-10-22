import axios from "axios";

const TourRegister = (inputPlace,inputDate,inputSubject,inputNumPerson) => {
   axios
     .post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_TOUR_REGISTRATION}`,{
      "customerId": localStorage.getItem('customerId'),
      "place": inputPlace,
      "date": inputDate,
      "subject": inputSubject,
      "numPerson": inputNumPerson
    })
     .then((response) => { 
      console.log("yes")
      console.log(response.data)
       
     })
     .catch((error) => {
       console.log("Error", error);
     });
 };

 
export { TourRegister };