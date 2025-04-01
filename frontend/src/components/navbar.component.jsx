import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import UserNavigationPanel from './userNavigationPanel.component';

import { UserContext } from '../App';

const Navbar = () => {

    const { userAuth: { profile_img, role } } = useContext(UserContext);

    const [userNavPanel, setUserNavPanel] = useState(false);

    const handleUserNavPanel = () => {
        setUserNavPanel(currentVal => !currentVal);
    }

    return (
        <>
            <nav className="navbar">
                <Link to='/' className='flex-none w-10'>
                    <i className={"fi fi-rr-" + (role ? 'admin' : 'user') + " text-3xl text-black"}></i>
                </Link>

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    {
                        !role && (
                            <Link to='/new-order'
                                className='hidden md:flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-200 p-3 px-4 rounded-lg transition'
                            >
                                <i className='fi fi-rr-edit'></i>
                                <p>New Order</p>
                            </Link>
                        )
                    }

                    <div className='relative' onClick={handleUserNavPanel}>
                        <button className='w-12 h-12 mt-1'>
                            <img src={profile_img} alt="" className='w-full h-full object-cover rounded-full' />
                        </button>

                        {
                            userNavPanel ? <UserNavigationPanel /> : null
                        }
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;
