var arg1 = +prompt ('Введите первое число');
var arg2 = +prompt ('Введите второе число');
var operation = +prompt ('Введите операцию (сложение, вычитание, деление, умножение');
function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case +:
            itog = arg1 + arg2;
        break;
        case '-':
            itog = arg1 - arg2;
        break;
        case '/':
            itog = arg1 / arg2;
        break;
        case '*':
            itog = arg1 * arg2;
        break;
       }
       alert(itog);
}