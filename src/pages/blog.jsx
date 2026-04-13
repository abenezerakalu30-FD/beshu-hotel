import React from 'react'
import Header from '../components/Header/Header'
import PageHeader from '../components/page-header/page-header'
import Footer from '../components/footer/footer'
import BlogElement from '../components/blog/blog'

function Blog() {
  return (
    <>
    <Header/>
         <PageHeader 
        title="Our Blog" 
        subtitle="Latest news, updates, and stories"
      />
      <BlogElement/>
    <Footer/>
    </>
  )
}

export default Blog