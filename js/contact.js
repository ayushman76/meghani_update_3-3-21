var body = document.getElementById('body');
//create nav Tag under Body
var article = document.createElement('article');

body.appendChild(article);
article.setAttribute('class','article06');
article.innerHTML +='<div class="container"><div class="row"><div class="text-center"><h6>Contact Us</h6></div></div></div>';
article.setAttribute('id','contact');

var jason = [{
	ad:"Sadar Bazaar Bilaspur in fornt of CIMS Chowk",
	tel:'07752400498',
	ph:'07752400498',
	em:'poojanursinghome@gmail.com',
	
},{
	phone:'<input type="phone" placeholder="Phone" class="form-control">',
	email:'<input type="email" placeholder="email" class="form-control">',
	Time:'<input type="time" placeholder="Phone" class="form-control">',
	Date:'<input type="date" placeholder="Phone" class="form-control">',
	 Desease:'<input type="phone" placeholder="Problem" class="form-control">',
	 Submit:'<input type="Submit" class="btn-primary pad-10">'
	  
}]
 document.querySelector('.article06>.container>.row').innerHTML +=`
   <div class="col-md-6">
       <div class="myContect">
	       <h3 class="text-center">Contact Form</h3>
	         <form>
			        <div class="form-group">
					      ${jason[1].phone}
					</div>
					 <div class="form-group">
					      ${jason[1].email}
					</div>
					 <div class="form-group">
					      ${jason[1].Date}
					</div>
					 <div class="form-group">
					      ${jason[1].Time}
					</div>
					 <div class="form-group">
					      ${jason[1].Desease}
					</div>
					<div class="form-group">
					      ${jason[1].Submit}
					</div>
			 </form>
	    
	   </div>
   </div>
   <div class="col-md-6">
       <div class="myContect">
	        <table class="table table-light">
                            <h1 class="text-center color-white">Our Timing</h1>
                            <tbody>
                                <tr>
                                    <td>Monday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>

                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Tuesday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Wednesday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Thursday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Friday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Saturday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td> 6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Monday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td>6:00Pm to 8:00Pm</td>

                                </tr>
                                <tr>
                                    <td>Sunday:- </td>
                                    <td>10:00Am</td>

                                    <td>2:00Pm</td>
                                    <td>6:00Pm to 8:00Pm</td>

                                </tr>

                            </tbody>
                     </table>
	          </div>
        </div>
   
`; 