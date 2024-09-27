import { useMutation } from '@tanstack/react-query'

enum Role {
  Admin = 'admin',
  User = 'user',
}

interface RegisterData {
  name: string
  email: string
  password: string
  // role: Role
}

interface RegisterResponse {
  name: string
  email: string
  password: string
  role: Role
}

const register = async (registerData: RegisterData): Promise<RegisterResponse> => {
  const response = await fetch('http://localhost/api/users/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: JSON.stringify(registerData),
  })

  if (!response.ok) {
    throw new Error('Kullanıcı oluştururken hata oluştu!')
  }

  const data = await response.json()
  console.log(data)
  
  return data
}

export const useRegister = () => {
    return useMutation({
      mutationFn: register,
      // onSuccess: (data: RegisterResponse) => {
        
      // },
      // onError: (error: Error) => {
      //   console.error('Login failed:', error)
      // },
    
  })
}
