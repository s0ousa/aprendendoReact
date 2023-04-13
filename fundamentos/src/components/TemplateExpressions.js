const TemplateExpressions = () => {
    const nome = "Luis";
    const dados = {
        idade: 22,
        job: "Desenvolvedor",
    }
    
    return(
        <div>
            <p>Olá, {nome}!</p>
            <p>Fiquei sabendo que você atua como {dados.job}</p>
        </div>
    )
}

export default TemplateExpressions;