import { PageDivider } from '../components/PageDivider/PageDivider'
import { SectionCheckout } from '../components/SectionCheckout/SectionCheckout'
import { SectionTestimonies } from "../components/SectionTestimonies/SectionTestimonies"

export function Checkout() {
  return (
    <div>
      <SectionCheckout/>
      <PageDivider />
      <SectionTestimonies />
    </div>
  )
}
