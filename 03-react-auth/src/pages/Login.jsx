import { useNavigate } from 'react-router-dom'
import { loginUserServices } from '@/services/useServices'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '@/hooks/useAuth'
import Logo from '@/assets/react.svg'
import '@/styles/form.css'

function Login () {
  const { login } = useAuthContext()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserServices(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/dashboard')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' src={Logo} alt='Icono de react' width={72} height={57} />
        <h1 className='h3 mb-3 fw-normal'>Please login</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        {errors.email && <span className='text-danger'>This field is required</span>}

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        {errors.password && <span className='text-danger'>This field is required</span>}

        <button className='btn btn-primary w-100 py-2' type='submit'>Login</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Login
