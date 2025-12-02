import React, { useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';


const Logout =()=>{
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    window.dispatchEvent(new Event('authStateChanged'))
  }
  useEffect(() => {
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("authStateChanged"));
  navigate("/login", { replace: true });
}, []);

return (
  <div className='flex flex-col items-center justify-center h-full'>
    <button
      onClick={handleLogout}
      className='flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition'>
      <FaSignOutAlt className='mr-2' />
      Logout
      </button>
      <p className='mt-4 text-gray-600'>
        Click the button above to log out of your account.    

      </p>
  </div>
)

}
export default Logout;