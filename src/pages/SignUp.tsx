import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button'
import Input from '../components/Input';
import { useRegister } from '../api/RegisterApi';
import { useNavigate } from 'react-router-dom';


const schema = z.object({
    name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
    email: z.string().email('Geçerli bir e-posta adresi girin.'),
    password: z.string().min(6, 'Şifre en az 6 karakter olmalı.'),
    role: z.enum(['admin', 'user'])
});

type FormFields = z.infer<typeof schema>
  
const SignUp = () => {
    
  const navigate = useNavigate()
    const {
      control,
      handleSubmit,
      formState: {},
    } = useForm<FormFields>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: '',
        email: '',
        password: '',
        role:'user'
      },
    })

    const { mutate: registerMutation, status, error } = useRegister()
  
    const onSubmit = (data: FormFields) => {
      console.log('Form Data:', data)
      registerMutation(data, {
        onSuccess: () => {
          navigate('/users')
        }
      })
    }
  
    const isButtonDisabled = status === 'pending'

    return (
      <>
        <div className='flex justify-center items-center h-screen bg-gray-100 rounded-2xl'>
          <div className='p-6 bg-white shadow-md rounded-lg w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-4 text-center'>
              User Registration Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label='Name' name='name' type='name' control={control} />

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

export default SignUp