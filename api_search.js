function uploadMode(uName, uDescription){
	var nameInput = $('#upload-name').val().toUpperCase();
	var descriptionInput = $('#upload-desc').val();
	console.log(uName);
	console.log(uDescription);
	if (/[a-zA-Z0-9\s]+$/.test(nameInput) && /[a-zA-Z0-9\s]+$/.test(descriptionInput) == true ){ 	
	(function(){        
	    $.ajax({
	        url: 'YOUR API URL',
	        type: 'GET',	        
	        cache: false,
	        dataType: 'jsonp',
	        processData: false, // Don't process the files
	        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
	        success: function(data, textStatus, jqXHR){	        
                var bcArray = data.items;            
                var bcEntry = bcArray.filter(function (bcEntry) {
				    var entryReturn = bcEntry.name.toUpperCase() == nameInput;				    
				    return entryReturn;						
				})[0];		            
				if(bcEntry === undefined){
					alert("Sorry, this word or description cannot be found.")
				} else {
					console.log( bcEntry );				 
				}		         
	        },
	        error: function(jqXHR, textStatus, errorThrown)
	        {	          
	            console.log('ERRORS: ' + textStatus);	            
	        }
	    });
    })();  
	} else if(nameInput == "" || descriptionInput == ""){
		confirm("Please enter the required information.");
	} else {
	    confirm("Please use alphanumeric characters only.");		    
	}			
};
