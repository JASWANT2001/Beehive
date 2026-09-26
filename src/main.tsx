import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/style.css'
import './styles/home.css'
import './styles/about.css'
import './styles/services.css'
import './styles/service.css'
import './styles/successStories.css'
import './styles/contact.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
