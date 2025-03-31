import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

    const { userAuth: { profile_img, role } } = useContext(UserContext);

    return (
        <>
            <nav className="navbar">
                <Link to='/' className='flex-none w-10'>
                    <i className={"fi fi-rr-" + (role ? 'admin' : 'user') + " text-3xl text-black"}></i>
                </Link>

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    <div className='relative'>
                        <button className='w-12 h-12 mt-1'>
                            <img src={profile_img} alt="" className='w-full h-full object-cover rounded-full' />
                        </button>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;
