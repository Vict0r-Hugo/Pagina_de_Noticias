import "@/styles/globals.css";
import MainContainer from "@/components/MainContainer";
//Importando o MainContainer com o rodapé e o NavBar
export default function App({ Component, pageProps }) {
  return(
   <MainContainer>
    <Component {...pageProps} />
  </MainContainer> 
  )
}
