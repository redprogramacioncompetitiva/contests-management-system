import CustomHeader from "../components/CustomHeader";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import myrpc from "/public/img/lgo_rpc.png";
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/ArrowForward";

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
        <div className={styles.mainContainer}>
            <CustomHeader title="Registrarse" content="Pagina para registrarse"></CustomHeader>
            <section>
                <div>
                    <div className={styles.registerContainer}>
                        <div>
                            <h5 className={styles.title}>Registro</h5>
                            <label className={styles.subtitle}>¿Ya perteneces a la RPC?</label>

                            <a href="https://redprogramacioncompetitiva.com/" className={styles.link}>Iniciar sesión</a>
                            <form onSubmit={handleSubmit} onChange={handleChange}>
                                <div className="mb-3">
                                    <input name="userName" className={styles.inputContainer} placeholder="Nombre de usuario*" required />
                                </div>

                                <section className={styles.inputAlignment}>
                                    <div className="mb-3">
                                        <input name="name" className={styles.inputContainer} placeholder="Nombre*" required />
                                    </div>

                                    <div className="mb-3">
                                        <input name="lastName" className={styles.inputContainer} placeholder="Apellido*" required />
                                    </div>
                                </section>

                                <div className="mb-3">
                                    <input name="email" type="email" className={styles.inputContainer} placeholder="Email*" required />
                                </div>

                                <section className={styles.inputAlignment}>
                                    <div className="mb-3">
                                        <input name="password" type="password" className={styles.inputContainer} placeholder="Contraseña*" required />
                                    </div>
                                    <div className="mb-3">
                                        <input name="confPassword" type="password" className={styles.inputContainer} placeholder="Confirmar contraseña*" required />
                                    </div>
                                </section>
                                <Button type="submit" className={styles.button} variant="contained" endIcon={<SendIcon style={{fontSize: "30px", marginLeft: "10px"}}/>}>Registrarse</Button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.imgContainer}>
                <span>
                    <Image src={myrpc} alt="RPC logo" />
                </span>
            </section>
        </div>
    )
}