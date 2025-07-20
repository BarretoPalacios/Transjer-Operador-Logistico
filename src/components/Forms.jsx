import React, { useState } from 'react';
import { Truck, Send, CheckCircle } from "lucide-react";

function Forms() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // FormSubmit manejará el envío, pero mantenemos el estado local para UI
    const handleSubmit = (e) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsFormSubmitted(true);
            setIsLoading(false);
            setTimeout(() => setIsFormSubmitted(false), 5000);
        }, 1500); // Simulamos delay para mejor UX
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-2 border-yellow-500 max-w-md mx-auto">
            <div className="flex justify-center mb-4">
                <Truck className="w-10 h-10 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-6 text-center">
                Solicita tu cotización
            </h2>
            <p className="text-center text-gray-600 mb-6">
                Completa el formulario y un asesor se comunicará contigo en menos de 24 horas
            </p>

            {isFormSubmitted ? (
                <div className="bg-yellow-50 border-2 border-yellow-500 text-black px-4 py-6 rounded-lg mb-4 text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                    <h3 className="text-xl font-bold mb-2">¡Solicitud recibida!</h3>
                    <p>Nuestro equipo de logística se contactará contigo pronto.</p>
                </div>
            ) : (
                <form 
                    onSubmit={handleSubmit}
                    action={`https://formsubmit.co/${encodeURIComponent('comercial@transjer.com')}`} 
                    method="POST"
                    className="space-y-4"
                >
                    {/* Campo oculto para el asunto del correo */}
                    <input type="hidden" name="_subject" value="Nueva solicitud de cotización" />
                    
                    {/* Campo para redirección después del envío (opcional) */}
                    <input type="hidden" name="_next" value="https://transjer.com.pe" />
                    
                    {/* Evita bots (opcional) */}
                    <input type="text" name="_honey" className="hidden" />
                    
                    {/* Campos del formulario */}
                    <div>
                        <input
                            type="text"
                            name="Nombre y Apellido"
                            placeholder="Nombre y Apellido*"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="Teléfono"
                            placeholder="Teléfono*"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email*"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <select
                            name="Tipo de servicio"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition text-gray-700"
                            required
                        >
                            <option value="">Tipo de servicio*</option>
                            <option value="Transporte de carga">Transporte de carga</option>
                            <option value="Distribución local">Distribución local</option>
                            <option value="Transporte nacional">Transporte nacional</option>
                            <option value="Almacenaje">Almacenaje</option>
                            <option value="Otros servicios">Otros servicios</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            name="Detalles"
                            placeholder="Detalles de tu requerimiento*"
                            rows={3}
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="terms"
                            name="Acepta políticas"
                            className="mt-1 w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                            required
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 text-sm text-gray-700"
                        >
                            Acepto la política de privacidad y tratamiento de datos
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-black hover:bg-gray-800 text-yellow-500 font-bold rounded-lg transition flex items-center justify-center border-2 border-yellow-500 hover:text-white hover:border-black disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            'Enviando...'
                        ) : (
                            <>
                                <Send className="w-5 h-5 mr-2" />
                                Enviar solicitud
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}

export default Forms;