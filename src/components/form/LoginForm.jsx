import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { messageSchema } from './Schemas'

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(messageSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} placeholder='Enter email...' />
            {errors.email && <span>{errors.email.message}</span>}

            <input {...register('password')} placeholder='Enter password...' />
            {errors.password && <span>{errors.password.message}</span>}

            <button>Send</button>
        </form>
    )
}

export default LoginForm