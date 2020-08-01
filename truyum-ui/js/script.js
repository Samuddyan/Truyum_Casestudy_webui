function editStatus() {
	// body...
	var a = document.getElementById('title').value;
	var b = document.getElementById('price').value;
	var c = document.getElementById('date').value;
	if (a.length>1 && a.length<66) {
		if (isNaN(b)) {
			alert('price should be number');
			

		}
		else{
			var dattee = Date.parse(c)
			if (isNaN(dattee)) {
				alert('date format wrong')
				
			}
			else{
				window.open("edit-menu-item-status.html");	
			}
			
		}
	}
	else{
		alert('Name length check');
	}
	return false();
}