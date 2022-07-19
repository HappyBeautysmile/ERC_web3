/* Identificadores son alfanuméricos,
    Comienzan con una letra y pueden contener guiones bajos.
*/
<id> ::= Letter (Letter | Digit | _)*
Letter ::= A..Z | a..Z
Digit :: 0..9

/* 
    Números enteros se escriben como decimales o hexadecimales
    Los dígitos subsiguientes pueden tener como prefijo un único guión bajo
*/

digit ::= ["0"-"9"];
hexDigit ::= ["0"-"9"-"a"-"f"-"A"-"F"];
num ::= digit("_"? digit)*
hexnum ::= hexDigit("_"? hexDigit)*
nat ::= num | "0x" hexnum

/* 
    Los literales de coma flotante se excribne en 0x notación científica decimal o hexadecimal
*/

let franc = num;
let hexFranc = hexnum;
let float = 
    num "." frac?
|   num ("." frac?)? ("e" | "E") sign? num
|   "0x" hexnum "." hexFranc?
|   "0x" hexnum ("." hexFranc?)? ("p" | "P") sign? num