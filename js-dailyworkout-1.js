function isString(input){

    if(typeof (input)=== "string")
    {console.log("its a string");}
    else console.log("its not a string");

}
// isString([1,2,3])


function splitWords(str) {
    let arr=str.split(' ');
    console.log(arr);
    
}
// splitWords('hello world')

function firstOcuurance(str,str1){
    let str0=str.replace(str1,'');
    console.log(str0);
}
// firstOcuurance('hello how are u','how ');
function toCamelCase(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    
    return words.join("");
  }
// console.log(toCamelCase('hello world')); 

function chopString(str,n) {
     let arr=[];
     let index=0;
     for( let i=0;i<str.length;i+=2){

        arr.push(str.slice(index,index+n))
        index+=n;
     }
    console.log(arr);
}

// chopString('hellonbxcxznc',2);
