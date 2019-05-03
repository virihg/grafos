G = [1, 2, 3, 4, 5, 6] --->conjunto de vertices
A = [[1, 2] [1, 5] [2, 1] [2, 5] [2, 3] [5, 1][5, 2][5, 4][3, 2][3 ,4][4, 3][4, 5][6, 4]]--->conjunto de aristas


adyacencia =[[0, [1, 2]], [1, [0, 3]], [2, [0, 4]], [3, [1, 4]], [4, [3, 2]]]
function BFS (adyacencia,inicio) {
visitados = [];
porVisitar = [];

visitados.push(inicio)

do {
    ultimoVisitado = visitados [visitados.lenght -1]
    nodosPorVisitar = adyacencia [ultimoVisitado][1];

    debugger;

    for(i=0; i<nodoPorVisitar.lenght; i++)
    {
        porVisitar.push(nodosPorVisitar[i]);
    }
    siguienteVisita = porVisitar.shift();
    visitados.push(siguienteVisita);
}

while(porVisitar !== null && porVisitar.lenght > 0)
return visitados;

}
var adayacencia = [[0, [1, 2]], [1, [0, 3]], [2, [0, 4]], [3, [1, 4]], [4, [3, 2]]];
function BFS(adayacencia, inicio) {
 visitados = [];
 porVisitar = [];

 visitados.push(inicio);
 debugger;
 do {
   //otenemos el ultimo nodo visitado
   ultimoVisitado = visitados[visitados.length - 1];

   //obtenemos los nodos del ultimo nodo visitado
   nodosPorVisitar = adayacencia[ultimoVisitado][1];

   //agregamos los nodos temporales a nuestra lista de nodos por nodosPorVisitar
   for (i = 0; i < nodosPorVisitar.length; i++) {
     if (!visitados.includes(nodosPorVisitar[i])) {
       porVisitar.push(nodosPorVisitar[i]);

     }
   }

   //remover el siguiente elemento para visitar y moverlo a la lista visitados
   siguienteVisita = porVisitar.pop();
   if (!visitados.includes(siguienteVisita)) {
     visitados.push(siguienteVisita);
   }
 }


 while (porVisitar !== null && porVisitar.length > 0)
 return visitados;
}
