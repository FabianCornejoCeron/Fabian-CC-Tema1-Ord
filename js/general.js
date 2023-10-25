function formula(a,b,c){
    let resultado1;
    let resultado2;

    if(((b**2)-4*a*c)>=0){
    resultado1=(-b+Math.sqrt((b**2)-4*a*c))/(2*a);
    resultado2=(-b-Math.sqrt((b**2)-4*a*c))/(2*a);
    return [resultado1,resultado2];
    }
    else{
        let variable_i;
        variable_i = ((b**2)-4*a*c) * (-1);2
        resultado1 = "("+(-(b))+"/"+(2*a)+")"+"+"+"(sqrt("+((b**2)-4*a*c)*(-1)+"i)"+"/"+2*a+")";
        resultado2 = "("+(-(b))+"/"+(2*a)+")"+"-"+"(sqrt("+((b**2)-4*a*c)*(-1)+"i)"+"/"+2*a+")";
        return[resultado1,resultado2];
    }
}
console.log(formula(2,2,3));