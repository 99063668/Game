var antwoord;

antwoord=prompt("Open de kasteeldeur");

if(antwoord=="ja"){
    document.write("Je hebt de kasteel deur geopend<br>");
    antwoord=prompt("Pak het zwaard");
    console.log("Open de kasteel deur");
    if(antwoord=="ja"){
        document.write("Je hebt het zwaar gepakt<br>");
        console.log("Pak het zwaard");
    }
    else{
        document.write("Je hebt het zwaard niet opgepakt<br>");
        antwoord=prompt("Vecht met de ridder");
        console.log("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je bent vermoord door de ridder<br>");
        }
    }
    if(antwoord=="ja"){
        antwoord=prompt("Vecht met de ridder");
        document.write("Je hebt de ridder verslagen<br>");
        console.log("Gevochten met de ridder");
        }
        else{
            antwoord=prompt("Vlucht het kasteel uit ");
            document.write("Je bent uit het kasteel gevlucht<br>");
            console.log("Vlucht het kasteel uit");

            if(antwoord=="ja"){
            document.write("Je bent veilig uit het kasteel ontsnapt<br>");
            }
            else{
                document.write("Je bent niet uit het kasteel gevlucht<br>")
                document.write("Je bent door de ridder opgepakt<br>");
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
    