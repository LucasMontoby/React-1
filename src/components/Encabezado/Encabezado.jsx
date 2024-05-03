import Logo from '../../assets/img/logo-DH.png'

function Encabezado (){
    return(  
        <header className="encabezado">
            <nav id="logo">
                <img src={Logo} alt="Logo Digital House"/>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
       
    )
}

export default Encabezado;