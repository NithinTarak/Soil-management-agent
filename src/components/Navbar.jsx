import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-12 bg-zinc-900 flex justify-between mix-blend-normal'>
        <h1 className='font-bold text-white p-3 text-center text-sm md:text-xl'>Soil Farming Agent</h1>
        <div className="flex justify-evenly gap-5 p-3 mr-5">
            <Link className='font-bold text-white text-center text-xl' to={"/users/register"}>User</Link>
            <Link className='font-bold text-white text-center text-xl' to={"/admin"}>Admin</Link>
        </div>
    </div>
  )
}

export default Navbar