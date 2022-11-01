import React from "react";

function Input(props) {
    const escribirUsuario = (e) => {
        props.setUser(e.target.value)
    }
    const escribirPassword = (e) => {
        props.setPassword(e.target.value)
    }

    return (
        <div className="flex">
            <label>Usuario</label>
            <input type="text" onChange={escribirUsuario} />
            <label>Contraseña</label>
            <input type="password" name="" id="password" onChange={escribirPassword} />
        </div>
    )
}
export default Input