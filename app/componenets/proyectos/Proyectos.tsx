import Cards from "./Cards";

const Proyectos = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-white bg-zinc-500 bg-opacity-10 text-5xl inline-block p-4">Nuestros Proyectos</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 place-content-center">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    );
}

export default Proyectos;