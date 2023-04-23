import * as ReadlineSync from 'readline-sync'
import { Casino } from './casino';
import { Player } from './player';

console.clear();
let edad=Number(ReadlineSync.question("Ingrese su Edad: "));
let nombre=ReadlineSync.question("Ingrese su nombre: ");
let montoInicial=Number(ReadlineSync.question("Ingrese la cantidad de creditos para jugar: "))

const jugador=new Player(nombre,edad,montoInicial);
const casino:Casino=new Casino(jugador);

casino.newGame()

