import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export function SignIn () {
    return (
    <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login Form</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <InputText id="email" type="email" className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <InputText id="password" type="password" className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md" />
                    </div>
                    <div className="flex justify-center">
                        <Button label="Submit" icon="pi pi-check" className='w-full p-1 mt-3' style={ { backgroundColor: '#1d4ed8', color: '#ffffff' } } />
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}