// instrcutor added classes 
export const addClasses = async addClassData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(addClassData),
    })
  
    const data = await response.json()
    return data
  }
  
// get all classes 
export const getAllClasses = async () =>{
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
  const data = await response.json();
  return data ;
}

//get filtered classes for instructor
export const getClasses = async email => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
  const data = await response.json()
  return data
}