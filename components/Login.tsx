import './Login.css'


export default function Login({alternarLogin, setAlternarLogin}) {

    return (
        alternarLogin && (
            <div className="loginPanel">
                <section className="loginSection">
                    <h2>Login</h2>
                    <button onClick={() => setAlternarLogin(false)}>X</button>
                    <form action="">
                        <label htmlFor="">Name</label>
                    </form>
                </section>
            </div>
        )
    )
}