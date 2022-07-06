import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({guitarras, curso, entradas}) {
  const [guitarraOferta, setGuitarraOferta] = useState(0);

  useEffect(() => {
    const guitarraOferta = Math.floor(Math.random() * 12);
    console.log(guitarraOferta)
    setGuitarraOferta(guitarraOferta)

  },[]);

    

  
  return (
    <div>
      <Layout 
        pagina="Inicio"
        guitarra={guitarras[guitarraOferta]}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
        <Curso
          curso={curso}
        >
        </Curso>
        <section className="contenedor">
          <ListadoBlog 
            entradas={entradas}
          >
          </ListadoBlog>
        </section>
      </Layout>
      
    </div>
  )
}



export async function getServerSideProps(){
  //const url = `${process.env.API_URL}/guitarras?_sort=precio:desc` ordenar por precio

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resEntradas] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resEntradas.json()
  ])

  return{
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}