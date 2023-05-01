function isOperator(c)
{
    return (!(c >= 'a' && c <= 'z') &&
            !(c >= '0' && c <= '9') &&
            !(c >= 'A' && c <= 'Z'));
}
 
// Function to find priority
// of given operator.
function getPriority(C)
{
    if (C == '-' || C == '+')
        return 1;
    else if (C == '*' || C == '/')
        return 2;
    else if (C == '^')
        return 3;
    return 0;
}
 
// Function that converts infix
// expression to prefix expression.
function infixToPrefix(infix)
{
    // stack for operators.
    let operators = [];
  
    // stack for operands.
    let operands = [];
  
    for (let i = 0; i < infix.length; i++)
    {
  
        // If current character is an
        // opening bracket, then
        // push into the operators stack.
        if (infix[i] == '(')
        {
            operators.push(infix[i]);
        }
  
        // If current character is a
        // closing bracket, then pop from
        // both stacks and push result
        // in operands stack until
        // matching opening bracket is
        // not found.
        else if (infix[i] == ')')
        {
            while (operators.length!=0 &&
                operators[operators.length-1] != '(')
                {
  
                // operand 1
                let op1 = operands.pop();
                 
  
                // operand 2
                let op2 = operands.pop();
                 
  
                // operator
                let op = operators.pop();
                 
  
                // Add operands and operator
                // in form operator +
                // operand1 + operand2.
                let tmp = op + op2 + op1;
                operands.push(tmp);
            }
  
            // Pop opening bracket
            // from stack.
            operators.pop();
        }
  
        // If current character is an
        // operand then push it into
        // operands stack.
        else if (!isOperator(infix[i]))
        {
            operands.push(infix[i] + "");
        }
  
        // If current character is an
        // operator, then push it into
        // operators stack after popping
        // high priority operators from
        // operators stack and pushing
        // result in operands stack.
        else
        {
            while (operators.length &&
                getPriority(infix[i]) <=
                    getPriority(operators[operators.length-1]))
                {
  
                let op1 = operands.pop();
                 
  
                let op2 = operands.pop();
                 
  
                let op = operators.pop();
                 
  
                let tmp = op + op2 + op1;
                operands.push(tmp);
            }
  
            operators.push(infix[i]);
        }
    }
  
    // Pop operators from operators
    // stack until it is empty and
    // operation in add result of
    // each pop operands stack.
    while (operators.length!=0)
    {
        let op1 = operands.pop();
         
  
        let op2 = operands.pop();
         
  
        let op = operators.pop();
         
  
        let tmp = op + op2 + op1;
        operands.push(tmp);
    }
  
    // Final prefix expression is
    // present in operands stack.
    return operands[operands.length-1];
}

let s = "a*(b+c-(d/e^f)-g)-h";
console.log( infixToPrefix(s));