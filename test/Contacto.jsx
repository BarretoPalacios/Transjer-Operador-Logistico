import React, { useState } from "react";

const Contacto = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos a un backend o servicio de email
        setEnviado(true);
    };

    return (
        <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
            <h2>Contacto</h2>
            {enviado ? (
                <p>¡Gracias por contactarnos! Te responderemos pronto.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Mensaje:</label>
                        <textarea
                            name="mensaje"
                            value={form.mensaje}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
};

export default Contacto;