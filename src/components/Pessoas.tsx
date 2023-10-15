export interface PessoasProps {
    name: string
    media: number
}

export function Pessoas({ name, media }: PessoasProps) {
    return (
        <div>
            <p style={{ color: media <= 7 ? "red" : "green" }}>{name} - Média: {media}</p>
            <button
                disabled={media <= 7}
                onClick={() => console.log("Parabens")}>
                Lançar Aprovação</button>
        </div>
    )
}