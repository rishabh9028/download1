// function CalSi(p,n,r)
// {
	// var si = parseFloat(p.value)*parseInt(n.value)*parseFloat(r.value)/100;
	
	// alert('Simple Interest is '+si);



// }

function CalSi(frm)
{
	if(frm.checkValidity()){
		
		var win=window.open("","","SIMPLE INTERSET.....","width=300,height=500");
		
		var message ="<html><head><title>Simple Interest Details...</title><style>*{fontFamily:'segoe UI';}</style></head><body>";
		
		message+="<h2> Principle Amount is "
			+frm.txtP.value+"</h2>";
			
		message+="<h2> No of Years is "
			+frm.txtN.value+"</h2>";
		
		message+="<h2> Rate of Interest is "
			+frm.txtR.value+"</h2>";
			
		var p = parseFloat(frm.txtP.value);
		var n = parseFloat(frm.txtN.value);
		var r = parseFloat(frm.txtR.value);
		var si = p * n * r;
		
		message += '<h1>Simple Interset is '+si/100+"</h1>";
			
		win.document.write(message);
		
	}
	
}