// Code your solutions in this file
function writeCards(data, event){
    let array = []
    for(let i = 0; i < data.length; i++){
        array.push(`Thank you, ${data[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countDown(number){
    while(number >= 0){
        console.log(number)
      number-=1
    }
    return countDown
}