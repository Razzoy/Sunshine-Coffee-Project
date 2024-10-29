import { PageCard } from '../PageCard/PageCard'
import { Testimonies } from '../Testimonies/Testimonies'
import { Wrapper } from '../Wrapper/Wrapper'
import style from './SectionTestimonies.module.scss'

export function SectionTestimonies() {
  return (
    <Wrapper>
        <PageCard header='Testimonies'/>
      <section className={style.testimoniesStyling}>
        <Testimonies name='John' />
        <Testimonies name='Eva' />
        <Testimonies name='Peter' />
        <Testimonies name='Michelle' />
      </section>
    </Wrapper>
      )
}
