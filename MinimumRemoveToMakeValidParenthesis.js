/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const str = [...s];
    
    for(let i=0; i<str.length; i++){
        if(str[i] === ')' && stack.length === 0){
           str[i] = '';
        }
        else if(str[i] ==='(') stack.push(i);
        else if(str[i] === ')' && stack.length > 0) stack.pop();
    }

    if(stack.length > 0)
        while(stack.length > 0){
            const index = stack.pop();
            str[index]='';
           
        }
    return str.join('');
};
