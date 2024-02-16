function getCombination(firstIndex, seccondIndex, inputedSentence) {
    return inputedSentence.slice(firstIndex, seccondIndex);
}
console.log(getCombination(9, 19, "Learning Typescript is different than Javascript"));
