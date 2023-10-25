function impuestos(articulo){
    let precio_final;
    if(articulo<=20){
        precio_final=articulo;
        return precio_final.toFixed(2);
    }
    if(articulo>20 && articulo<=40){
        precio_final=articulo+(((articulo-20)*30)/100);
        return precio_final.toFixed(2);
    }
    if(articulo>40 && articulo<=500){
        precio_final=articulo+4+(((articulo-40)*40)/100);
        return precio_final.toFixed(2);
    }
    if(articulo>500){
        precio_final=articulo+4+(((articulo-40)*50)/100);
        return precio_final.toFixed(2);
    }

}

console.log(impuestos(550));