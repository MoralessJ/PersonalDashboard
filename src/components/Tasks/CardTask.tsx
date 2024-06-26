export function CardTask({ details }: { details: string }) {
    return (
        <div className="border border-opacity-20 border-gray-500 rounded-lg p-3">
            <p className="text-slate-600 text-sm">{details}</p>
        </div>
    );
}
