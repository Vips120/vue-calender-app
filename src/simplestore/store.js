export const store = {
    state: {
        numbers:[10,20,30],
  
},
countNumber(number){
    return this.state.numbers.push(Number(number));
}
}