import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'


const Blog = ({entradas}) => {

  //const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`

  return (
    <div>
        <Layout pagina="Blog">
            <main className="contenedor">
              <ListadoBlog 
                entradas={entradas}
              >
              </ListadoBlog>
            </main>
        </Layout>
    </div>
  )
}

// Esta función va corriendo en el servidor
//export async function getServerSideProps(){
export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return{
    props:{
      entradas
    }
  }
}

export default Blog