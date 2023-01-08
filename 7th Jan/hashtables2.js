class HashTable {
    constructor() {
        this.table = [];
    }

    Hashing(key) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % 71; 

        return hash;
    }

    put(key, value) {
        let hash = this.Hashing(key);
        return this.table[hash] = value;
    }

    get(key) {
        return this.table[this.Hashing(key)];
    }

    remove(key) {
        return delete this.table[this.Hashing(key)];
    }


}

const hashTable = new HashTable();
hashTable.put(101,"sahkul")
hashTable.put(102,"ssssssa")
hashTable.put(1111,"ddddddd")
console.log( hashTable.get(101))
console.log(hashTable)