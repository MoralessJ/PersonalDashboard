export function CardProyect({
    title,
    details,
}: {
    title: string;
    details: string;
}) {
    return (
        <div className="border border-opacity-20 border-gray-500 rounded-lg p-5">
            <h3 className="text-slate-800 font-semibold">{title}</h3>
            <p className="text-slate-600 text-sm">{details}</p>
        </div>
    );
}
