var antwoord;

antwoord=prompt("Open de kasteeldeur");

if(antwoord=="ja"){
    antwoord=prompt("Pak het zwaard");
}
else{
    antwoord=prompt("Vecht met de ridder");
}
    if(antwoord=="ja"){
        antwoord=prompt("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je hebt de ridder verslagen");
        }
            else{
                antwoord=prompt("Vlucht naar de kasteel toren");
                if(antwoord=="ja"){
                    document.write("Je hebt het kasteel succesvol bereikt");
                }
                    else{
                        document.write("De ridder heeft je onderweg betrapt en opgepakt")
                    }
                }
            }
    
    else{
        antwoord=prompt("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je bent vermoord door de ridder");
        } 
        else{
            antwoord=prompt("Vlucht het kasteel uit");
            if(antwoord=="ja"){
                document.write("Het is je niet gelukt om het kasteel binnen te komen");
            }
                else{
                    document.write("Je bent vermoord door de ridder");
                }
        }
}
else{
    antwoord=prompt("Klim over de kasteelmuur heen");
    if(antwoord=="ja"){
        antwoord=prompt("Vecht met de ridder");
        if(antwoord=="ja"){
            document.write("Je bent door de ridder vermoord");
        }
        else{
            antwoord=prompt("Sluip voorbij de ridder");
            if(antwoord=="ja"){
            document.write("Het is je gelukt om het kasteel binnen te komen");
                 }
                    else{
                    document.write("De ridder heeft je onderweg betrapt en opgepakt");
                     }
                  }
                }
                     else{
                         document.write("Het is je niet gelukt om in het kasteel te komen")
                     }

 }