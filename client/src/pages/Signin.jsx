import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { signinImage } from '../assets';
import { Account } from 'appwrite';
import { client } from '../appwrite';
import { AuthContext } from '../context/Auth';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser, resetUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const account = new Account(client);
  const redirect = '/';

  async function onSignIn(e) {
    await account.createEmailSession(email, password);
    resetUser();
    navigate(redirect);
    e.preventDefault();
  }

  async function googleSignIn(e) {
    setTimeout(resetUser, 1000);
    const result = await account.createOAuth2Session('google', 'http://localhost:5173' + redirect, 'http://localhost:5173/failed');
    e.preventDefault();
  }

  const [show, setShow] = useState(false);

  function showPW() {
    document.getElementById("password").setAttribute("type", "text");
  }

  function hidePW() {
    document.getElementById("password").setAttribute("type", "password");
  }

  return (
    <div className='p-5 flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen'>
      <div className='bg-gradient-to-r from-[#280fb5] to-[#280fb5] p-5 rounded-md shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='flex items-center'>
          <h1 className='text-white font-bold text-3xl'>UnitySpace</h1>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <img src={signinImage} alt="" className='w-[500px] h-[425px] object-cover' />
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md shadow-lg flex justify-center items-center ">
            {/* Sign In form */}
            <form className='flex flex-col justify-center items-center gap-5 p-5 w-full' onClick={e => e.preventDefault()}>
              <h1 className='text-2xl text-center text-[#280fb5] font-bold'>Sign In</h1>
              {/* Email */}
              <div className='flex'>
                <MdEmail className='w-[20px] h-[20px] text-[#280fb5] absolute mt-2 ml-1 text-center' />
                <input
                  name='email'
                  type="email"
                  placeholder='Email'
                  className='w-[300px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className='flex'>
                <MdPassword className='w-[20px] h-[20px] text-[#280fb5] absolute text-center mt-2 ml-1' />
                <input
                  name='password'
                  type="password"
                  placeholder='Password'
                  id='password'
                  className='w-[300px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {show ?
                  <AiFillEyeInvisible className='w-[20px] h-[20px] text-[#280fb5] absolute text-center cursor-pointer mt-2 ml-[272px]'
                    onClick={() => {
                      setShow(false);
                      hidePW();
                    }} />
                  :
                  <AiFillEye className='w-[20px] h-[20px] text-[#13046b] absolute  text-center cursor-pointer mt-2 ml-[272px]' onClick={() => {
                    setShow(true);
                    showPW();
                  }} />}
              </div>

              {/* Sign In button */}
              <button
                onClick={onSignIn}
                className='w-[300px] h-[40px] rounded-md bg-[#280fb5] text-white font-bold hover:bg-[#160675] transition-all ease-in-out duration-300'>Sign In</button>
              <div className='flex flex-col justify-between items-center text-center gap-5'>
                <div className='flex flex-col justify-center items-center text-center gap-3'>
                  <p className='text-center text-black'>Sign In using : </p>
                  <div className='flex justify-center items-center gap-5'>
                    <FcGoogle onClick={googleSignIn} className='w-[30px] h-[30px] text-[#280fb5] hover:text-[#db4437] transition-all ease-in-out duration-300 cursor-pointer' />
                  </div>
                </div>
              </div>
              <p className='text-[#280fb5] font-medium'>Do not have an account ? <span className='text-[#280fb5] hover:text-gray-800 transition-all duration-300 ease-in-out '><Link to="/signup">Sign Up</Link></span> </p>
              <p className='font-medium text-[#280fb5] hover:underline cursor-pointer transition-all duration-150 ease-in-out'>Forgot Password ?</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
