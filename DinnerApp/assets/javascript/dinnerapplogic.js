$( document ).ready(function() {
    console.log( "ready!" );

var restaurants = [
    "Naughty Greek",
    "Pizzeria Lola",
    "Sassy Spoon",
    "Gyst",
    "Broder's",
    "Tori 44",
    "Harriet Brasserie",
    "Cook St Paul",
    "Revival",
    "Town Talk",
    "Naviya's Thai Brasserie",
    "Bark and the Bite",
    "Sheridan Room",
    "Pimento",
    "Sea Salt",
    "Spitz",
    "Lyn 65",
    "Constatine",
    "Groveland Tap",
    "Rincon 38",
    "Gardens of Salonica",
    "Hi-Lo",
    "Hot Plate (Brunch only)",
    "Chimborazo",
    "Taco Riendo",
    "Cosetta",
    "Mancini's",
    "Red Rabbit",
    "Bad Waitress",
    "Manny's",
    "Butcher and the Boar",
    "Draft Horse",
    "Anchor",
    "Borough/Parlor",
    "Pajarito",
    "Black Coffee and Waffles",
    "Lotus",
    "On's Kitchen",
    "Barbette",
    "Copper Hen",
    "Hola Arepa",
    "Matt's",
    "Happy Gnome",
    "Manny's Tortas",
    "Bonicelli Kitchen",
    "Everest on Grand",
    "George and the Dragon",
    "Ngon",
    "Joan's in the Park",
    "Moto-i",
    "Gorkha Palace",
    "Kenwood",
    "Nighthawks/Birdie",
    "Bar La Grassa",
    "Tongue In Cheek",
    "Muddy Waters",
    "Tori Ramen",
    "Masu",
    "That deli in St Paul",
    "Alma",
    "Kbop Korean Bistro",
    "Crossroads Deli",
    "Holy Land",
    "St Dinette",
    "Savoy's",
    "Baja Haus",
    "Bar Brigade",
    "Sushi Fix",
    "Bellecour",
    "The Lowry",
    "Blue Door",
    "Eat Street Social",
    "Zen Box",
    "Merlin's Rest",
    "Harry Singh's",
    "Heirloom",
    "112 Eatery",
    "India Spice House",
    "Brasa",
    "Blackbird Cafe",
    "J. Selby's",
    "Icehouse",
    "St Genevieve",
    "Rose Street Patisserie",
    "PinKU",
    "Cave Vin",
    "Black Sheep",
    "The Sample Room",
    "Hazel's",
    "Grand Szechuan",
    "Tilia",
    "Little Tijuana",
    "The Nook",
    "Sakura",
    "Bar Luchador",
    "Spoon and Stable",
    "Kyatchi",
    "Bachelor Farmer",
    "Kado no Mise",
    "Book Club",
    "Burch",
    "Runyon's",
    "Brit's",
    "Boca Chica",
    "Chef Shack",
    "The Mill",
    "Esker Grove",
    "Bradstreet Neighborhood Crafthouse",
    "WA Frost",
    "Meritage",
    "Young Joni",
    "Terzo Vino",
    "Rabbit Hole",
    "Stewart's",
    "1029 Bar",
    "Mucci's",
    "TIlt",
    "Red Stag",
    "Costa Blanca Bistro",
    "Birchwood Cafe",
    "Corner Table",
    "Fuji Ya",
    "Maya",
    "Red Cow",
    "Pig Ate My Pizza",
    "Grand Catch",
    "Pearl and the Thief",
    "The Bungalow Club",
    "Hai Hai",
    "Spring Cafe at Como Park Pavillion",
    "Surly"
]

var cuisines = [
    "Indian",
    "Middle Eastern",
    "The UK",
    "Cajun",
    "Soul Food",
    "Chinese",
    "French",
    "Greek",
    "Italian",
    "Korean",
    "Japanese",
    "Mongolian Barbecue",
    "Mexican",
    "South American",
    "Polish",
    "Russian",
    "American"
]

        

        


    $("#cuisineButton").click(function() {
        var randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
        console.log(randomCuisine)
        $("#cuisine").text(randomCuisine)
    })

    $("#restaurantButton").click(function() {
        var randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
        console.log(randomRestaurant)
        $("#place").text(randomRestaurant)
    })

    $("#restaurantClear").click(function() {
        $("#place").empty()
    })

    $("#cuisineClear").click(function() {
        $("#cuisine").empty()
    })

});