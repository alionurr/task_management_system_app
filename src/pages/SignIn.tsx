import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

type FormFields = z.infer<typeof schema>

export function SignIn () {
    
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormFields>({
      resolver: zodResolver(schema),
      defaultValues: {
        email: '',
        password: '',
      },
    })

    const onSubmit = (data: FormFields) => {
      console.log('Form Data:', data)
    }

    return (
      <>
        <div className='flex justify-center items-center h-screen bg-gray-100'>
          <div className='p-6 bg-white shadow-md rounded-2xl w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Login Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <InputText
                      id='email'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        console.log(e.target.value)
                      }}
                      type='email'
                      className='w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'
                    />
                  )}
                />
                {errors.email && (
                  <p className='text-red-500'>{errors.email.message}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                    <InputText
                        id='password'
                        {...field}
                        onChange={(e) => {
                            field.onChange(e)
                            console.log(e.target.value)
                        }}
                        type='password'
                        className='w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md' />                    
                    )}
                />
                {errors.password && (
                  <div className='text-red-500 mt-1'>
                    {' '}
                    {errors.password.message}{' '}
                  </div>
                )}
              </div>
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