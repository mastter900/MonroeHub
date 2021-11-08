
// Instanciacion de Videos

const URLJSON = "/assets/JSON/videos.json"

GetVideos();

function GetVideos() {
    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado == "success") {
            let videos = respuesta;
            // videos = videos.sort(() => Math.random() -0.5) random sort videos

            for (const video of videos){
                $(".videoGrid").append(
                    `
                    <div id="${video.id}" class="col-6 col-md-4 col-lg-3 d-flex flex-column justify-content-center monroeVideo">
                        <div><iframe src="https://drive.google.com/file/d/${video.videoId}/preview"  allow="autoplay" allowfullscreen="allowfullscreen"></iframe></div>
                        <text>${video.nombre}</text> 
                        
                        <div class="d-flex align-items-center mb-3"> 
                            <ion-icon name="checkmark-circle"></ion-icon> 
                            <span>${video.prod}</span>
                        </div> 
                    </div>

                    
                    `
                    )
            }
            

        }
    })
}


$(".videoThumbnail").click(function(){
    console.log("sexo")
})




// $(".videoThumbnail").click(function(){
//     console.log(${video.nombre})
// })

