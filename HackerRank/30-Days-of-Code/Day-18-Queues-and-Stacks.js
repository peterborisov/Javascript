function Solution() {
    this.stack = [];
    this.queue = [];

    this.pushCharacter = (ch) => this.stack.push(ch); 
    this.enqueueCharacter = (ch) => this.queue.push(ch);
    this.popCharacter = () => this.stack.pop();
    this.dequeueCharacter = () => this.queue.shift();
}

console.log(Solution('racecar'))