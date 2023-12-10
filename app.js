
//Complete the getLetter(s) function in the editor. It has one parameter: a string, 
//consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D
function getLetter(s){
    switch(s[0]){
        case('a'  || 'e' || 'o' || 'i' || 'u'):
        letter ='A';
        break;
        case('b' || 'c' || 'd' || 'f' ||'g'):
        letter='B'
        break;
        case('h' || 'j' || 'k' || 'l' || 'm'):
        letter='C'
        break;
        default:
        return letter='D';
    }
    //console.log( letter);

};




//Bir hesap makinesine dönüştürmeden önce kare alma ve kök alma case'lerini sizin eklemenizi istiyoruz!
let islem = function(a, operator){
    switch(operator){
        case 'kare':
            return a**2;
            break;
            case 'kokAlma':
                if( a>=0){
                    return Math.sqrt(a);

                }else{
                    return "negatif sayinin karekoku tanimsiz"
                }
    }
};
console.log(islem(12,'kare'));
console.log(islem(25, 'kokAlma'));


//getSecondargest
function secondLargest(arr){
    let first = second= Number.MIN_SAFE_INTEGER;
    for(let i=0; i <arr.length; i++){
        if(arr[i]> first){
            second= first
            first=arr[i];

        }else if(arr[i]> second && arr[i]<first){
            second = arr[i];
        }
    }
    return second;
}
