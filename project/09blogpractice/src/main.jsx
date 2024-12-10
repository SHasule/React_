
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from "./context/Appcontext"

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
        <App />
  </AppContextProvider>

  
)