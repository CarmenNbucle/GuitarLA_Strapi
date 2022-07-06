//import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Image from "next/image"
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
    //const router = useRouter()
    //console.log(router.query)

    const {contenido, imagen, published_at, titulo}= entrada

    const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`  // porque API_URL no es publica y sale undefined
  return (
    <Layout
        pagina={titulo}
    >
        <main className="contenedor">
            <h1 className="heading">{titulo}</h1>
            <article className={styles.entrada}>
                <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen del post ${titulo}`} />
                <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </main>
    </Layout>
  )
}

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada =>({
        params: {url: entrada.url}// si fuesen numeros solo, habría que añadir entrada.id.toString() para convertirlo
    }))

   return {
        paths,
        fallback: false // si fuesen muchas entradas habría que poner true
   }
}

export async function getStaticProps({params:{url}}){
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada: entrada[0]
        }
    }
}



// export async function getServerSideProps({query:{id}}){
//     const url = `http://localhost:1337/blogs/${id}`
//     const url = `${process.env.API_URL}/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()
//     console.log(entrada)
//     return {
//         props:{
//             entrada
//         }
//     }
// }

export default EntradaBlog