import React, { useState, useEffect } from 'react'
import { FaFacebook, FaUser, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Account, ID } from 'appwrite'
import { client } from '../appwrite'
import jwt_decode from 'jwt-decode'


const Signup = ({ user, setUser }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const account = new Account(client);

  async function onSignUp(e) {
    // await account.create(ID.unique(), email, password, username)
    // e.preventDefault();
  }

  const navigate = useNavigate();

  const onSuccessSignup = (res) => {
    var userObj = jwt_decode(res.credential);
    setUser(userObj);
    navigate('/');
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "103320765379-rl7hj6navljqs6kb4cncj12pp8nrerr5.apps.googleusercontent.com",
      callback: onSuccessSignup,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large", text: "continue_with", shape: "rectangular" }
    );
  }, [])


  const [show, setShow] = useState(false);

  function showPW() {
    document.getElementById("password").setAttribute("type", "text");
    // document.getElementById("confirm-password").setAttribute("type", "text");
  }

  function hidePW() {
    document.getElementById("password").setAttribute("type", "password");
    // document.getElementById("confirm-password").setAttribute("type", "password");
  }

  return (
    <div className='p-5 flex justify-center items-center bg-cyan-400 min-h-screen'>
      <div className='bg-gradient-to-br from-[#13046b] to-[#0c0527] p-5 rounded-md shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='flex items-center w-full justify-center'>
          <h1 className='text-white text-3xl font-bold'>UnitySpace</h1>
        </div>
        <div className='flex justify-center items-center gap-5 w-full'>
          <div className='flex flex-col justify-between items-center text-center gap-16 w-1/2'>
            <h1 className='text-3xl text-center text-white font-bold'>Welcome</h1>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
              <p className='text-center text-white'>Sign Up using : </p>
              <div className='flex justify-center items-center gap-5'>
                <div id="googleBtn">

                </div>
              </div>
            </div>
            <p className='text-cyan-300 font-medium'>Already have an acccount ? <span className='text-cyan-600 hover:text-cyan-700 transition-all duration-300 ease-in-out '><Link to="/signin">Sign In</Link></span> </p>
          </div>
          <div className="bg-cyan-300 rounded-md shadow-lg w-2/3">
            {/* Sign Up form */}
            <form className='flex flex-col justify-center items-center gap-5 p-5' onSubmit={e => e.preventDefault()}>
              <h1 className='text-2xl text-center text-[#13046b] font-bold'>Sign Up</h1>

              {/* Name */}
              <div className='flex gap-2'>
                <FaUser className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-1 text-center' />
                <input
                  name='name'
                  type="text"
                  placeholder='Full Name'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className='flex'>
                <MdEmail className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-1 text-center' />
                <input
                  name='email'
                  type="email"
                  placeholder='Email'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              {/* New Password */}
              <div className='flex'>
                <MdPassword className='w-[20px] h-[20px] text-cyan-600 absolute text-center mt-2 ml-1' />
                <input
                  name='password'
                  type="password"
                  placeholder='Password'
                  id='password'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />

                {show ?
                  <AiFillEyeInvisible className='w-[20px] h-[20px] text-cyan-600 absolute text-center cursor-pointer mt-2 ml-[322px]'
                    onClick={() => {
                      setShow(false);
                      hidePW();
                    }} />
                  :
                  <AiFillEye className='w-[20px] h-[20px] text-cyan-600 absolute  text-center cursor-pointer mt-2 ml-[322px]' onClick={() => {
                    setShow(true);
                    showPW();
                  }} />}
              </div>

              {/* Submit button */}
              <button
                onClick={onSignUp}
                className='w-[350px] h-[40px] rounded-md bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-all ease-in-out duration-300'
              >Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
