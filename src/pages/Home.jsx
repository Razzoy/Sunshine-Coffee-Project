import { SectionAbout } from "../components/SectionAbout/SectionAbout"
import { PageDivider } from '../components/PageDivider/PageDivider'
import { SectionShop } from "../components/SectionShop/SectionShop"
import { SectionTestimonies } from "../components/SectionTestimonies/SectionTestimonies"
export function Home() {
  return (
    <div>
      <PageDivider/>
      <SectionAbout/>
      <PageDivider/>
      <SectionShop/>
      <PageDivider/>
      <SectionTestimonies/>
    </div>
  )
}
