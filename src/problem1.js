

function counterChar(str) {
    const result ={}
    
    const format=str.replace().toUpperCase()
    
for(let char of format){
    value[char] =(value[char] || 0)+1 
}

for (let char of format){
    if(result[char]){
        console.log(`${char} ${result[char]}`)
        result[char]=0
    }
}
}

counterChar("Chinmay Kulkarn")