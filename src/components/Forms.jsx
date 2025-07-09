import React from 'react'
import { Truck, Send, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

function Forms() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 3000);
        e.target.reset();
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-yellow-500">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Nombre y Apellido*"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Teléfono*"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email*"
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <select
                            className="bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition text-gray-700"
                            required
                        >
                            <option value="">Tipo de servicio*</option>
                            <option value="transporte">Transporte de carga</option>
                            <option value="distribucion">Distribución local</option>
                            <option value="nacional">Transporte nacional</option>
                            <option value="almacenaje">Almacenaje</option>
                            <option value="otros">Otros servicios</option>
                        </select>
                    </div>
                    <div>
                        <textarea
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
                        className="w-full py-3 bg-black hover:bg-gray-800 text-yellow-500 font-bold rounded-lg transition flex items-center justify-center border-2 border-yellow-500 hover:text-white hover:border-black"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        Enviar solicitud
                    </button>
                </form>
            )}
        </div>
    )
}

export default Forms