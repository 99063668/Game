var antwoord;

antwoord=prompt("Open de kasteel deur");

if(antwoord=="ja"){
    antwoord=prompt("Pak het zwaard");
    console.log("Pak het zwaard");
    if(antwoord=="ja"){
        document.write("Je hebt het zwaard gepakt<br>");
        antwoord=prompt("Vecht met de ridder");
        console.log("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je hebt gevochten met de ridder<br>");
            document.write("Je hebt de ridder verslagen<br>");
            console.log("Je hebt de ridder verslagen");
        }
        else{
            antwoord=prompt("Sluip voorbij de ridder")
            console.log("Sluip voorbij de ridder");
            if(antwoord=="ja"){
            document.write("Je bent betrapt door de ridder en opgepakt<br>");
            console.log("Je bent betrapt door de ridder en opgepakt");
            }
            else{
                document.write("Je hebt succesvol het kasteel verlaten");
            }
        }
    }
    else{
        antwoord=prompt("Vecht met de ridder");
        console.log("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je hebt het zwaard niet gepakt<br>");
            document.write("Je bent gaan vechten met de ridder<br>");
            document.write("Je bent vermoord door de ridder<br>");
            console.log("Je bent vermoord door de ridder");
        } 
        else{
        document.write("Je bent niet gaan vechten met de ridder<br>");
        document.write("Je bent voorbij de ridder geslopen en hebt het kasteel bereikt<br>");
        console.log("Je bent voorbij de ridder geslopen en hebt het kasteel bereikt");
        
}
}
}else{
    document.write("Je bent niet door de deur gegaan<br>");
    antwoord=prompt("Klim over de muur heen");
    console.log("Klim over de muur heen");
    if(antwoord=="ja"){
        document.write("Je bent over de muur geklommen<br>");
        antwoord=prompt("Vecht met de ridder");
        console.log("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je bent door de ridder vermoord<br>");
        }
        else{
            document.write("Je bent niet de ridder gaan vechten<br>");
            antwoord=prompt("Sluip voorbij de ridder");
            console.log("Sluip voorbij de ridder");

            if(antwoord=="ja"){
                document.write("Je bent voorbij de ridder geslopen<br>");
                document.write("Het is je gelukt om het kasteel binnen te komen<br>");
            }
            else{
                document.write("Je bent niet voorbij de ridder geslopen<br>");
                document.write("De ridder heeft je betrapt en opgepakt<br>");
            }

        }
    }
    else{
        document.write("Je bent niet over de muur geklommen<br>");
        document.write("Het is je niet gelukt om in het kasteel te komen<br>");
        }
        }