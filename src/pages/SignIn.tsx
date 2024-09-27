import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import Input from '../components/Input'
import { useLogin } from '../api/LoginApi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

type FormFields = z.infer<typeof schema>

const SignIn = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
      let isAuth = localStorage.getItem('token')
      if (isAuth && isAuth !== 'undefined') {
        navigate('/')
      }
    }, [])
    
    const {
      control,
      handleSubmit,
      formState: {},
    } = useForm<FormFields>({
      resolver: zodResolver(schema),
      defaultValues: {
        email: '',
        password: '',
      },
    })
  
    const {mutate:loginMutation, status, error} = useLogin()

    const onSubmit = (data: FormFields) => {
      console.log('Form Data:', data)
      loginMutation(data, {
        onSuccess: () => {
          navigate('/')
        }
      })
    }
  
    const isButtonDisabled = status === 'pending'
  
    return (
      <>
        <div className='flex justify-center items-center h-screen bg-gray-100'>
          <div className='p-6 bg-white shadow-md rounded-2xl w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Login Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label='Email'
                name='email'
                type='email'
                control={control}
              />

              <Input
                label='Password'
                name='password'
                type='password'
                control={control}
              />

              <div className='flex justify-center'>
                <Button
                  label='Submit'
                  icon='pi pi-check'
                  disabled={isButtonDisabled}
                  className='w-full p-1 mt-3'
                />
              </div>
              {error && (
                <div className='text-red-500 mt-5 text-center'>
                  {error?.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </>
    )
}

export default SignIn;