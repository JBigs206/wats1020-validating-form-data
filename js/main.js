/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function(){
	//allows letters and spaces only when entering certain fields
	jQuery.validator.addMethod("lettersonly", function(value, element) 
	{
	return this.optional(element) || /^[a-z ]+$/i.test(value);
	}, "Letters and spaces only please");
	
	$('#order-form').validate({
		submitHandler: function(form){
			form.submit();
		},
		rules: {
			//Personal Info
			"your-name":{
				required: true,
				maxlength: 128,
				lettersonly: true,
			},
			"your-zip":{
				required: true,
				minlength: 5,
				digits: true,
			},
			"your-address":{
				required: true,
			},
			"your-city":{
				required: true,
			},
			"your-state":{
				required: true,
				maxlength:2,
				minlength: 2,				
			},
			//Card Info
			"card-holder-name":{
				required: true,
				lettersonly: true,
				
			},
			"card-number":{
				required: true,
				minlength: 16,
				creditcard: true,
				
			},
			"expiry-month":{
				required: true,
				digits: true,
				
			},
			"cvv":{
				required: true,
				digits: true,
				maxlength: 3,
				minlength: 3,
			//Aditional Info	
			},
			"shipping-method":{
				required: true,	
			},
			"comments":{
				maxlength: 500,
			}
		
			
		}
	});
});