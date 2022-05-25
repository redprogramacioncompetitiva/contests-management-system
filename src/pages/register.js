import CustomHeader from "../components/CustomHeader";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import myrpc from "/public/img/lgo_rpc.png";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/ArrowForward";
import MuiAlert from '@mui/material/Alert';

let state = {
    userName: "",
    name: "",
    lastName: "",
    password: "",
    confPassword: "",
    email: ""
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

let message = "Ha ocurrido un error";
let type = "error";

export default function Register(req, res) {

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
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

        e.preventDefault();
        let object = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }

        let response = await fetch("http://localhost:3000/api/user/register", object);

        const result = await response.json();

        if (result.result === "Insert") {
            window.location.href = "http://localhost:3000/index";
            message = "¡La cuenta se registró exitosamente!";
            type = "success";

        } else if (result.result === "UserNameNotUnique") {
            message = "Ya existe alguien con ese nombre de usuario";
            type = "warning";

        } else if (result.result === "PassNotEquals") {
            message = "Las contraseñas ingresadas no coinciden";
            type = "warning";

        } else if (result.result === "MiddleSpaces") {
            message = "El nombre de usuario no puede tener espacios ni pueden existir campos vacíos";
            type = "warning";

        } else if (result.result === "PassNotValidate") {
            message = "La contraseña no cumple con los requerimientos";
            type = "warning";
        }

        setOpen(true);
    }

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
                                            <span className={styles.span} data-tooltip="Debe contener: mínimo 6 caracteres, al menos una letra mayúscula y una minúscula, un número y un carácter especial ej: . , - , *">
                                            <input name="password" type="password" className={styles.inputContainer} placeholder="Contraseña*" required />
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <input name="confPassword" type="password" className={styles.inputContainer} placeholder="Confirmar contraseña*" required />
                                    </div>
                                </section>
                                <Button type="submit" className={styles.button} variant="contained" endIcon={<SendIcon style={{ fontSize: "30px", marginLeft: "10px" }} />}>Registrarse</Button>

                                <Stack spacing={2} sx={{ width: '100%' }}>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert id="alert" onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                                            {message}
                                        </Alert>
                                    </Snackbar>
                                </Stack>
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