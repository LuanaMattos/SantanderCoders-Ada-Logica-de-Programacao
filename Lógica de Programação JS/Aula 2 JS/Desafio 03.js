//Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
//2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
//determinante dessa matriz usando a fórmula matemática de determinante.

let matriz = [
          [4, 9],
          [11, 8],
        ];
        
        // Calculando a determinante da matriz
        let determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
        
        // Retorna o resultado
        console.log("Matriz:");
        console.log(matriz);
        console.log("Determinante da matriz: " + determinante);