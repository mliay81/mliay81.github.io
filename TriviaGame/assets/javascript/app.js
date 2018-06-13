$(document).ready(function() {



var timer = 120
var correct = 0
var incorrect = 0
var unanswered = 0
var interval = 0

// This all works
$("#start").show()
$("#quiz").hide()
$("#finish").hide()
$("#prince").hide()
$("#harmar").hide()
$("#themats").hide()

$("#begin").on("click", function() {
    $("#quiz").show()
    $("#start").hide()
    interval = setInterval(function() {
        timer--;
        $("#timer").text("Time Remaining: " + timer);
        if (timer === 0) clearInterval(interval);
        // if (timer == 0) alert("Time's up!")
        if (timer === 0) {
            $("#quiz").hide()
            $("#finish").show()
            endGame()
        }
    }, 1000);
    timer = 120
})
// The above works

// Working timer




// I can at least console log the right answer
    $(".correct").change(function(){
      if ($(this).is(':checked')){
          console.log("right")
          correct++
          console.log(correct)
      }
    });   
   
    $(".incorrect").change(function(){
        if ($(this).is(":checked")){
            console.log("nope")
            incorrect++
            console.log(incorrect)
        }
    })

    // Still can't register a blank
    // if (":checked" === false) {
    //     unanswered++
    //     console.log("unchecked")
    // }

function endGame() {
    clearInterval(interval)
    var win = $("<p>")
    var lose = $("<p>")
    // var blank = $("<p>")
    win.text("Here's what you got right: " + correct)
    lose.text("Here's what you missed: " + incorrect)
    // blank.text("Here's what you skipped: " + unanswered)
    $("#finish").append(win)
    $("#finish").append(lose)
    // $("#finish").append(unanswered)

    if (correct > 7) {
        $("#harmar").show()
    }  

    if (correct >= 5 && correct <= 7) {
        $("#themats").show()
    }


    if (correct < 5) {
        $("#prince").show()
    }
}


$("#submit").on("click", function() {
    console.log("click")
    clearInterval()
    endGame()
    $("#quiz").hide()
    $("#finish").show()
})

// Guh why won't this work? I've tried, append(), appendTo(), src in and out of quotes, moved into endGame function
// if (correct > 6) {
//     var prince = $("<img>")
//     prince.html(src='../images/prince.jpg')
//     $("#finish").append(prince)
// }  


    


// Q&A data - Wasted Code
// questions = {
//     q1: "Which Twin Cities band scored the one-hit wonder 'Surfin' Bird?'",
//     q2: "Who was the original drummer for The Replacements?",
//     q3: "Sean Tillmann also performed under what moniker, besides Har Mar Superstar?",
//     q4: "Craig Finn fronted which band before The Hold Steady?",
//     q5: "In what Minnesota city was Bob Dylan born?",
//     q6: "Prince's album Purple Rain was recorded live at which Minneapolis landmark?",
//     q7: "Tony Zaccardi just purchased which long-standing Twin Cities dive bar?",
//     q8: "Which local 90's band took their name from the movie 'It's A Wonderful Life?'?",
//     q9: "What is the name of Morris Day's valet?",
//     q10: "A new local hip hop group is named after which comic book villain?"
// };

// options = {
//     q1: ["Husker Du", "The Time", "The Trashmen", "Lizzo"],
//     q2: ["Chris Mars", "Ringo Starr", "Bob Mould","John Blackwell Jr."],
//     q3: ["Night Moves", "The Horrors", "The Suburbs", "Sean Na Na"],
//     q4: ["Lftr Pllr", "The Revolution", "Cut Copy", "Koo Koo Kangaroo"],
//     q5: ["Hibbing", "St. Paul", "Duluth", "Ely"],
//     q6: ["The Metrodome", "First Avenue", "The Mall of America", "The Turf Club"],
//     q7: ["Palmer's", "Grumpy's", "The Triple Rock", "Vegas Lounge"],
//     q8: ["Soul Asylum", "Babes In Toyland", "Zuzu's Petals", "Dillinger Four"],
//     q9: ["Bobby Stinson", "Jerome Benton", "Dan Wilson", "Lori Barbero"],
//     q10: ["The Joker", "Shredder", "Kingpin", "Lex Luthor"]
// }

// answers = {
//     q1: "The Trashmen",
//     q2: "Chris Mars",
//     q3: "Sean Na Na",
//     q4: "Lftr Pllr",
//     q5: "Duluth",
//     q6: "First Avenue",
//     q7: "Palmer's",
//     q8: "Zuzu's Petals",
//     q9: "Jerome Benton",
//     q10: "Shredder"
// }

// Q&A data

});