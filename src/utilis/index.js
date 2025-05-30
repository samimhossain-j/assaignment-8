import { Slide, toast } from "react-toastify"

export const getFavorite = () =>{
    const favorite = localStorage.getItem('favorite')
    if(favorite) return  JSON.parse(favorite)
        return []
}


export const addAppointment = lawyer =>{
    console.log(lawyer)
    const favorite = getFavorite()
    console.log(favorite)
    const isExist = favorite.find(p=>p.id ===lawyer.id)
    if(isExist) return toast.success('Appointment already scheduled for today')
    favorite.push(lawyer)
  localStorage.setItem('favorite', JSON.stringify(favorite))
     toast.success(`Appointment scheduled for ${lawyer.name} successfully`, {
          position: "top-right",
          autoClose: 4000,
          theme: "light",
          transition: Slide,
        });
}

export const removeFavorite = id =>{
    const favorite = getFavorite()
   
    const remainingFavorite =favorite.filter(lawyer =>lawyer.id!==id)
    localStorage.setItem('favorite', JSON.stringify(remainingFavorite))
}