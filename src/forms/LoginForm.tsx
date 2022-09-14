import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "redux/actionCreators/authActionCreators";
import { AppState } from "redux/store";

// interface ILoginFormData {
//     email: string,
//     password: string
// }

const LoginForm = () => {
   const [loginData, setLoginData] = useState({
    email: '',
    password: ''
   });

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const data = useSelector((state : AppState) => state.auth)

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
   setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  if(data){
    navigate('/')
  }


  return (
    <div>
      <div className="container mx-auto">
        <div className="grid justify-items-center mt-20 mb-10">
          
          
          <div className="border-2 border-gray-400 rounded p-12 bg-white">
            <form onSubmit={() => dispatch(login(loginData))}>
              <div className="space-y-10">
                
                <input
                  type="text"
                  name="email"
                  onBlur={handleInputChange}
                  placeholder="Username or Email"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1 focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400 md:text-base sm:text-sm  "
                />
                <br />
                <input
                  type="text"
                  name="password"
                  onBlur={handleInputChange}
                  placeholder="Password"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1 focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400 md:text-base sm:text-sm  "
                />
                <br />
                <button
                type="submit"
                value="submit"
                  className="bg-[#F63E7B] text-white font-[poppins] text-base font-light block py-3 w-96 rounded tracking-wide text-base font-normal"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="font-[poppins] text-center mt-2 text-base">Don’t have an account? <Link to="/register" className="text-[#F63E7B] underline">Register</Link></p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default LoginForm;