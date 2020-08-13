$(function(){
	var fromVal = 0;
	var toVal = 0;
	var pct_change = 0;
	var quantity = 0;
	var change = 0;
    $('#from').keyup(function(){
    	fromVal = parseFloat($('#from').val());
    })
    $('#to').keyup(function(){
    	toVal = parseFloat($('#to').val());
    	pct_change = (toVal-fromVal)/fromVal;
    	$('#pct_change').val((pct_change*100).toFixed(2));
    	if (quantity>0){
    		change = (toVal-fromVal)*quantity;
    		$('#change').val(change.toFixed(2));
    	}
    })
    $('#pct_change').keyup(function (){
        pct_change = parseFloat($('#pct_change').val())/100;
        toVal = fromVal*(1+pct_change);
        $('#to').val(toVal.toFixed(2));
        change = (toVal-fromVal)*quantity;
        $('#change').val(change.toFixed(2));
    })
    $('#quantity').keyup(function(){
    	quantity = parseFloat($('#quantity').val());
    	change = (toVal-fromVal)*quantity;
    	$('#change').val(change.toFixed(2));
    })
    $('#change').keyup(function(){
    	if (quantity>0){
    		change = parseFloat($('#change').val());
    		toVal = parseFloat(fromVal)+parseFloat(change/quantity);
    		$('#to').val(toVal);
    		pct_change = (toVal-fromVal)/fromVal;
    		$('#pct_change').val((pct_change*100).toFixed(2));
    	}
    })
});