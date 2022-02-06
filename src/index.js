module.exports = function check(str, bracketsConfig) {
    const arrStr = Array.from(str);
    const openBrackets = [];
    const bracketsPair = {};
    const twinsBracket = [];
    const stack = [];
    let result;

    bracketsConfig.forEach((m) => {
        bracketsPair[m[1]] = m[0];
        openBrackets.push(m[0]);
        if(m[0] === m[1]){
            twinsBracket.push(m[0]);
        }
    })


    for (let i = 0; i < arrStr.length; i++) {
        let currentSymbol = arrStr[i];
        let stackTop = stack[stack.length - 1];
        if(openBrackets.includes(currentSymbol) && currentSymbol !== bracketsPair[currentSymbol]){
            stack.push(currentSymbol);
        }
        else if(twinsBracket.includes(currentSymbol)){
            if(currentSymbol == stackTop ){
                stack.pop();
                result = true;
            }
            else{
                stack.push(currentSymbol);
            }
        }
        else{
            if(!!stack.length){
                if(bracketsPair[currentSymbol] ==  stackTop){
                    stack.pop();
                    result = true;
                }
                else{
                    result = false;
                    break;
                }

                //result = true;
              //  console.log(e);
            }
            else{
                result = false;
                break;
            }
        }
    }
    if(stack.length !== 0){
        result = false;
    }


        



    //console.log(str);
    //console.log(bracketsConfig);

    



return result;
    console.log(bracketsPair);

}
