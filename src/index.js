module.exports = function solveEquation(equation) {
  
    equation = equation.replace(/ /g, "");
    a = +equation.substr(0, equation.indexOf("*x^2"));
    b = +equation.substr(equation.indexOf("*x^2") + 4, equation.lastIndexOf("*x") - equation.indexOf("*x^2") - 4);
    c = +equation.substr(equation.lastIndexOf("*x") + 2);

    d = b * b - 4 * a * c;
    x1 = Math.round(( -b + Math.sqrt(d) ) / ( 2 * a ));
    x2 = Math.round(( -b - Math.sqrt(d) ) / ( 2 * a ));

    console.log(a);
    console.log(b);
    console.log(c);

    return x1 > x2 ? [x2, x1] : [x1, x2];
}
