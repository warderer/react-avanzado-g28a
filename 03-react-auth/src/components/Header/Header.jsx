import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import './header.scss'

function Header () {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = ({ isActive }) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>
        Logo
      </NavLink>

      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink
            className={linkIsActive}
            to='/'
          >
            Home
          </NavLink>
        </li>

        <li className='header__list-item'>
          <NavLink className={linkIsActive} to='/dashboard'>
            Dashboard
          </NavLink>
        </li>

        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink className={linkIsActive} to='/secret'>
                  Secret
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink className={linkIsActive} to='/login'>
                  Login
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink className={linkIsActive} to='/signup'>
                  Signup
                </NavLink>
              </li>
            </>
            )}

      </ul>
    </nav>
  )
}

export default Header
