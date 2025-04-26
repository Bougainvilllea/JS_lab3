class Stock {
    constructor() {
        this.boxes = []; 
        this.serialNumber = 0; 
    }

    add(w, v) {
        const box = {
            serial: this.serialNumber++,
            weightCapacity: w,
            volumeCapacity: v,
            addedTime: Date.now() 
        };
        this.boxes.push(box);
    }

    getByW(min_w) {
        let candidates = this.boxes.filter(box => box.weightCapacity >= min_w);
        
        if (candidates.length === 0) 
            return -1;
   
        candidates.sort((a, b) => {
            if (a.weightCapacity !== b.weightCapacity) {
                return a.weightCapacity - b.weightCapacity;
            }
            return a.addedTime - b.addedTime;
        });
        
        const selected = candidates[0];
        this._removeBox(selected.serial);
        return selected.serial;
    }

    getByV(min_v) {
        let candidates = this.boxes.filter(box => box.volumeCapacity >= min_v);
        
        if (candidates.length === 0) return -1;
        
        candidates.sort((a, b) => {
            if (a.volumeCapacity !== b.volumeCapacity) {
                return a.volumeCapacity - b.volumeCapacity;
            }
            return a.addedTime - b.addedTime;
        });
        
        const selected = candidates[0];
        this._removeBox(selected.serial);
        return selected.serial;
    }

    _removeBox(serial) {
        this.boxes = this.boxes.filter(box => box.serial !== serial);
    }
}


function testStock() {
    const stock = new Stock();
    
   
    stock.add(10, 5); 
    stock.add(15, 3); 
    stock.add(20, 8); 
    stock.add(10, 7); 
    stock.add(15, 10);
    
    
    console.log(stock.getByW(10)); 
    console.log(stock.getByW(12)); 
    console.log(stock.getByW(15)); 
    console.log(stock.getByW(25)); 
    
   
    console.log(stock.getByV(5));  
    console.log(stock.getByV(8));
    console.log(stock.getByV(10)); 
    console.log(stock.getByV(2));  
    console.log(stock.getByV(15)); 
    
    
    console.log("Осталось коробок:", stock.boxes.length); 
}

testStock();
