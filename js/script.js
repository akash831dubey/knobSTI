titles=["Meaningful and Focused WORKSHOPS","We collaborate with your INSTITUTE for industry tours","Seminar on CARRER counselling","Spreading awareness on modern farming method","Plan an adventure trip with your travel partners","Organising visits to locations of cultural importance","Campaign in schools for Green and clean INDIA Initiative"]
$('document').ready(function(){
	startrotation()//Just starting the rotation
})



function startrotation()
{
	deg=0//to caclulate the degree of knob dial
	tick=0;//to change the knob tick color to red
	imagechanged=0//to change image one by one
	titleindex=-1//to change the title one by one

	setInterval(function(){ 
		deg+=30
		imagechanged+=1
		tick+=1

		rotatestr="rotate("+deg+"deg)"
		$("#knob").css("transform",rotatestr)//rotating the knob by 30deg


		if (tick == 13)//updating tick color to red if visited
		{
			$(".tick").removeClass("activetick")
			tick=1
		}
		$("#tickno"+tick).addClass("activetick")



		if (imagechanged > 4)
			imagechanged=1
		changeimage(imagechanged)//changing image

		


		if (deg %60 == 0)//when  2 photos are change then the title change
		{
			titleindex+=1
			if (titleindex >= titles.length)
			titleindex=0
			changetitle(titleindex)
		}
	}, 1000);
}




// Function which change the image whose name as parameter i spasssed
function changeimage(imagepos)
{
	randomplace=Math.floor(Math.random()*24) + 1
	while (currentimgof(1)==randomplace ||  currentimgof(2)==randomplace || currentimgof(3)==randomplace || currentimgof(4)==randomplace)
	{
		randomplace=Math.floor(Math.random()*24) + 1
	}

	randimgstr="images/sites/"+randomplace+".jpg"
	$("#image"+imagepos).attr("src",randimgstr);
}

function changetitle(index)
{
	$("#title").text(titles[index])
}

// function return the current image name of the passed imagenumber
function currentimgof(imagepos)
{
	str=$("#image"+imagepos).attr("src");
	return str.substring(str.lastIndexOf("/")+1,str.indexOf("."));
}