import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import WidthContext from './context/WidthContext.tsx'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WidthContext>
        <App />
    </WidthContext>  
  </StrictMode>,
)
