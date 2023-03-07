const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

function rankingPaises(array){
    console.log(array)

    for(let i = 0; i < array.length; i++){
        console.log(`${i + 1} - ${array[i]}`)

    }
}

rankingPaises(maioresPaises)