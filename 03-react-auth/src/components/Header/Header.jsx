import './header.scss'

function Header() {
  return (
    <nav className='header'>
        <a className='header__logo' href="/">Logo</a>

        <ul className='header__nav-list'>
            <li className='header__list-item'>
                <a className='header__item-link header__item-link--is-active' href="/home">Home</a>
            </li>
            <li className='header__list-item'>
                <a className='header__item-link' href="/dashboard">Dashboard</a>
            </li>
            <li className='header__list-item'>
                <a className='header__item-link' href="/secret">Secret</a>
            </li>
            <li className='header__list-item'>
                <a className='header__item-link' href="/login">Login</a>
            </li>
            <li className='header__list-item'>
                <a className='header__item-link' href="/signup">Signup</a>
            </li>
        </ul>
    </nav>
  )
}

export default Header