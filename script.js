document.addEventListener('DOMContentLoaded', () => {
    let res = document.getElementById('res');
    let presentval = '';
    let oper = '';
    let previous = '';
  
    function Result(value) {
      res.textContent = value.toString();
    }
  
    document.querySelectorAll('.num, #point').forEach(p => {
      p.addEventListener('click', () => {
        presentval += p.textContent;
        Result(presentval);
      });
    });
  
    document.querySelectorAll('#add, #sub, #mult, #divi').forEach(op => {
      op.addEventListener('click', () => {
        if (presentval === '') return;
        previous = presentval;
        oper = op.textContent;
        presentval = '';
      });
    });
  
    document.getElementById('equal').addEventListener('click', () => {
      if (previous === '' || presentval === '' || oper === '') return;
      let result;
      let num1 = parseFloat(previous);
      let num2 = parseFloat(presentval);
      switch (oper) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
            Result('Error');
            return;
            }
            result = num1 / num2;
            break;
        }
    Result(result);
    presentval = '';
    previous = '';
    oper = '';
  });

    document.getElementById('clear').addEventListener('click', () => {
    presentval = '';
    previous = '';
    oper = '';
    Result(0);
  });
});
  