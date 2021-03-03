//get Body tag
var body = document.getElementById('body');
//create header Tag under Body
var header = document.createElement('header');

body.appendChild(header);
header.setAttribute('id','index');

var head =  function myheader(){
	//create Jason Data For Header 
	var jason = [{
      	logo: "Meghani Nurshing Home",
	},{
		tel_widget:"7752400498",
		phone01_widget:"7024791212",
		phone02_widget:"9111493493",
		email_widget:"meghaninursinghome@gmail.com",
	}];
     
	 document.querySelector('header').innerHTML +=`
	    <div class="container">
		    <div class="row">
			    <div class="col-md-4">
				    <div class="logo_Meghani_Nursing_Home">
					    <h1>${jason[0].logo}</h1>
					</div>
				</div>
				<div class="col-md-8">
				    <div class="Widget_Meghani_Nursing_Home">
					    <ul class="navbar-nav nav pad-10 pull ">
						   <li>
						      <a href="tel:${jason[1].tel_widget}"><i class="fa fa-phone" style="font-size:24px"></i> ${jason[1].tel_widget}</a>
						   </li>
						   <li>
						      <a href="tel:${jason[1].phone01_widget}"><i class="fa fa-phone" style="font-size:24px"></i> ${jason[1].phone01_widget}</a>
						   </li>
						   <li>
						      <a href="tel:${jason[1].phone02_widget}"><i class="fa fa-phone" style="font-size:24px"></i> ${jason[1].phone02_widget}</a>
						   </li>
						   <li>
						      <a href="mailto:${jason[1].email_widget}"><i class="fa fa-envelope" style="font-size:24px"></i> ${jason[1].email_widget}</a>
						   </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	 `;
	
}
head();
// function Head End
