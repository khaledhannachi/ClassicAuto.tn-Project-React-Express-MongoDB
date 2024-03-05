import React from 'react'
import Contact from './Contact'

const Faq = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div>
    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
    <div className="collapse-title text-xl font-medium">
      Focus me to see content
    </div>
    <div className="collapse-content"> 
      <p>tabIndex={0} attribute is necessary to make the div focusable</p>
    </div>
   
  </div>
   < Contact />
  </div>
  )
}

export default Faq