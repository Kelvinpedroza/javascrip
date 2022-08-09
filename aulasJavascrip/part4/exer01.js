/*

vamos fortalercer e aplicar os conhecimentos além de aprender truques e dicas para resolver os desadios e avançar para o proximo nivel 



*/




function getScore(note){
    let noteA = note >= 90 && note < 100
    let noteB = note >= 80 && note < 89
    let noteC = note >= 70 && note < 79
    let noteD = note >= 60 && note < 69
    let noteF = note < 60 && note < 0

    if(noteA){
            console.log('Você conseguiu uma nota !! A !!')
    }else if(noteB){
        console.log('Você conseguiu uma nota !! B !!')
        }else if(noteC){
        console.log('Você conseguiu uma nota !! C !! se Esforce mais ')
        }else if(noteD){
        console.log('Você conseguiu uma nota !! D !! ta ruinzinho meu filho')
    }else{
        console.log('Você conseguiu um !! F !! amenos você ta tentando?')
    }

}

getScore(90)
getScore(86)
getScore(74)
getScore(64)
getScore(55)