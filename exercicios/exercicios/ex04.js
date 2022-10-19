function angulos(ang){
    let sen = Math.sin(ang * Math.PI / 180);
    let cos = Math.cos(ang * Math.PI / 180);
    let tan = Math.tan(ang * Math.PI / 180);

    console.log(`
    O SENO de ${ang} é: ${sen.toFixed(2)}
    O COSSENO de ${ang} é: ${cos.toFixed(2)} 
    A TANGENTE de ${ang} é: ${tan.toFixed(2)}
    `);
}

angulos(30);