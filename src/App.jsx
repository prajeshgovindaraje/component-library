
import BadgePage from './pages/BadgePage'
import CardPage from './pages/CardPage'
import BannerPage from './pages/BannerPage'
import TestimonialPage from './pages/TestimonialPage'


import Banner from './components/Banner'
import Header from './components/Header'


import { BrowserRouter,Route,Routes } from 'react-router'


export default function App(){
  return(
    <>

    <BrowserRouter>

    <Routes>
 

    <Route path="/" element={<Header/>}>
      <Route index element={<BadgePage/>} />
      <Route path="banner" element={<BannerPage/>}/>
      <Route path="card" element={<CardPage/>}/>
      <Route path="testimonial" element={<TestimonialPage/>}/>
    </Route>
    

    
    </Routes>
    
    
    </BrowserRouter>

      

    </>

  )
}