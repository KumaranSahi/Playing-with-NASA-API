var sol=$("#sol");
var page=1;


function fetchImages(page,sol){
    $.ajax({
        url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&page="+page+"&api_key=6OVtIhIdVE2Xu4YCk6ViwHcf3b7wSBKhvVGjMbGi",
        method:'get',
        success:function(data){
           let photos= data.photos;
           if(photos.length === 0 ) {
            alert("No photos available for this date");
            return;
        }
        $("#image-container img").remove();
        for(let photo of photos){
            console.log(photo.img_src);
            $("#image-container").append('<img src=' + photo.img_src + ' class="image">');
        }
        }
    }).fail(function(){
        alert("Cannot fetch");
    });
}


$("#get-images").on('click',function(){

    if(sol.val() === "") {
        alert("Please fill the field");
        return;
    }
    fetchImages(page,sol.val());
   
});

$("#previous").on('click',function(){
    page--;
    fetchImages(page,sol.val());  
});

$("#next").on('click',function(){
    page++;
    fetchImages(page,sol.val());  
});