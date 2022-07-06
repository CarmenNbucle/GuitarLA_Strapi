import Layout from '../components/Layout'
import Image from 'next/image'
import styles from"../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <div>
        <Layout pagina="Nosotros">
            <main className='contenedor'>
              <h2 className='heading'>Nosotros</h2>
              <div className={styles.contenido}>
                  <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus vel mi eu fermentum. Praesent porta suscipit sapien accumsan maximus. Nulla vestibulum semper ex quis ultrices. Sed tincidunt lacus a tortor posuere tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sagittis arcu id enim porta, ac molestie nulla efficitur. Etiam tincidunt scelerisque leo, in tristique diam sagittis et. Aliquam erat volutpat.</p>

                    <p>Cras id laoreet sapien. Cras mattis felis sit amet neque auctor, eget ornare lorem pharetra. Nullam dignissim et leo vitae congue. Fusce porta condimentum lectus vitae malesuada. Vestibulum augue justo, faucibus dapibus nulla vehicula, malesuada ultrices erat. Vivamus pulvinar arcu tellus, sit amet egestas nibh faucibus in. Donec ac lacus est. Curabitur vel mattis odio. Pellentesque ac blandit leo, eu rhoncus eros. Integer ut magna est. Ut iaculis nulla sed tellus sodales molestie.</p>
                  </div>
              </div>
            </main>
        </Layout>
    </div>
  )
}

export default Nosotros