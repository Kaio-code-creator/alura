import logo from '../../imagens/logo.svg'
import stytled from 'styled-components'

const LogoContainer = stytled.div `
    display: flex;
    font-size: 30px;
`

const LogoImage = stytled.img `
    margin-right: 10px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='logo' 
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo