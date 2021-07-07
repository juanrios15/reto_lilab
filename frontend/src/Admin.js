import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';
import Solicitudes from './Components/Admin';

function Admin() {
  const [appState, setAppState] = useState({
    solicitudes: null,
  })
  useEffect(() => {
    axiosInstance.get('solicitudes/').then((res) => {
			const AllSolicitudes = res.data;
			setAppState({ solicitudes: AllSolicitudes });
			console.log("res.data", res.data);
    });
  }, [setAppState])
  return (
    <div className="App">
        <h1>Ultimas Solicitudes</h1>
        <Solicitudes solicitudes={appState.solicitudes}/>
    </div>
  )
}

export default Admin;
