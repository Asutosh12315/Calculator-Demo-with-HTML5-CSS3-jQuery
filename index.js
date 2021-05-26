var resultField=$("#result");

function insertNumber(number){

    var existingNumber=resultField.val();

    resultField.val(existingNumber + number);
    
}

function clearResult() {
    
    resultField.val('');
}

function calculate() {
    
 var Result=eval(resultField.val())

 resultField.val(Result);

}

function deleteNumber() {
    
var presentValue=resultField.val();

if (presentValue != '') {

    resultField.val(presentValue.slice(0,-1));
    
} else {

    
}

}