/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set()

    while(!seen.has(n) ){
        seen.add(n)
        n = n.toString().split('').reduce((acc, num) => acc + Number(num) ** 2, 0)

        if(n == 1){
            return true;
        } 
        
    }
    
    return false;
};
