//Importando o Rodapé e o Navbar
import Navbar from './Navbar'
import Footer from './Footer'
//Inserindo o rodapé e o navBar em rodas as pages do projeto "O projeto só tem uma pagina mas utilizei como boas práticas"
export default function MainContainer({children}){
    return(
        <>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
        </>
    )
}