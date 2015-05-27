$(document).ready(function(){
$('#total').keyup(calculate_tax);
$('#calculate_tip').click(calculate_tip);
});

function calculate_tax(){
var total,tax;
total = $('#total').val();
tax = total * 0.13;
tax = tax.toFixed(2);
$('#tax').val(tax);
}

function calculate_tip(){
var total,tax,tip_percent,tip_amt,error;
error = false;
total = $('#total').val();
tax = $('#tax').val();
tip_percent = $('#tip_percent').val();
split = $('#split').val();
//reset border colors
$('#total').css('border-color','#acaeb0');
$('#tip_percent').css('border-color','#acaeb0');
if(total == '' || total < 0){
error = true;
$('#total').css('border-color','red');
alert("There seems to be an error!");
$('#calculate_tip').css('border-color','red');
$('#calculate_tip').css('color','red');
}
if(tip_percent == '' || tip_percent < 0){
error = true;
$('#tip_percent').css('border-color','red');
alert("There seems to be an error!");
$('#calculate_tip').css('border-color','red');
$('#calculate_tip').css('color','red');
}
if(split == '' || split < 0){
error = true;
alert("There seems to be an error!");
$('#calculate_tip').css('border-color','red');
$('#calculate_tip').css('color','red');
}
if(!error){
total = parseFloat(total) + parseFloat(tax);
tip_percent = tip_percent/100;
tip_amt = total * tip_percent;
if(split > 0){
tip_amt = tip_amt / split;
}
tip_amt = tip_amt.toFixed(2);
$('#tip_amt').val('$' + tip_amt);
}
}