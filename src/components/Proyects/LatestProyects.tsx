import { CardProyect } from "./CardProyect";

export function LatestProyects() {
    return (
        <div className="border border-opacity-20 border-gray-500 rounded-lg p-5">
            <h2 className="font-bold">Últimos Proyectos</h2>

            <CardProyect title="Hola" details="Mundo" />
        </div>
    );
}
