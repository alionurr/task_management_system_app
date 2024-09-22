enum Role {
    Admin= 'Admin',
    User= 'User'
}

interface User {
  id: number
  name: string
  email: string
  role: Role
}

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost/api/users/', {
        method: 'GET',
        headers: {        
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    })
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}