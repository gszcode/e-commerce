import Offers from '../../components/Offers'
import HomeBanner from '../../components/HomeBanner'
import styles from './home.module.scss'
import banner from '/assets/home_banner.webp'
import banner_01 from '/assets/home_section_banner_01.jpg'
import banner_02 from '/assets/home_section_banner_02.jpg'
import banner_03 from '/assets/home_section_banner_03.jpg'
import banner_04 from '/assets/home_section_banner_04.jpg'
import banner_05 from '/assets/home_section_banner_05.jpg'
import Banner from '../../components/Banner'
import Brands from '../../components/Brands'

const Home = () => {
  return (
    <section className={styles.container}>
      <Banner img={banner} alt="Banner Outlet" />

      {/* Banner sections */}
      <div className={styles.sections}>
        <HomeBanner
          img={banner_01}
          altText="Offers Banner"
          title="OFERTAS INCREIBLES"
          href="amazing-deals"
        />
        <HomeBanner
          img={banner_02}
          altText="Equipment Banner"
          title="EQUIPAMIENTO"
          href="equipment"
        />
        <HomeBanner
          img={banner_03}
          altText="Mountain Bikes Banner"
          title="BICICLETAS MONTAÑERA"
          href="mountain-bikes"
        />
        <HomeBanner
          img={banner_04}
          altText="Road Bikes Banner"
          title="BICICLETAS CARRETERA"
          href="road-bikes"
        />
        <HomeBanner
          img={banner_05}
          altText="Home Banner"
          title="HOGAR"
          href="home"
        />
      </div>

      {/* Offer component */}
      <Offers />

      {/* Banner component */}
      <Banner
        img="/assets/outlet_banner.webp"
        alt="Banner Outlet"
        style="outlet"
      />

      {/* Brands component */}
      <Brands />
    </section>
  )
}

export default Home
