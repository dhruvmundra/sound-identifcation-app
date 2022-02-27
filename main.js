var dog=0
var cat=0
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pctYocr9P/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresult);

}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var random_number_r=Math.floor(Math.random()*255)+1;
        var random_number_g=Math.floor(Math.random()*255)+1;
        var random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='detected voice is of- '+results[0].label;
        document.getElementById("result_count").innerHTML='detected dog - '+dog+'detected cat -'+cat;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById("animal_image");
        if(results[0].label=="dog") {
            img.src="dog.gif"
            dog=dog+1
            
        }
        else if(results[0].label=="cat") {
            
            cat=cat+1
            img.src="cat.gif"
        }
        else{
            img.src='listen.gif'
        }
    }
}