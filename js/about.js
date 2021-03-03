var body = document.getElementById('body');
//create nav Tag under Body
var article = document.createElement('article');

body.appendChild(article);
article.setAttribute('class','article01');
article.setAttribute('id','about');
article.innerHTML +='<div class="container"><div class="row"></div></div>';

var my_about = function about(){
	var jason = [{
		heading:"Welcome to Meghani Nurshing Home & surgical centre",
		para:"<b>Dr. Deepak Meghani in Bilaspur-chhattisgarh</b> is one of the leading businesses in the <b>Gastroenterologists. Also known for General Physician Doctors, Gastroenterologists, Urologist Doctors, Piles Doctors, General Surgeon Doctors, Nursing Homes, Laparoscopic Surgeons,</b> Doctors For Laparoscopy and much more.",
		list01:"24 Hour Emergency Service",
		list02:"X-ray & Pathology  Facilty",
		about_img:"images/meghani_nursing_home_bilaspur.png",
	}]
	
	document.querySelector('.article01>.container>.row').innerHTML +=`
	  <div class="myAbout">
	     <div class="text-center">
		      <h2>${jason[0].heading}</h2>
		 </div> 
	  </div>
	  <div class="col-md-6">
	      <div class="myContent">
		      <h3>About</h3>
			  <p>${jason[0].para}</p>
			  <ul class="nav">
			     <li><b>${jason[0].list01}</b></li>
				 <li><b>${jason[0].list02}</b></li>
			  </ul>
		  </div>
	  </div>
	  <div class="col-md-6">
	      <div class="myimg">
		      <img src="${jason[0].about_img}" class="img-thumbnail">
		  </div>
	  </div>
	`;
}
my_about();


