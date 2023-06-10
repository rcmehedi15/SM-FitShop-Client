// current user
export const saveUser = user => {
    const currentUser = {
        email: user.email,
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

// instructor role
export const instructorRole = email => {
    const currentUser = {
      role: 'instructor',
    }
  
    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }
 