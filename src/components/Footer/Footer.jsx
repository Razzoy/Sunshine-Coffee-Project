import style from './Footer.module.scss'

export function Footer() {
  return (
    <section className={style.footerStyling}>
      <ul>
        <li><h4>Contact</h4></li>
        <li>Supercoffeeroad 223b</li>
        <li>92230 New Coffeland</li>
        <li>Phone: 22331122</li>
        <li>Mail: coffeeland@info.com</li>
      </ul>
      <ul>
      <li><h4>Legal</h4></li>
        <li>Cookie policy</li>
        <li>Return policy</li>
        <li>Shipping</li>
        <li>Terms and Conditions</li>
      </ul>
      <ul>
      <li><h4>About</h4></li>
        <li>History</li>
        <li>The people behind</li>
        <li>Partnerships</li>
        <li>International</li>
      </ul>
    </section>
  )
}
