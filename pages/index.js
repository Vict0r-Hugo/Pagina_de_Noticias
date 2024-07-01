//Importando dependencias como stilo css e a tag Head
import styles from "@/styles/Home.module.css";
import Head from "next/head";

//fazendo a requisição da API com o método fetch
export async function getServerSideProps(){
  const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-06-29&to=2024-06-29&sortBy=popularity&apiKey=3f85d15c45414c4984f43f611bbc8ebe')
  const news = await res.json()

  return{
    props: {news: news.articles}
  }
}

// Iniciando o home da aplicação
export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>Página de Notícias</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2>Últimas Notícias</h2>
          
            {news.slice(0,1).map((article, index) => (
              <ul>
                  <li key={index}>
                    <h3>
                      {article.title}
                    </h3>
                  </li>
                   <li>  
                      <img src={article.urlToImage}></img>
                  </li>
                  <li>
                      <h4>Descrição</h4>
                      {article.description}
                  </li>
                  <li>
                      <p>Data de publicação</p>
                      {article.publishedAt}
                  </li>
              </ul>    
            ))}
          
        </div>
      </div>
    </>
 );
 //Ulilizei o slice para mostrar apenas uma notícia na página
}

