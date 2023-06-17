import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { signinImage } from '../assets';
import { Account } from 'appwrite';
import { client } from '../appwrite';


const Signin = ({ setUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const account = new Account(client);

  const navigate = useNavigate();



  async function onSignIn(e) {
    await account.createEmailSession(email, password);
    e.preventDefault();
  }

  async function googleSignIn(e) {
    const result = account.createOAuth2Session('google', 'http://localhost:5173', 'http://localhost:5173/failed');
    console.log('From google sign in', result);
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
    <div className='p-5 flex justify-center items-center bg-cyan-400 min-h-screen'>
      <div className='bg-gradient-to-br from-[#13046b] to-[#0c0527] p-5 rounded-md shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='flex items-center'>
          <h1 className='text-white font-bold text-3xl'>UnitySpace</h1>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <img src={signinImage} alt="" className='w-[500px] h-[425px] object-cover' />
          <div className="bg-cyan-300 rounded-md shadow-lg flex justify-center items-center ">
            {/* Sign In form */}
            <form className='flex flex-col justify-center items-center gap-5 p-5 w-full' onClick={e => e.preventDefault()}>
              <h1 className='text-2xl text-center text-[#13046b] font-bold'>Sign In</h1>
              {/* Email */}
              <div className='flex'>
                <MdEmail className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-1 text-center' />
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
                <MdPassword className='w-[20px] h-[20px] text-cyan-600 absolute text-center mt-2 ml-1' />
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
                  <AiFillEyeInvisible className='w-[20px] h-[20px] text-cyan-600 absolute text-center cursor-pointer mt-2 ml-[272px]'
                    onClick={() => {
                      setShow(false);
                      hidePW();
                    }} />
                  :
                  <AiFillEye className='w-[20px] h-[20px] text-cyan-600 absolute  text-center cursor-pointer mt-2 ml-[272px]' onClick={() => {
                    setShow(true);
                    showPW();
                  }} />}
              </div>

              {/* Sign In button */}
              <button
                onClick={onSignIn}
                className='w-[300px] h-[40px] rounded-md bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-all ease-in-out duration-300'>Sign In</button>
              <div className='flex flex-col justify-between items-center text-center gap-5'>
                <div className='flex flex-col justify-center items-center text-center gap-3'>
                  <p className='text-center text-black'>Sign In using : </p>
                  <div className='flex justify-center items-center gap-5'>
                    <FcGoogle onClick={googleSignIn} className='w-[30px] h-[30px] text-cyan-600 hover:text-[#db4437] transition-all ease-in-out duration-300 cursor-pointer' />
                  </div>
                </div>
              </div>
              <p className='text-cyan-900 font-medium'>Do not have an account ? <span className='text-cyan-800 hover:text-gray-800 transition-all duration-300 ease-in-out '><Link to="/signup">Sign Up</Link></span> </p>
              <p className='font-medium text-[#13046b] hover:underline cursor-pointer transition-all duration-150 ease-in-out'>Forgot Password ?</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
