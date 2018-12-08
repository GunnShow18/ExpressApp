$('#submit').click(function () {

    const search = $('#search').val()
    const youUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=${KEY}`


    $.ajax({
        url: youUrl,
        success: function (data) {
            console.log(data, youUrl)
            video = data.items

            for (i = 0; i < video.length; i++) {
                watchVideo = "https://www.youtube.com/watch?v=" + video[i].id.videoId
                console.log(watchVideo)
                $("#video" + i).attr("href", watchVideo)
                $(".card-img-top" + i).attr("src", video[i].snippet.thumbnails.high.url)

                $('.youtubeItems').slideDown(1000)

            }
        }
    })
})

$('#search').keyup(function (e) {
    let key = e.which;
    if (key == 13) // the enter key code 
    {
        console.log("You pressed return/enter")
        $('#submit').click();
        return false;
    }
});






