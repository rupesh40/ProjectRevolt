import axios from "axios";



export const register= async (data) =>{
    try{
        const {firstName,lastName,email,phoneNumber,password} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/gridStation/signup",
    data:{
        Name,
        email,
        workingTime,
        stationAdress,
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
