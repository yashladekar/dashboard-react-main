import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function SignUp() {

  const[signData,setSignData]=useState({email:"",password:"",name:""})
  function handleRegister(e){
    e.preventDefault();
    console.log(signData);
    axios.post('http://localhost:3005/user/signup', signData) 
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }
  return (
    <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
           
           
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              onChange={(e)=>setSignData({...signData,email:e.target.value})}
              value={signData.email}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Name
            </Typography>
            <Input
              onChange={(e)=>setSignData({...signData,name:e.target.value})}
              value={signData.name}
              size="lg"
              placeholder="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />



<Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              onChange={(e)=>setSignData({...signData,password:e.target.value})}
              value={signData.password}
              type="password"
              size="lg"
              placeholder="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

          </div>
          
          <Button 
          onClick={(e)=>handleRegister(e)}
          className="mt-6" fullWidth>
            Register Now
          </Button>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>

      </div>
    </section>

  );
}

export default SignUp;
