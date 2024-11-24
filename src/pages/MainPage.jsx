import React, { useEffect, useState } from 'react'
import MainBlock from '../components/mainBlock/MainBlock'
import { tasks } from '../data'
import { Outlet } from 'react-router-dom'
import { getTodoes } from '../api'
import { useUserContext } from '../contexts/hooks/useUser'

const MainPage = () => {
  

  return (
        <>
          <MainBlock  />
          <Outlet />
        </>
  
  )
}

export default MainPage
