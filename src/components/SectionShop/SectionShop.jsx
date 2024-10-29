import { Link } from 'react-router-dom'
import { PageCard } from '../PageCard/PageCard'
import style from './SectionShop.module.scss'
import { Wrapper } from '../Wrapper/Wrapper'

export function SectionShop() {
  return (
    <Wrapper>
      <section className={style.shopStyling}>
      <PageCard header='Shop now' text='Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing'>
        <button><Link to={'/products'}>Go to products</Link></button>
      </PageCard>
    </section>
    </Wrapper>
  )
}
