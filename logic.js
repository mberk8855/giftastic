console.log("i am linked!");

//create array of gif topics 

var topics = ["cat", "dog", "panda", "polar bear"];


let CORS = "https://cors-anywhere.herokuapp.com/";


function renderImages(clicked) {
    let queryURL = CORS + "https://api.giphy.com/v1/gifs/search?q=" + clicked + "&api_key=HelMxV7Vxn9eX0SrRUfVSsh08EXAzlL8";

    // Performing an AJAX request with the queryURL


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {

            console.log(queryURL);

            //console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            console.log(results);
            $("#gifs").empty()
            for (i = 0; i < results.length; i++) {
                var images = `<img class="alterimage" src="${results[i].images.fixed_height.url}" alt-src="${results[i].images.fixed_height_still.url}}">`
                $("#gifs").append(images)

            }


            $(".alterimage").on("click", function () {

                var imageClicked = $(this).attr("src")

                var altimageClicked = $(this).attr("alt-src")
                console.log(imageClicked)
                console.log(altimageClicked)
                $(this).attr("src", altimageClicked)
                $(this).attr("alt-src", imageClicked)




            })





        })
}
//create function to render buttons 

function renderbuttons() {

    //for loop read the topic and append a button to the id for every topic

    for (i = 0; i < topics.length; i++) {
        var newButton = `<button type="button" class="buttonAnimals btn btn-success" userClick="${topics[i]}">${topics[i]}</button>`
        $("#topicbuttons").append(newButton)

    }

    $(".buttonAnimals").on("click", function () {

        var topicClicked = $(this).attr("userClick")
        console.log(topicClicked)
        renderImages(topicClicked)


    })

}


// add topics from the form  // use local storage to keep it

renderbuttons()