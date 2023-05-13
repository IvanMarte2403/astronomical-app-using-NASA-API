function nasaRequest(){
  // This function is used to get the data from the NASA API and run when the  element is loaded and when the date is changed.

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function (){
    // This function is used to get the data from the NASA API and run when the  element is loaded and when the date is changed.
    if(this.readyState == 4 && this.status == 200){
      let data = JSON.parse(this.responseText);
      let copyright  = data["copyright"];
      let date  = data["date"];
      let explanation  = data["explanation"];
      let hdurl  = data["hdurl"];
      let media_type  = data["media_type"];
      title   = data["title"];
      let url  = data["url"];

      // With .innerHtml we can add the data to the HTML elements when the user change the date for this reason in the variable have the HTML code.

      let imageType = `
      <img src="" class="w-100" alt="" id="wrapper-image">

      <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-mbd-ripple-color="light">
                <img src="" alt="" class="w-100" id="wrapper-url">

                <a href="" id="wrapper-hdurl" target="_b" >
                    <div class="mask"></div>
                </a>
            </div>
      `;

      let videoType = `

      <div class="ratio ratio-16x9">
      <iframe id="wrapper-video" src="" frameborder="0" allowfullscreen></iframe>
      </div>
      `;

      // For the correct run of the need code is good see the inforomation is correct in the console
      console.log(copyright);
      console.log(date);
      console.log(explanation);
      console.log(hdurl);
      console.log(media_type);
      console.log(title);
      console.log(url);

      // Read the elements by id and add the data to the HTML elements.

    //   document.getElementById("wrapper-url").src = url;
      document.getElementById("wrapper-title").innerHTML = title;
      document.getElementById("wrapper-copyright").innerHTML = copyright;
      document.getElementById("wrapper-explanation").innerHTML = explanation;
    //   document.getElementById("wrapper-hdurl").href= hdurl;

      if(media_type == 'video'){
            document.getElementById("wrapper-media").innerHTML = videoType;
            document.getElementById("wrapper-video").src = url;

        }else{
            document.getElementById("wrapper-media").innerHTML = imageType;
            document.getElementById("wrapper-image").src = url;
            document.getElementById("wrapper-hdurl").href = hdurl;
        }
         titleAnimation(title);
    }
  }

  // Variables if the queryDate change 
let datepicker_date = document.getElementById("wrapper-day").value;
let queryUrl = "https://api.nasa.gov/planetary/apod?api_key=";
let queryKey = "xv05hgzNgLdLWXKK8oT96eAhOUq2Xx7cbP87rMkn&";
let queryDate = "date=" + datepicker_date + "&";
let queryFull = queryUrl + queryKey + queryDate;

xmlhttp.open('GET',queryFull,true);
xmlhttp.send();
}
nasaRequest();

// This part listen when the user change the date-picker and run the function nasaRequest() to run the aplication again.
const myDatepicker = document.getElementById("date-picker");
myDatepicker.addEventListener('change',() => {
    nasaRequest();
   
});     

nasaRequest.onload;
// titleAnimation.onload;
// nasaRequest();
