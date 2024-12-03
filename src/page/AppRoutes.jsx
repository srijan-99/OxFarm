import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Yield from './Yield'
import Vent from './VentToken'
import MyPosition from './MyPosition'
import Dashboard from './Dashboard/Dashboard'
// import Farm from './Farm'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Landing />} />
          <Route path='/co-dapp/0x-farm' element={<Yield />} />
          <Route path='/0x.farm' element={<Vent />} />
          <Route path='/0x.farm/my-positions' element={<MyPosition/>}/>
          <Route path='/0x.farm/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>

    </>

  )
}

export default AppRoutes