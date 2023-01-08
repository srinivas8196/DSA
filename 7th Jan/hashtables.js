class HashTable{
    constructor(size=50){
      this.buckets =  new Array(size)
      this.size = size
    }
  
    hash(key){
      return key.toString().length % this.size;
    }
    
    // Insert data
    setItem(key,value){
      let index = this.hash(key);
      
      if(!this.buckets[index]){
        this.buckets[index] = [];
      }
      
      this.buckets[index].push([key,value])
      return index
    }
  
    // Search data
    getItem(key){
      let index = this.hash(key);
    
       if(!this.buckets[index])return null
       
          for(let bucket of this.buckets[index]){
               // key
            if(bucket [0] === key){
               // value
              return bucket [1]
             }
          }
    }
  }
  
  const hashTable = new HashTable();
  // Insert data to the hash table
  hashTable.setItem("101","shakul");
  hashTable.setItem("102","abc");
  hashTable.setItem("200","malik");
  hashTable.setItem("300","def");
  hashTable.setItem("400","ttttttt");
  
  // Search data from the hash table 
  console.log(hashTable.getItem("300"));
  console.log(hashTable.getItem("500"));
  console.log(hashTable)