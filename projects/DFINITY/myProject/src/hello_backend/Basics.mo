/* Identificadores son alfanuméricos,
    Comienzan con una letra y pueden contener guiones bajos.
*/
<id> ::= Letter (Letter | Digit | _)*
Letter ::= A..Z | a..Z
Digit :: 0..9
