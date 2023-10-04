import logo from '../../logo.svg'

function Logo () {
    return(
        <div className="logo">
          <img src={logo}></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo