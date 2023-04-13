const Events = () => {

    const clicou = (event) => {

        console.log(event);
        return(
            alert("Cliquei!")
        )
    }

    return(
        <div>
            <button onClick={clicou} >Clique aqui!</button>

            <button onClick= {()=> console.log("Clicou no outro botão")}> Outro botão</button>
        </div>
    )
}

export default Events;