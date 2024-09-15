import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button'
import { ErrorMessage } from '@hookform/error-message';
import Input from '../components/Input';


const schema = z.object({
    name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
    email: z.string().email('Geçerli bir e-posta adresi girin.'),
    password: z.string().min(6, 'Şifre en az 6 karakter olmalı.')
});

type FormFields = z.infer<typeof schema>
  
const SignUp = () => {
    
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormFields>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: '',
        email: '',
        password: '',
      },
    })

    const onSubmit = (data: FormFields) => {
      console.log('Form Data:', data)
    }

    return (
      <>
        <div className='flex justify-center items-center h-screen bg-gray-100 rounded-2xl'>
          <div className='p-6 bg-white shadow-md rounded-lg w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-4 text-center'>
              User Registration Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label='Name' name='name' type='name' control={control} />
              <ErrorMessage
                errors={errors}
                name='name'
                render={({ message }) => (
                  <div className='text-red-500'>{message}</div>
                )}
              />
              <Input
                label='Email'
                name='email'
                type='email'
                control={control}
              />
              <ErrorMessage
                errors={errors}
                name='email'
                render={({ message }) => (
                  <div className='text-red-500'>{message}</div>
                )}
              />
              <Input
                label='Password'
                name='password'
                type='password'
                control={control}
              />
              <ErrorMessage
                errors={errors}
                name='password'
                render={({ message }) => (
                  <div className='text-red-500'>{message}</div>
                )}
              />
              <div className='flex justify-center'>
                <Button
                  label='Submit'
                  icon='pi pi-check'
                  className='w-full p-1 mt-3'
                  style={{ backgroundColor: '#1d4ed8', color: '#ffffff' }}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    )
}

export default SignUp