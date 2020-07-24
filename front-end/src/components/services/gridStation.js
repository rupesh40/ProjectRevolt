import axios from "axios";
// import Geocode from "react-geocode";

// Geocode.setApiKey("AIzaSyDTzcXNxs3iT1zZUBHtRWdY8ISgSHz09EI");
// Geocode.setLanguage("en");
//GET https://us1.locationiq.com/v1/search.php?key=YOUR_PRIVATE_TOKEN&q=SEARCH_STRING&format=json
const token = "pk.51fdf5cc6e76763843ff2fdf75f22330"
const address = "NH161A Waghala Nanded-Waghala Nanded Maharashtra 431600 India "
// //address": {
//     "road": "NH161A",
//     "suburb": "Waghala",
//     "city": "Nanded-Waghala",
//     "county": "Nanded",
//     "state_district": "Nanded",
//     "state": "Maharashtra",
//     "postcode": "431600",
//     "country": "India",
//     "country_code": "in"
// },


export const register= async (data) =>{
    try{
        const {Name,
            email,
            workingTime,
            stationAddress,
            stationNumber,
            noOfChargingPoint} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/gridStation/signup",
    data:{
        Name,
        email,
        workingTime,
        stationAddress,
        stationNumber,
        noOfChargingPoint
    }

})
console.log(res)
return res
    }
    catch(err){
        console.log(err.response.data);

    }
}

// export const geo = ()=>{
//     Geocode.fromAddress("Eiffel Tower").then(
//     response => {
//       const { lat, lng } = response.results[0].geometry.location;
//       console.log(lat, lng);
//     },
//     error => {
//       console.error(error);
//     }
//   )
// }

export const geom = async()=>{
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/search.php?key=YOUR_PRIVATE_TOKEN&q=Empire%20State%20Building&format=json",
    "method": "GET"
  }
  const res = await axios({
    method:"GET",
    url:`https://us1.locationiq.com/v1/search.php?key=${token}&q=${address}&format=json`
  })
  console.log(res)
}