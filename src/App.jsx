import {Routes, Route} from 'react-router-dom'

import './styles/App.css';
import Layout from './components/Layout';
import {About, Blog, Contact, Home, Login, Pricing, Register, Service} from './pages';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
