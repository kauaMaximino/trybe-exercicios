type Point = { x: number, y: number };

const printCoord = (pt: Point) => { 
  console.log(`a cordenada x é: ${pt.x}`)
  console.log(`a cordenada y é: ${pt.y}`)
};

printCoord({ x: 1, y: 2 });



type Sum = (a: number, b: number) => number;
