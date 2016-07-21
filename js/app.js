$(document).ready(function() {
	//fader
	$('input[name="buy-for"]').change(function() {
		if($('#myself').is(':checked')){
			$('.add-kid-btn, .child-name-group').fadeOut().removeProp('required');
			$('#childName').val('');
		} else{
			$('.add-kid-btn, .child-name-group').fadeIn().prop('required', 'required');
		}
	});
	//masks
	$('[name="birth-date"]').mask('00/00/0000');
	$('[name="phone"]').mask('0000-0000');
	$('[name="height"]').mask('000 cm');
	//validate
	$('#profileForm').validate({
		rules: {
			'birth-date': {
				required: true,
				date: true
			}
		}
	});
//alert in json
	$.fn.serializeObject = function(){
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
	$(function() {
		$('#profileForm').submit(function() {
			alert(JSON.stringify($('#profileForm').serializeObject()));
			return false;
		});
	});
});
