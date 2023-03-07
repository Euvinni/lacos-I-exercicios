// Exercício 1 


function estaSatisfeito() {
    let pessoa = prompt(`Você deseja comer mais coxinhas? 
    "S" para sim 
    "N" para não`).toUpperCase()
    let soma = 0


    while(pessoa === "S"){
        soma += 2.50
        console.log(soma)
    pessoa = prompt(`Você deseja comer mais coxinhas?`).toUpperCase() 
    }
    console.log(`O valor total da conta é ${soma.toFixed(2)}`)
}


estaSatisfeito()











