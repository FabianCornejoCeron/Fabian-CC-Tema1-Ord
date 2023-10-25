function Operaciones(base, altura){
    let perimetro;
    let superficie;
    perimetro=(base*2)+(altura*2);
    superficie=base*altura;
    return [perimetro, superficie];
}

console.log(Operaciones(4,2));