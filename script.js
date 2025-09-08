function checkResult(event){
    event.preventDefault();

    //For Total Variable

    let chemistryTotal = Number(document.getElementById("chemistryTotal").value);
    let physicsTotal = Number(document.getElementById("physicsTotal").value);
    let mathsTotal = Number(document.getElementById("mathsTotal").value);
    let englishTotal = Number(document.getElementById("englishTotal").value);
    let urduTotal = Number(document.getElementById("urduTotal").value);

    //For Obtained Marks

    let chemistryMarks = Number(document.getElementById("chemistryMarks").value);
    let physicsMarks = Number(document.getElementById("physicsMarks").value);
    let mathsMarks = Number(document.getElementById("mathsMarks").value);
    let englishMarks = Number(document.getElementById("englishMarks").value);
    let urduMarks = Number(document.getElementById("urduMarks").value);

    // calculation

    let totalMarks = chemistryTotal + physicsTotal + mathsTotal + englishTotal + urduTotal;
    let obtainedMarks = chemistryMarks + physicsMarks + mathsMarks + englishMarks + urduMarks;
    
    // Taking out the Percentage

    let percentageOfsubjetcs = (obtainedMarks / totalMarks) * 100;

    // show Result

    if(percentageOfsubjetcs >= 80){
        alert(percentageOfsubjetcs + "% " + "you got an A+")
    }else if(percentageOfsubjetcs >= 70){
        alert(percentageOfsubjetcs + "you got an A")
    }else if(percentageOfsubjetcs >= 60){
        alert(percentageOfsubjetcs + "you got an B")
    }else if(percentageOfsubjetcs >= 50){
        alert(percentageOfsubjetcs + "you got an C")
    }else if(percentageOfsubjetcs >= 40){
        alert(percentageOfsubjetcs + "you got an D")
    }else if(percentageOfsubjetcs >= 33){
        alert(percentageOfsubjetcs + "Passed")
    }else{
        alert("Failed (F)")
    }
}