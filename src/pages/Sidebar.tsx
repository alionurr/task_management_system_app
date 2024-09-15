import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import SignUp from './SignUp'
import NotFound from './NotFound';

const Sidebar = () => {
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-gray-100 text-white p-4 m-4 rounded-2xl">
                <ul className='space-y-1'>
                    <li>
                        <Link to='/' 
                        className='text-center text-2xl block font-medium text-gray-700 hover:text-blue-600 p-2 rounded-lg transition duration-200'>
                            TMS
                        </Link>
                    </li>
                    <li> 
                        <Link to='/' 
                        className="block text-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 p-2 rounded-lg transition duration-200"> 
                        <span className="pi pi-home mr-2"></span> Home
                        </Link>
                    </li>
                    <li> 
                        <Link to='/admin/sign-up' 
                        className="block text-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 p-2 rounded-lg transition duration-200"> 
                        <span className='pi pi-sign-in mr-2'></span> Sign Up User
                        </Link> 
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/admin/sign-up' element={<SignUp />} />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </div>
        </div>
    );
}

export default Sidebar