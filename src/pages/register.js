import Header from "../components/Header";
import styles from "../styles/Home.module.css";

let state = {
    userName: "",
    name: "",
    lastName: "",
    password: "",
    confPassword: "",
    email: ""
};

let handleChange = e => {
    switch (e.target.name) {
        case "userName":
            state.userName = e.target.value;
            break;
        case "name":
            state.name = e.target.value;
            break;
        case "lastName":
            state.lastName = e.target.value;
            break;
        case "password":
            state.password = e.target.value;
            break;
        case "confPassword":
            state.confPassword = e.target.value;
            break;
        case "email":
            state.email = e.target.value;
            break;
    }
}

let handleSubmit = async e => {
    let object = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
}

export default function register(req, res) {
    return (
        <div>
            <Header title="Registrar"></Header>
            <section>
                <div className={styles.mainContainer}>
                    <div className="card" style={{ width: "30rem", height: "30rem", marginTop: "195px" }}>
                        <div className="card-body">
                            <h5 className="card-title">Registro</h5>
                            <label>¿Ya perteneces a la RPC?</label>
                            
                            <a href="https://redprogramacioncompetitiva.com/" className="link-primary">&nbsp;Iniciar sesión</a>
                            <form onSubmit={handleSubmit} onChange={handleChange}>
                                <div className="mb-3">
                                    <input name="userName" className="form-control"  placeholder="Nombre de usuario*" required />
                                </div>
                                <div className="mb-3">
                                    <input name="name" className="form-control" placeholder="Nombre*" required />
                                </div>

                                <div className="mb-3">
                                    <input name="lastName" className="form-control" placeholder="Apellido*" required />
                                </div>
                                <div className="mb-3">
                                    <input name="email" type="email" className="form-control" placeholder="Email*" required />
                                </div>
                                <div className="mb-3">
                                    <input name="password" type="password" className="form-control" placeholder="Contraseña*" required />
                                </div>
                                <div className="mb-3">
                                    <input name="confPassword" type="password" className="form-control" placeholder="Confirmar contraseña*" required />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ marginRight: "50px" }}>Registrarse</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}