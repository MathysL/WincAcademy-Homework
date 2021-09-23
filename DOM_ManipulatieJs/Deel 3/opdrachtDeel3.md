Deel 3 - Meerdere element verwijderen uit de DOM
Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.

Todolist:

Maak een eventlistener vast aan de button
Maak een functie vast aan de eventlistener
In de functie: selecteer de parent
Verwijder alle kinderen van de parent 
 De simpele manier: set de innerHTML van de parent naar een empty string 
 De chique manier: selecteer de parent en gebruik een loop om elk element 1 voor 1 te verwijderen met .remove() of met .removeChild()