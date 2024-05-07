import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"
import AuthChecker from "./auth/AuthChecker"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        { routes.map((route: any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected ? (
              <AuthChecker>
                  <route.component />
              </AuthChecker>
              ) : (
                <route.component />
              )
            } />
        )) }
      </Routes>
    </BrowserRouter>
  )
}

export default App
