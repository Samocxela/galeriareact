function Header(props){
    const {titulo}=props;
    return(
        <div>
            <h1>{props.titulo}</h1>
        </div>
    )
}
export default Header;