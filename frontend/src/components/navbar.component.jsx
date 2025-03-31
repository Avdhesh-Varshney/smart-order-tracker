import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

    const { userAuth, userAuth: { access_token, profile_img, role } } = useContext(UserContext);

    return (
        <>
            <nav className="navbar">
                <Link to='/' className='flex-none w-10'>
                    <i className="fi fi-rr-user text-3xl text-black"></i>
                </Link>

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    {
                        access_token ?
                            <div className='relative'>
                                <button className='w-12 h-12 mt-1'>
                                    <img src={profile_img} alt="" className='w-full h-full object-cover rounded-full' />
                                </button>
                            </div>
                            :
                            <>
                                <Link className='bg-black text-white py-2 px-5 rounded-full hover:bg-gray-800 transition' to='/login'>
                                    Login
                                </Link>
                                <Link className='bg-gray-200 text-gray-800 py-2 px-5 rounded-full hidden md:block hover:bg-gray-300 transition' to='/register'>
                                    Register
                                </Link>
                            </>
                    }
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;
