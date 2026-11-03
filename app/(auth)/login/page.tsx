
import { login } from '@/service/authService';

export default function LoginPage() {
    return (
        <section>
            <form action={login()}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}