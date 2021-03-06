class SortedList {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    sorting(arr){
        return arr.sort((a, b) => a - b)
    }

    add(element) {
        this.arr.push(element);
        this.size++;
        return this.sorting(this.arr);
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size--;
            return this.sorting(this.arr);
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}

let list = new SortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
