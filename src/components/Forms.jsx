import React from 'react'
import {
  Send
} from "lucide-react";
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
    <>
    <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                Formulario
              </h2>

              {isFormSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                  pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre y Apellido*"
                    className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono*"
                    className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Distrito del servicio*"
                    className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                  <textarea
                    placeholder="Mensaje*"
                    rows={3}
                    className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  ></textarea>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="not-robot"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="not-robot"
                      className="ml-2 text-sm text-gray-700"
                    >
                      No soy un robot
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#004FAC] hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar
                  </button>
                </form>
              )}
            </div>
    </>
  )
}

export default Forms