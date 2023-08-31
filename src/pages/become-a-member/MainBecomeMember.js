import React from 'react'
import Member from './Member'
import NavBar from '../../components/NavBar'
import Features from './Features'
import Form from './Form'
import Testimonial from './Testimonial'
import Footer from '../../components/Footer'

const BecomeMember = () => {
  return (
    <div><NavBar/>
        <Member/>
        <Features/>
        <Form/>
        <Testimonial/>
        <Footer/>
        </div>
  )
}

export default BecomeMember