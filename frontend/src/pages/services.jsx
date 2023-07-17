import React, { useEffect} from 'react'
import servicesBg from '../assets/servicesBack.jpg'
import { Avatar, Box, Grid } from '@mui/material'
import NavBar from '../components/Navbar'
import ServicesCard from '../components/ServicesCard'
/* import { useGetUserByIdQuery } from '../redux/userReducer' */
import { useGetLawyersQuery } from '../redux/userReducer'
import { useGetUserMutation } from '../redux/userReducer'
import { useNavigate } from 'react-router-dom'

const Services = () => {

  const {data, isLoading, isSuccess, isError} = useGetLawyersQuery()
  /* console.log(data?.length) */
  const navigate = useNavigate()
  const [getUser, {data:userId}] = useGetUserMutation('userData') // undefined, para que  funcione se tiene que ejecutar getUser
  const dataInLocalStorage = localStorage.getItem('usuario')
  const userCredentials = dataInLocalStorage? JSON.parse(dataInLocalStorage).accountType : null
  console.log("userType: ", userCredentials)
  useEffect( () => {
    if(!userCredentials) {
      navigate('/')
    }
  },[])

  return (
    <>
    {
      userCredentials?
      <Box sx={{position: 'relative', zIndex: '0', background: 'black', backgroundImage: `Url(${servicesBg})`, backgroundRepeat:"repeat", backgroundSize: 'cover', minHeight: '100vh'}} /* sx={{ minHeight: '200vh' ,backgroundImage: `Url(${servicesBg})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover'}} */>
        {/* <Avatar src={servicesBg} sx = {{borderRadius: '0', width: '100%', height: 'auto', zIndex: -1, position: 'absolute'}} /> */}
        <Box sx={{zIndex: '1'}}>
        <NavBar sx={{width: '100%'}}  />
        <Grid container sx={{marginTop: '3em', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'center', px: '5%'}}>
          {
            data?.length? 
            data.map((item) => <ServicesCard  key={item._id} item={item} />)
            :
            null
          }
        </Grid>
          {/* <Box sx={{height: '50em', color: 'white'}}> hola</Box> */}
        </Box>
      </Box>
      :
      null
    }
    </>
  )
}

export default Services