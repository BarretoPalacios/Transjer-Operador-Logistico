const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#1e90ff] flex flex-col items-center justify-center text-center text-white">
            {/* Big, bold icon */}
            <div className="mb-4">
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                >
                    <circle cx="60" cy="60" r="58" stroke="#1e90ff" strokeWidth="4" fill="#0a192f" />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy=".35em"
                        fontSize="56"
                        fontWeight="bold"
                        fill="#fff"
                        style={{ userSelect: "none" }}
                    >
                        404
                    </text>
                </svg>
            </div>
            <h1 className="text-4xl font-bold mb-2">Página no encontrada</h1>
            <p className="text-[#b0c4de] mb-8">
                Lo sentimos, la página que buscas no existe.
            </p>
            <a
                href="/"
                className="inline-block px-6 py-3 bg-[#1e90ff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#1565c0] transition"
            >
                Volver al inicio
            </a>
        </div>
    );
};

export default NotFound;