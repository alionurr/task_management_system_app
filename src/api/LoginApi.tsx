import { useMutation } from '@tanstack/react-query'

interface LoginData {
  email: string
  password: string
}

interface LoginResponse {
    token: string
}

const login = async (loginData: LoginData) => {
  const response = await fetch('http://localhost/api/login/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })

  if (!response.ok) {
    throw new Error('Bilgilerinizi kontrol edin ve tekrar deneyin!')
  }

  const data = await response.json()
  console.log(data)
  
  return data
}

export const useLogin = () => {
    return useMutation({
      mutationFn: login,
      onSuccess: (data: LoginResponse) => {
        localStorage.setItem('token', data.token)
      },
      onError: (error: Error) => {
        console.error('Login failed:', error)
      },
    
  })
}
