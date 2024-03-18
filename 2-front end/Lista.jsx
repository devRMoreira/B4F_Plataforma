export default function Lista({ titulo, itens }) {

    return <div>
        {titulo ? <h1>{titulo}</h1> : undefined}

        <ul>

            {itens.map((ele, i) => <li key={i}>{ele}</li>)}

        </ul>

    </div>
}