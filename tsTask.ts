function getCombination (firstIndex: number, seccondIndex:number, inputedSentence:string) {
    return inputedSentence.slice(firstIndex, seccondIndex);
    
}

console.log(getCombination(9, 19, "Learning Typescript is different than Javascript"))