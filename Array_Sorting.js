let data = [200, 39, 2979, 29, 3, 234, 493];

for (let i = 0; i < data.length; i++) {
    for(let j=0; j< data.length; j++){
        if(data[j]>data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data)