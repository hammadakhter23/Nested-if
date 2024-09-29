// var time = prompt ("Enter your time");

// if ( time >= 9 && time < 12) {
//     alert(
//         "Good morning"
//     );
// }
// else if ( time >= 1 && time >= 7) {alert ("Good evening");

// }
// else if ( time >= 8 && time >= 12) {alert ("Good night");

// }
//  else {
//     alert("INvalid!");
// }
var userinput = prompt('Enter your age')
if (userinput >= 18) {
    alert('Thanks');
    console.log('Thanks');

    var qualification = prompt('Enter your qualification')
    if (qualification == "Masters" || qualification == 'Bachlor') {
        alert('You are eligible!')
        console.log('You are eligible!')


        var names = prompt('Enter your name')
        if (names == 'Hammad' || names == 'Akhter') {
            console.log("Hey there! your name is Hammad and your collification is bachlor and your age is 20")
           alert ('Hey there! your name is Hammad and your collification is bachlor and your age is 20')
        
        } 
        else {
            alert ( ' Submition is faild')
            console.log ( 'Submition is failed')

        }
    }
    else {
        alert('you are not eliegible!')
        console.log('you are not eliegible!')

    }

}
else {
    alert('You are bignner');
    console.log('You are bignner');
}
