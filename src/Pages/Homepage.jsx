import AboutUs from "../CommonComponents/AboutUs"
import VendorBenefits from "../CommonComponents/BenefitSection"
import CTASection from "../CommonComponents/CTA"
import Footer from "../CommonComponents/Footer"
import PopularCategories from "../CommonComponents/PopularCategory"
import StepProcess from "../CommonComponents/StepsSection"
import TestimonialSlider from "../CommonComponents/Testimonials"

const HomePage = () => {
  return (
    <div>
      <PopularCategories />
      <StepProcess />
      <AboutUs />
      <VendorBenefits />
      <CTASection />
      <TestimonialSlider />
      <Footer />
    </div>
  )
}

export default HomePage
