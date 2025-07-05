import React from 'react';

const servicios = [
    {
        titulo: 'Vigilancia Física',
        descripcion: 'Personal capacitado para la protección de instalaciones y personas.',
        icono: '🛡️',
    },
    {
        titulo: 'Monitoreo de Alarmas',
        descripcion: 'Supervisión remota 24/7 de sistemas de alarma y respuesta inmediata.',
        icono: '📡',
    },
    {
        titulo: 'Custodia de Mercancías',
        descripcion: 'Acompañamiento y resguardo de bienes en tránsito.',
        icono: '🚚',
    },
    {
        titulo: 'Consultoría en Seguridad',
        descripcion: 'Asesoría profesional para la prevención de riesgos.',
        icono: '📋',
    },
];

const Servicios = () => (
    <div style={{ padding: '2rem' }}>
        <h1>Servicios</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {servicios.map((servicio, idx) => (
                <div
                    key={idx}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        width: '250px',
                        background: '#f9f9f9',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{servicio.icono}</div>
                    <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{servicio.titulo}</h2>
                    <p style={{ margin: 0 }}>{servicio.descripcion}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Servicios;