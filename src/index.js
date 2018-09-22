class Sorter {
  constructor() {
    // your implementation
    this.storage = [];
    this.compare = (left, right) => left - right;
  }

  add(element) {
    // your implementation
    return this.storage.push(element);
  }

  at(index) {
    // your implementation
    return this.storage[index];
  }

  get length() {
    // your implementation
    return this.storage.length;
    
  }

  toArray() {
    // your implementation
    return this.storage;
  }

  sort(indices) {
    // your implementation
    var sortArr = [];

    for(var i=0; i<indices.length; i++) {
      sortArr.push(this.at(indices[i]));
    }

    sortArr.sort(this.compare);

    indices.sort();

    for(var i = 0; i<sortArr.length; i++) {
      this.storage.splice(indices[i], 1, sortArr[i]);
    }
  } 

  setComparator(compareFunction) {
    // your implementation
    if(compareFunction !== undefined && typeof compareFunction === 'function') {
      this.compare = compareFunction;
    } else {
      console.error('!')
    }
  }
}

module.exports = Sorter;



