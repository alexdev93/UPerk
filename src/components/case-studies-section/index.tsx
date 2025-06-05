import React from 'react'
import CaseStudiesOfSuccess from './CaseStudies'
import Banner from '../common/Banner'
const CaseStudy = () => {
  return (
    <div className="mt-[120px] max-w-7xl sm:px-10 px-4 mx-auto">
      <Banner
        heading="Case Studies of Success: Real-Life Examples of Impactful Change"
        paragraph="Explore our collection of case studies showcasing real-life examples of impactful change. Discover how innovative strategies have transformed businesses and driven success across various industries."
      />
      <CaseStudiesOfSuccess />
    </div>
  )
}

export default CaseStudy