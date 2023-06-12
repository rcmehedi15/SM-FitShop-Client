// current user
export const saveUser = user => {
  const currentUser = {
    userName: user.displayName,
    email: user.email,
    userPhoto: user?.photoURL,
  }
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())

}

// instructor role
export const instructorRole = email => {
  const currentUser = {
    role: 'instructor'
  }

  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then(res => res.json())
}

// get role
export const getRole = async email => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const user = await response.json();
    return user?.role;
  } catch (error) {
    console.error('Error:', error);
    
  }
};
