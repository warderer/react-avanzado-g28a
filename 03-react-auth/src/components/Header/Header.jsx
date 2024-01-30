import './header.scss'

function Header() {
  return (
    <nav className='header'>
        <a className='header__logo' href="/">Logo</a>
        <ul className=''>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>
            <li>
                <a href="/secret">Secret</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/signup">Signup</a>
            </li>
        </ul>
    </nav>
  )
}

export default Header