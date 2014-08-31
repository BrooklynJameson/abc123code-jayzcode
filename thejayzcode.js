



var n = prompt("Enter an Integer. Ten Digits or Less.", "");




var firstDigit = n.toString();
var firstSlice = firstDigit.slice(0,1);
var secondSlice = firstDigit.slice(1,2);
var thirdSlice = firstDigit.slice(2,3);
var fourthSlice = firstDigit.slice(3,4);
var fifthSlice = firstDigit.slice(4,5);
var sixthSlice = firstDigit.slice(5,6);
var seventhSlice = firstDigit.slice(6,7);
var eighthSlice = firstDigit.slice(7,8);
var ninthSlice = firstDigit.slice(8,9);
var tenthSlice = firstDigit.slice(9,10);

var sliceDigitOne = parseInt(firstSlice);
var sliceDigitTwo = parseInt(secondSlice);
var sliceDigitThree = parseInt(thirdSlice);
var sliceDigitFour = parseInt(fourthSlice);
var sliceDigitFive = parseInt(fifthSlice);
var sliceDigitSix = parseInt(sixthSlice);
var sliceDigitSeven = parseInt(seventhSlice);
var sliceDigitEight = parseInt(eighthSlice);
var sliceDigitNine = parseInt(ninthSlice);
var sliceDigitTen = parseInt(tenthSlice);


									
									
								
									
									
var dubdigitOneTwo = (firstSlice + secondSlice);
var dubdigitTwoThree = (secondSlice + thirdSlice);
var dubdigitThreeFour = (thirdSlice + fourthSlice);
var dubdigitFourFive = (fourthSlice + fifthSlice);
var dubdigitFiveSix = (fifthSlice + sixthSlice);
var dubdigitSixSeven = (sixthSlice + seventhSlice);
var dubdigitSevenEight = (seventhSlice + eighthSlice);
var dubdigitEightNine = (eighthSlice + ninthSlice);
var dubdigitNineTen = (ninthSlice + tenthSlice);

var sliceDigitBone = (dubdigitOneTwo);
var sliceDigitBtwo = (dubdigitTwoThree);
var sliceDigitBthree = (dubdigitThreeFour);
var sliceDigitBfour = (dubdigitFourFive);
var sliceDigitBfive = (dubdigitFiveSix);
var sliceDigitBsix = (dubdigitSixSeven);
var sliceDigitBseven = (dubdigitSevenEight);
var sliceDigitBeight = (dubdigitEightNine);
var sliceDigitBnine = (dubdigitNineTen);

var tripdigitOneTwoThree = (firstSlice + secondSlice + thirdSlice);
var tripdigitTwoThreeFour = (secondSlice + thirdSlice + fourthSlice);
var tripdigitThreeFourFive = (thirdSlice + fourthSlice + fifthSlice);
var tripdigitFourFiveSix = (fourthSlice + fifthSlice + sixthSlice);
var tripdigitFiveSixSeven = (fifthSlice + sixthSlice + seventhSlice);
var tripdigitSixSevenEight = (sixthSlice + seventhSlice + eighthSlice);
var tripdigitSevenEightNine = (seventhSlice + eighthSlice + ninthSlice);
var tripdigitEightNineTen = (eighthSlice + ninthSlice + tenthSlice);

var sliceDigitTtwo = (tripdigitOneTwoThree);
var sliceDigitTthree = (tripdigitTwoThreeFour);
var sliceDigitTfour = (tripdigitThreeFourFive);
var sliceDigitTfive = (tripdigitFourFiveSix);
var sliceDigitTsix = (tripdigitFiveSixSeven);
var sliceDigitTseven = (tripdigitSixSevenEight);
var sliceDigitTeight = (tripdigitSevenEightNine);
var sliceDigitTnine = (tripdigitEightNineTen);



var digitOne;
var digitTwo;
var digitThree;
var digitFour;
var digitFive;
var digitSix;
var digitSeven;
var digitEight;
var digitNine;
var digitTen;

var digitBone;
var digitBtwo;
var digitBthree;
var digitBfour;
var digitBfive;
var digitBsix;
var digitBseven;
var digitBeight;
var digitBnine;

var digitTtwo;
var digitTthree;
var digitTfour;
var digitTfive;
var digitTsix;
var digitTseven;
var digitTeight;
var digitTnine;







var ptc=new Array(); // regular array (add an optional integer
ptc[0]="0";       // argument to control array's size)
ptc[1]="A";
ptc[2]="B";
ptc[3]="C";
ptc[4]="D";
ptc[5]="E";
ptc[6]="F";
ptc[7]="G";
ptc[8]="H";
ptc[9]="J";
ptc[10]="K";
ptc[11]="L";
ptc[12]="M";
ptc[13]="N";
ptc[14]="O";
ptc[15]="P";
ptc[16]="Q";
ptc[17]="R";
ptc[18]="S";
ptc[19]="T";
ptc[20]="U";
ptc[21]="V";
ptc[22]="W";
ptc[23]="X";
ptc[24]="Y";
ptc[25]="Z";









//First Digit Here : goes sliceDigitOne through sliceDigitNine

if (sliceDigitOne === 1)
{
digitOne = ptc[1];
}
else if (sliceDigitOne === 2)
{
digitOne = ptc[2];
}
else if(sliceDigitOne === 3)
{
digitOne = ptc[3];
}
else if (sliceDigitOne === 4)
{
digitOne = ptc[4]
}

else if (sliceDigitOne === 5)
{
digitOne = ptc[5]
}

else if (sliceDigitOne === 6)
{
digitOne = ptc[6]
}
else if (sliceDigitOne === 7)
{
digitOne = ptc[7]
}

else if (sliceDigitOne === 8)
{
digitOne = ptc[8]
}

else if (sliceDigitOne === 9 )
{
digitOne = ptc [9]
}

else if (sliceDigitOne === 0)
{
digitOne = ptc [0]
}

else 
{
digitOne = "."
}


// Second digit here sliceDigitTwo

if (sliceDigitTwo === 1)
{
digitTwo = ptc[1]
}
else if (sliceDigitTwo === 2)
{
digitTwo = ptc[2]
}
else if (sliceDigitTwo === 3)
{
digitTwo = ptc[3];
}

else if (sliceDigitTwo === 4)
{
digitTwo = ptc[4]
}

else if (sliceDigitTwo === 5)
{
digitTwo = ptc[5]
}

else if (sliceDigitTwo === 6)
{
digitTwo = ptc[6]
}

else if (sliceDigitTwo === 7)
{
digitTwo = ptc[7]
}

else if (sliceDigitTwo === 8)
{
digitTwo = ptc[8]
}

else if (sliceDigitTwo === 9)
{
digitTwo = ptc[9]
}

else if (sliceDigitTwo === 0 )
{
digitTwo = ptc [0]
}

//Testing Null Cases Here


else 
{
digitTwo = "."
}


// Digit Three Here

if (sliceDigitThree === 1)
{
digitThree = ptc[1]
}
else if (sliceDigitThree === 2)
{
digitThree = ptc[2]
}
else if (sliceDigitThree === 3)
{
digitThree = ptc[3];
}

else if (sliceDigitThree === 4)
{
digitThree = ptc[4]
}

else if (sliceDigitThree === 5)
{
digitThree = ptc[5]
}

else if (sliceDigitThree === 6)
{
digitThree = ptc[6]
}

else if (sliceDigitThree === 7)
{
digitThree = ptc[7]
}

else if (sliceDigitThree === 8)
{
digitThree = ptc[8]
}

else if (sliceDigitThree === 9)
{
digitThree = ptc[9]
}

else if (sliceDigitThree === 0)
{
digitThree = ptc [0]
}

//Testing Null Cases Here

else 
{
digitThree = "."
}

// Digit Four here

if (sliceDigitFour === 1)
{
digitFour = ptc[1]
}
else if (sliceDigitFour === 2)
{
digitFour = ptc[2]
}
else if (sliceDigitFour === 3)
{
digitFour = ptc[3];
}

else if (sliceDigitFour === 4)
{
digitFour = ptc[4]
}

else if (sliceDigitFour === 5)
{
digitFour = ptc[5]
}

else if (sliceDigitFour === 6)
{
digitFour = ptc[6]
}

else if (sliceDigitFour === 7)
{
digitFour = ptc[7]
}

else if (sliceDigitFour === 8)
{
digitFour = ptc[8]
}

else if (sliceDigitFour === 9)
{
digitFour = ptc[9]
}

//Testing Null Cases Here

else if (sliceDigitFour === 0)
{
digitFour = ptc[0]
}

else 
{
digitFour = "."
}

// Digit Five Here

if (sliceDigitFive === 1)
{
digitFive = ptc[1]
}
else if (sliceDigitFive === 2)
{
digitFive = ptc[2]
}
else if (sliceDigitFive === 3)
{
digitFive = ptc[3];
}

else if (sliceDigitFive === 4)
{
digitFive = ptc[4]
}

else if (sliceDigitFive === 5)
{
digitFive = ptc[5]
}

else if (sliceDigitFive === 6)
{
digitFive = ptc[6]
}

else if (sliceDigitFive === 7)
{
digitFive = ptc[7]
}

else if (sliceDigitFive === 8)
{
digitFive = ptc[8]
}

else if (sliceDigitFive === 9)
{
digitFive = ptc[9]
}

else if (sliceDigitFive === 0)

{
digitFive = ptc[0]
}

//Testing Null Cases Here


else 
{
digitFive = "."
}


// Digit Six Here

if (sliceDigitSix === 1)
{
digitSix = ptc[1]
}
else if (sliceDigitSix === 2)
{
digitSix = ptc[2]
}
else if (sliceDigitSix === 3)
{
digitSix = ptc[3];
}

else if (sliceDigitSix === 4)
{
digitSix = ptc[4]
}

else if (sliceDigitSix === 5)
{
digitSix = ptc[5]
}

else if (sliceDigitSix === 6)
{
digitSix = ptc[6]
}

else if (sliceDigitSix === 7)
{
digitSix = ptc[7]
}

else if (sliceDigitSix === 8)
{
digitSix = ptc[8]
}

else if (sliceDigitSix === 9)
{
digitSix = ptc[9]
}

else if (sliceDigitSix === 0)
{
digitSix = ptc[0]
}

//Testing Null Cases Here


else 
{
digitSix = "."
}


// Digit Seven Here

if (sliceDigitSeven === 1)
{
digitSeven = ptc[1]
}
else if (sliceDigitSeven === 2)
{
digitSeven = ptc[2]
}
else if (sliceDigitSeven === 3)
{
digitSeven = ptc[3];
}

else if (sliceDigitSeven === 4)
{
digitSeven = ptc[4]
}

else if (sliceDigitSeven === 5)
{
digitSeven = ptc[5]
}

else if (sliceDigitSeven === 6)
{
digitSeven = ptc[6]
}

else if (sliceDigitSeven === 7)
{
digitSeven = ptc[7]
}

else if (sliceDigitSeven === 8)
{
digitSeven = ptc[8]
}

else if (sliceDigitSeven === 9)
{
digitSeven = ptc[9]
}

else if (sliceDigitSeven === 0)
{
digitSeven = ptc[0]
}

//Testing Null Cases Here


else 
{
digitSeven = "."
}

// Digit Eight Here

if (sliceDigitEight === 1)
{
digitEight = ptc[1]
}
else if (sliceDigitEight === 2)
{
digitEight = ptc[2]
}
else if (sliceDigitEight === 3)
{
digitEight = ptc[3];
}

else if (sliceDigitEight === 4)
{
digitEight = ptc[4]
}

else if (sliceDigitEight === 5)
{
digitEight = ptc[5]
}

else if (sliceDigitEight === 6)
{
digitEight = ptc[6]
}

else if (sliceDigitEight === 7)
{
digitEight = ptc[7]
}

else if (sliceDigitEight === 8)
{
digitEight = ptc[8]
}

else if (sliceDigitEight === 9)
{
digitEight = ptc[9]
}

else if (sliceDigitEight === 0)
{
digitEight = ptc[0]
}

//Testing Null Cases Here


else 
{
digitEight = "."
}

// Digit Nine Here

if (sliceDigitNine === 1)
{
digitNine = ptc[1]
}
else if (sliceDigitNine === 2)
{
digitNine = ptc[2]
}
else if (sliceDigitNine === 3)
{
digitNine = ptc[3];
}

else if (sliceDigitNine === 4)
{
digitNine = ptc[4]
}

else if (sliceDigitNine === 5)
{
digitNine = ptc[5]
}

else if (sliceDigitNine === 6)
{
digitNine = ptc[6]
}

else if (sliceDigitNine === 7)
{
digitNine = ptc[7]
}

else if (sliceDigitNine === 8)
{
digitNine = ptc[8]
}

else if (sliceDigitNine === 9)
{
digitNine = ptc[9]
}

else if (sliceDigitNine === 0)
{
digitNine = ptc[0]
}

//Testing Null Cases Here


else 
{
digitNine = "."
}


// Here is Tenth Digit


if (sliceDigitTen === 1)
{
digitTen = ptc[1]
}
else if (sliceDigitTen === 2)
{
digitTen = ptc[2]
}
else if (sliceDigitTen === 3)
{
digitTen = ptc[3];
}

else if (sliceDigitTen === 4)
{
digitTen = ptc[4]
}

else if (sliceDigitTen === 5)
{
digitTen = ptc[5]
}

else if (sliceDigitTen === 6)
{
digitTen = ptc[6]
}

else if (sliceDigitTen === 7)
{
digitTen = ptc[7]
}

else if (sliceDigitTen === 8)
{
digitTen = ptc[8]
}

else if (sliceDigitTen === 9)
{
digitTen = ptc[9]
}

//Testing Null Cases Here

else if (sliceDigitTen === 0)
{
digitTen = ptc[0]
}


else 
{
digitTen = "."
}

	
	
	
	
// Here are the doubles with sliceDigitBone	

if (sliceDigitBone === "00")
{
digitBone = ptc[0]
}


else if (sliceDigitBone === "01")
{
digitBone = ptc[1];
}

else if (sliceDigitBone === "02")
{
digitBone = ptc[2];
}
else if(sliceDigitBone === "03")
{
digitBone = ptc[3];
}
else if (sliceDigitBone === "04")
{
digitBone = ptc[4]
}

else if (sliceDigitBone === "05")
{
digitBone = ptc[5]
}

else if (sliceDigitBone === "06")
{
digitBone = ptc[6]
}
else if (sliceDigitBone === "07")
{
digitBone = ptc[7]
}

else if (sliceDigitBone === "08")
{
digitBone = ptc[8]
}

else if (sliceDigitBone === "09" )
{
digitBone = ptc [9]
}

else if (sliceDigitBone === "10")
{
digitBone = ptc[10];
}

else if (sliceDigitBone === "11")
{
digitBone = ptc[11];
}
else if(sliceDigitBone === "12")
{
digitBone = ptc[12];
}
else if (sliceDigitBone === "13")
{
digitBone = ptc[13]
}

else if (sliceDigitBone === "14")
{
digitBone = ptc[14]
}

else if (sliceDigitBone === "15")
{
digitBone = ptc[15]
}
else if (sliceDigitBone === "16")
{
digitBone = ptc[16]
}

else if (sliceDigitBone === "17")
{
digitBone = ptc[17]
}

else if (sliceDigitBone === "18" )
{
digitBone = ptc [18]
}

else if (sliceDigitBone === "19" )
{
digitBone = ptc [19]
}

else if (sliceDigitBone === "20" )
{
digitBone = ptc [20]
}

else if (sliceDigitBone === "21" )
{
digitBone = ptc [21]
}

else if (sliceDigitBone === "22" )
{
digitBone = ptc [22]
}


else if (sliceDigitBone === "23" )
{
digitBone = ptc [23]
}


else if (sliceDigitBone === "24" )
{
digitBone = ptc [24]
}


else if (sliceDigitBone === "25" )
{
digitBone = ptc [25]
}




else 
{
digitBone = "."
}
	
	
// sliceDigitBtwo

if (sliceDigitBtwo === "00")
{
digitBtwo = ptc[0]
}
else if (sliceDigitBtwo === "01")
{
digitBtwo = ptc[1]
}

else if (sliceDigitBtwo === "02")
{
digitBtwo = ptc[2];
}
else if(sliceDigitBtwo === "03")
{
digitBtwo = ptc[3];
}
else if (sliceDigitBtwo === "04")
{
digitBtwo = ptc[4]
}

else if (sliceDigitBtwo === "05")
{
digitBtwo = ptc[5]
}

else if (sliceDigitBtwo === "06")
{
digitBtwo = ptc[6]
}
else if (sliceDigitBtwo === "07")
{
digitBtwo = ptc[7]
}

else if (sliceDigitBtwo === "08")
{
digitBtwo = ptc[8]
}

else if (sliceDigitBtwo === "09" )
{
digitBtwo = ptc [9]
}



else if (sliceDigitBtwo === "10")
{
digitBtwo = ptc[10];
}
else if (sliceDigitBtwo === "11")
{
digitBtwo = ptc[11];
}
else if(sliceDigitBtwo === "12")
{
digitBtwo = ptc[12];
}
else if (sliceDigitBtwo === "13")
{
digitBtwo = ptc[13]
}

else if (sliceDigitBtwo === "14")
{
digitBtwo = ptc[14]
}

else if (sliceDigitBtwo === "15")
{
digitBtwo = ptc[15]
}
else if (sliceDigitBtwo === "16")
{
digitBtwo = ptc[16]
}

else if (sliceDigitBtwo === "17")
{
digitBtwo = ptc[17]
}

else if (sliceDigitBtwo === "18" )
{
digitBtwo = ptc [18]
}

else if (sliceDigitBtwo === "19" )
{
digitBtwo = ptc [19]
}

else if (sliceDigitBtwo === "20" )
{
digitBtwo = ptc [20]
}

else if (sliceDigitBtwo === "21" )
{
digitBtwo = ptc [21]
}

else if (sliceDigitBtwo === "22" )
{
digitBtwo = ptc [22]
}


else if (sliceDigitBtwo === "23" )
{
digitBtwo = ptc [23]
}


else if (sliceDigitBtwo === "24" )
{
digitBtwo = ptc [24]
}


else if (sliceDigitBtwo === "25" )
{
digitBtwo = ptc [25]
}



else 
{
digitBtwo = "."
}

// Here is sliceDigitBthree
if (sliceDigitBthree === "00")
{
digitBthree = ptc[0]
}
else if (sliceDigitBthree === "01")
{
digitBthree = ptc[1]
}
else if (sliceDigitBthree === "02")
{
digitBthree = ptc[2];
}
else if(sliceDigitBthree === "03")
{
digitBthree = ptc[3];
}
else if (sliceDigitBthree === "04")
{
digitBthree = ptc[4]
}

else if (sliceDigitBthree === "05")
{
digitBthree = ptc[5]
}

else if (sliceDigitBthree === "06")
{
digitBthree = ptc[6]
}
else if (sliceDigitBthree === "07")
{
digitBthree = ptc[7]
}

else if (sliceDigitBthree === "08")
{
digitBthree = ptc[8]
}

else if (sliceDigitBthree === "09" )
{
digitBthree = ptc [9]
}


else if (sliceDigitBthree === "10")
{
digitBthree = ptc[10];
}
else if (sliceDigitBthree === "11")
{
digitBthree = ptc[11];
}
else if(sliceDigitBthree === "12")
{
digitBthree = ptc[12];
}
else if (sliceDigitBthree === "13")
{
digitBthree = ptc[13]
}

else if (sliceDigitBthree === "14")
{
digitBthree = ptc[14]
}

else if (sliceDigitBthree === "15")
{
digitBthree = ptc[15]
}
else if (sliceDigitBthree === "16")
{
digitBthree = ptc[16]
}

else if (sliceDigitBthree === "17")
{
digitBthree = ptc[17]
}

else if (sliceDigitBthree === "18" )
{
digitBthree = ptc [18]
}

else if (sliceDigitBthree === "19" )
{
digitBthree = ptc [19]
}

else if (sliceDigitBthree === "20" )
{
digitBthree = ptc [20]
}

else if (sliceDigitBthree === "21" )
{
digitBthree = ptc [21]
}

else if (sliceDigitBthree === "22" )
{
digitBthree = ptc [22]
}


else if (sliceDigitBthree === "23" )
{
digitBthree = ptc [23]
}


else if (sliceDigitBthree === "24" )
{
digitBthree = ptc [24]
}


else if (sliceDigitBthree === "25" )
{
digitBthree = ptc [25]
}



else 
{
digitBthree = "."
}


// here is digitBfour

if (sliceDigitBfour === "00")
{
digitBfour = ptc[0]
}
else if (sliceDigitBfour === "01")
{
digitBfour = ptc[1]
}
else if (sliceDigitBfour === "02")
{
digitBfour = ptc[2];
}
else if(sliceDigitBfour === "03")
{
digitBfour = ptc[3];
}
else if (sliceDigitBfour === "04")
{
digitBfour = ptc[4]
}

else if (sliceDigitBfour === "05")
{
digitBfour = ptc[5]
}

else if (sliceDigitBfour === "06")
{
digitBfour = ptc[6]
}
else if (sliceDigitBfour === "07")
{
digitBfour = ptc[7]
}

else if (sliceDigitBfour === "08")
{
digitBfour = ptc[8]
}

else if (sliceDigitBfour === "09" )
{
digitBfour = ptc [9]
}


else if (sliceDigitBfour === "10")
{
digitBfour = ptc[10];
}
else if (sliceDigitBfour === "11")
{
digitBfour = ptc[11];
}
else if(sliceDigitBfour === "12")
{
digitBfour = ptc[12];
}
else if (sliceDigitBfour === "13")
{
digitBfour = ptc[13]
}

else if (sliceDigitBfour === "14")
{
digitBfour = ptc[14]
}

else if (sliceDigitBfour === "15")
{
digitBfour = ptc[15]
}
else if (sliceDigitBfour === "16")
{
digitBfour = ptc[16]
}

else if (sliceDigitBfour === "17")
{
digitBfour = ptc[17]
}

else if (sliceDigitBfour === "18" )
{
digitBfour = ptc [18]
}

else if (sliceDigitBfour === "19" )
{
digitBfour = ptc [19]
}

else if (sliceDigitBfour === "20" )
{
digitBfour = ptc [20]
}

else if (sliceDigitBfour === "21" )
{
digitBfour = ptc [21]
}

else if (sliceDigitBfour === "22" )
{
digitBfour = ptc [22]
}


else if (sliceDigitBfour === "23" )
{
digitBfour = ptc [23]
}


else if (sliceDigitBfour === "24" )
{
digitBfour = ptc [24]
}


else if (sliceDigitBfour === "25" )
{
digitBfour = ptc [25]
}



else 
{
digitBfour = "."
}


// Here is digitBfive

if (sliceDigitBfive === "00")
{
digitBfive = ptc[0]
}
else if (sliceDigitBfive === "01")
{
digitBfive = ptc[1]
}

else if (sliceDigitBfive === "02")
{
digitBfive = ptc[2];
}
else if(sliceDigitBfive === "03")
{
digitBfive = ptc[3];
}
else if (sliceDigitBfive === "04")
{
digitBfive = ptc[4]
}

else if (sliceDigitBfive === "05")
{
digitBfive = ptc[5]
}

else if (sliceDigitBfive === "06")
{
digitBfive = ptc[6]
}
else if (sliceDigitBfive === "07")
{
digitBfive = ptc[7]
}

else if (sliceDigitBfive === "08")
{
digitBfive = ptc[8]
}

else if (sliceDigitBfive === "09" )
{
digitBfive = ptc [9]
}

else if (sliceDigitBfive === "10")
{
digitBfive = ptc[10];
}
else if (sliceDigitBfive === "11")
{
digitBfive = ptc[11];
}
else if(sliceDigitBfive === "12")
{
digitBfive = ptc[12];
}
else if (sliceDigitBfive === "13")
{
digitBfive = ptc[13]
}

else if (sliceDigitBfive === "14")
{
digitBfive = ptc[14]
}

else if (sliceDigitBfive === "15")
{
digitBfive = ptc[15]
}
else if (sliceDigitBfive === "16")
{
digitBfive = ptc[16]
}

else if (sliceDigitBfive === "17")
{
digitBfive = ptc[17]
}

else if (sliceDigitBfive === "18" )
{
digitBfive = ptc [18]
}

else if (sliceDigitBfive === "19" )
{
digitBfive = ptc [19]
}

else if (sliceDigitBfive === "20" )
{
digitBfive = ptc [20]
}

else if (sliceDigitBfive === "21" )
{
digitBfive = ptc [21]
}

else if (sliceDigitBfive === "22" )
{
digitBfive = ptc [22]
}


else if (sliceDigitBfive === "23" )
{
digitBfive = ptc [23]
}


else if (sliceDigitBfive === "24" )
{
digitBfive = ptc [24]
}


else if (sliceDigitBfive === "25" )
{
digitBfive = ptc [25]
}


else 
{
digitBfive = "."
}

// Here is sixth double element.
if (sliceDigitBsix === "00")
{
digitBsix = ptc[0]
}
else if (sliceDigitBsix === "01")
{
digitBsix = ptc[1]
}
else if (sliceDigitBsix === "02")
{
digitBsix = ptc[2];
}
else if(sliceDigitBsix === "03")
{
digitBsix = ptc[3];
}
else if (sliceDigitBsix === "04")
{
digitBsix = ptc[4]
}

else if (sliceDigitBsix === "05")
{
digitBsix = ptc[5]
}

else if (sliceDigitBsix === "06")
{
digitBsix = ptc[6]
}
else if (sliceDigitBsix === "07")
{
digitBsix = ptc[7]
}

else if (sliceDigitBsix === "08")
{
digitBsix = ptc[8]
}

else if (sliceDigitBsix === "09" )
{
digitBsix = ptc [9]
}


else if (sliceDigitBsix === "10")
{
digitBsix = ptc[10];
}
else if (sliceDigitBsix === "11")
{
digitBsix = ptc[11];
}
else if(sliceDigitBsix === "12")
{
digitBsix = ptc[12];
}
else if (sliceDigitBsix === "13")
{
digitBsix = ptc[13]
}

else if (sliceDigitBsix === "14")
{
digitBsix = ptc[14]
}

else if (sliceDigitBsix === "15")
{
digitBsix = ptc[15]
}
else if (sliceDigitBsix === "16")
{
digitBsix = ptc[16]
}

else if (sliceDigitBsix === "17")
{
digitBsix = ptc[17]
}

else if (sliceDigitBsix === "18" )
{
digitBsix = ptc [18]
}

else if (sliceDigitBsix === "19" )
{
digitBsix = ptc [19]
}

else if (sliceDigitBsix === "20" )
{
digitBsix = ptc [20]
}

else if (sliceDigitBsix === "21" )
{
digitBsix = ptc [21]
}

else if (sliceDigitBsix === "22" )
{
digitBsix = ptc [22]
}


else if (sliceDigitBsix === "23" )
{
digitBsix = ptc [23]
}


else if (sliceDigitBsix === "24" )
{
digitBsix = ptc [24]
}


else if (sliceDigitBsix === "25" )
{
digitBsix = ptc [25]
}



else 
{
digitBsix = "."
}

// Here is the seventh

if (sliceDigitBseven === "00")
{
digitBseven = ptc[0]
}
else if (sliceDigitBseven === "01")
{
digitBseven = ptc[1]
}

else if (sliceDigitBseven === "02")
{
digitBseven = ptc[2];
}
else if(sliceDigitBseven === "03")
{
digitBseven = ptc[3];
}
else if (sliceDigitBseven === "04")
{
digitBseven = ptc[4]
}

else if (sliceDigitBseven === "05")
{
digitBseven = ptc[5]
}

else if (sliceDigitBseven === "06")
{
digitBseven = ptc[6]
}
else if (sliceDigitBseven === "07")
{
digitBseven = ptc[7]
}

else if (sliceDigitBseven === "08")
{
digitBseven = ptc[8]
}

else if (sliceDigitBseven === "09" )
{
digitBseven = ptc [9]
}

else if (sliceDigitBseven === "10")
{
digitBseven = ptc[10];
}
else if (sliceDigitBseven === "11")
{
digitBseven = ptc[11];
}
else if(sliceDigitBseven === "12")
{
digitBseven = ptc[12];
}
else if (sliceDigitBseven === "13")
{
digitBseven = ptc[13]
}

else if (sliceDigitBseven === "14")
{
digitBseven = ptc[14]
}

else if (sliceDigitBseven === "15")
{
digitBseven = ptc[15]
}
else if (sliceDigitBseven === "16")
{
digitBseven = ptc[16]
}

else if (sliceDigitBseven === "17")
{
digitBseven = ptc[17]
}

else if (sliceDigitBseven === "18" )
{
digitBseven = ptc [18]
}

else if (sliceDigitBseven === "19" )
{
digitBseven = ptc [19]
}

else if (sliceDigitBseven === "20" )
{
digitBseven = ptc [20]
}

else if (sliceDigitBseven === "21" )
{
digitBseven = ptc [21]
}

else if (sliceDigitBseven === "22" )
{
digitBseven = ptc [22]
}


else if (sliceDigitBseven === "23" )
{
digitBseven = ptc [23]
}


else if (sliceDigitBseven === "24" )
{
digitBseven = ptc [24]
}


else if (sliceDigitBseven === "25" )
{
digitBseven = ptc [25]
}


else 
{
digitBseven = "."
}



// Here is the eigth pair
if (sliceDigitBeight === "00")
{
digitBeight = ptc[0]
}
else if (sliceDigitBeight === "01")
{
digitBeight = ptc[1]
}

else if (sliceDigitBeight === "02")
{
digitBeight = ptc[2];
}
else if(sliceDigitBeight === "03")
{
digitBeight = ptc[3];
}
else if (sliceDigitBeight === "04")
{
digitBeight = ptc[4]
}

else if (sliceDigitBeight === "05")
{
digitBeight = ptc[5]
}

else if (sliceDigitBeight === "06")
{
digitBeight = ptc[6]
}
else if (sliceDigitBeight === "07")
{
digitBeight = ptc[7]
}

else if (sliceDigitBeight === "08")
{
digitBeight = ptc[8]
}

else if (sliceDigitBeight === "09" )
{
digitBeight = ptc [9]
}

else if (sliceDigitBeight === "10")
{
digitBeight = ptc[10];
}
else if (sliceDigitBeight === "11")
{
digitBeight = ptc[11];
}
else if(sliceDigitBeight === "12")
{
digitBeight = ptc[12];
}
else if (sliceDigitBeight === "13")
{
digitBeight = ptc[13]
}

else if (sliceDigitBeight === "14")
{
digitBeight = ptc[14]
}

else if (sliceDigitBeight === "15")
{
digitBeight = ptc[15]
}
else if (sliceDigitBeight === "16")
{
digitBeight = ptc[16]
}

else if (sliceDigitBeight === "17")
{
digitBeight = ptc[17]
}

else if (sliceDigitBeight === "18" )
{
digitBeight = ptc [18]
}

else if (sliceDigitBeight === "19" )
{
digitBeight = ptc [19]
}

else if (sliceDigitBeight === "20" )
{
digitBeight = ptc [20]
}

else if (sliceDigitBeight === "21" )
{
digitBeight = ptc [21]
}

else if (sliceDigitBeight === "22" )
{
digitBeight = ptc [22]
}


else if (sliceDigitBeight === "23" )
{
digitBeight = ptc [23]
}


else if (sliceDigitBeight === "24" )
{
digitBeight = ptc [24]
}


else if (sliceDigitBeight === "25" )
{
digitBeight = ptc [25]
}



else 
{
digitBeight = "."
}


// here is the ninth double

if (sliceDigitBnine === "00")
{
digitBnine = ptc[0]
}
else if (sliceDigitBnine === "01")
{
digitBnine = ptc[1]
}

else if (sliceDigitBnine === "02")
{
digitBnine = ptc[2];
}
else if(sliceDigitBnine === "03")
{
digitBnine = ptc[3];
}
else if (sliceDigitBnine === "04")
{
digitBnine = ptc[4]
}

else if (sliceDigitBnine === "05")
{
digitBnine = ptc[5]
}

else if (sliceDigitBnine === "06")
{
digitBnine = ptc[6]
}
else if (sliceDigitBnine === "07")
{
digitBnine = ptc[7]
}

else if (sliceDigitBnine === "08")
{
digitBnine = ptc[8]
}

else if (sliceDigitBnine === "09" )
{
digitBnine = ptc [9]
}



else if (sliceDigitBnine === "10")
{
digitBnine = ptc[10];
}
else if (sliceDigitBnine === "11")
{
digitBnine = ptc[11];
}
else if(sliceDigitBnine === "12")
{
digitBnine = ptc[12];
}
else if (sliceDigitBnine === "13")
{
digitBnine = ptc[13]
}

else if (sliceDigitBnine === "14")
{
digitBnine = ptc[14]
}

else if (sliceDigitBnine === "15")
{
digitBnine = ptc[15]
}
else if (sliceDigitBnine === "16")
{
digitBnine = ptc[16]
}

else if (sliceDigitBnine === "17")
{
digitBnine = ptc[17]
}

else if (sliceDigitBnine === "18" )
{
digitBnine = ptc [18]
}

else if (sliceDigitBnine === "19" )
{
digitBnine = ptc [19]
}

else if (sliceDigitBnine === "20" )
{
digitBnine = ptc [20]
}

else if (sliceDigitBnine === "21" )
{
digitBnine = ptc [21]
}

else if (sliceDigitBnine === "22" )
{
digitBnine = ptc [22]
}


else if (sliceDigitBnine === "23" )
{
digitBnine = ptc [23]
}


else if (sliceDigitBnine === "24" )
{
digitBnine = ptc [24]
}


else if (sliceDigitBnine === "25" )
{
digitBnine = ptc [25]
}

else 
{
digitBnine = "."
}




document.write("This is the number you entered.")
document.write("<br />")
document.write(n);
	document.write("<br />")

document.write("These are single digits only.")
document.write("<br />")


document.write(digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")

document.write("These are the double single digits.")
document.write("<br />")
	
	document.write(digitBone, digitBthree, digitFive, digitSix, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitBfour, digitSix, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitBfive, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitFive, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitFive, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitFive, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitFive, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")

// Second placement of Btwo
	document.write(digitOne, digitBtwo, digitBfour, digitSix, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitBfive, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitFive, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitFive, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitFive, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitFive, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
// Third placement of Bthree
	document.write(digitOne, digitTwo, digitBthree, digitBfive, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
// Fourth Placement of Bfour

	document.write(digitOne, digitTwo, digitThree, digitBfour, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitBfour, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitBfour, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitBfour, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
// Fifth placement of Bfive

	document.write(digitOne, digitTwo, digitThree, digitFour, digitBfive, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitFour, digitBfive, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitFour, digitBfive, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
// Sixth placement of Bsix
	document.write(digitOne, digitTwo, digitThree, digitFour, digitFive, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitFour, digitFive, digitBsix, digitEight, digitBnine);
	document.write("<br />")
	

// Seventh placement of Bseven
	document.write(digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix, digitBseven, digitBnine);
	document.write("<br />")
	
	
	
// Three B's staring with Bone, Bthree, Bfive

	document.write(digitBone, digitBthree, digitBfive, digitSeven, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitFive, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitFive, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitFive, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitFive, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")

// Three B's Bone, Bfour, Bsix
	document.write(digitBone, digitThree, digitBfour, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitBfour, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitBfour, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitBfour, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")


// Three B's Bone, Bfive, Bseven forward

	document.write(digitBone, digitThree, digitFour, digitBfive, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitBfive, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitBfive, digitSeven, digitEight, digitBnine);
	document.write("<br />")

// Three B's Bone, Bsix, Beight moving forward

	document.write(digitBone, digitThree, digitFour, digitFive, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitFour, digitFive, digitBsix, digitEight, digitBnine);
	document.write("<br />")
	
// Three B's Bone, Bseven, Bnine

	document.write(digitBone, digitThree, digitFour, digitFive, digitSix, digitBseven, digitBnine);
	document.write("<br />")
	
// Three B's Btwo, Bfour, Bsix moving forward
	document.write(digitOne, digitBtwo, digitBfour, digitBsix, digitEight, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitBfour, digitSix, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitBfour, digitSix, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitBfour, digitSix, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
// Three B's Btwo, Bfive, Bseven moving forward
	document.write(digitOne, digitBtwo, digitFour, digitBfive, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitBfive, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitBfive, digitSeven, digitEight, digitBnine);
	document.write("<br />")

// Three B's Btwo, Bsix, Beight moving forward

	document.write(digitOne, digitBtwo, digitFour, digitFive, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitBtwo, digitFour, digitFive, digitBsix, digitEight, digitBnine);
	document.write("<br />")
	
// Three B's Btwo, Bseven, Bnine

	document.write(digitOne, digitBtwo, digitFour, digitFive, digitSix, digitBseven, digitBnine);
	document.write("<br />")
	
// Three B's Bthree, Bfive, Bseven moving forward

	document.write(digitOne, digitTwo, digitBthree, digitBfive, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitBfive, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitBfive, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
// Three B's Bthree, Bsix, Beight moving forward
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitBsix, digitEight, digitBnine);
	document.write("<br />")
	
// Three B's Bthree, Bseven, Bnine
	document.write(digitOne, digitTwo, digitBthree, digitFive, digitSix, digitBseven, digitBnine);
	document.write("<br />")
	
// Three B's Bfour, Bsix, Beight moving forward

	document.write(digitOne, digitTwo, digitThree, digitBfour, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitBfour, digitBsix, digitEight, digitBnine);
	document.write("<br />")

//Three B's Bfour to Bfive and Bseven and Bnine

	document.write(digitOne, digitTwo, digitThree, digitBfour, digitSix, digitBseven, digitBnine);
	document.write("<br />")
	document.write(digitOne, digitTwo, digitThree, digitFour, digitBfive, digitBseven, digitBnine);
	document.write("<br />")
	
//Four B's Bone, Bthree, Bfive, Bseven moving forward

	document.write(digitBone, digitBthree, digitBfive, digitBseven, digitNine, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitBfive, digitSeven, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitBfive, digitSeven, digitEight, digitBnine);
	document.write("<br />")
	
//Four B's Bone, Bthree, Bsix, Beight and Bnine

	document.write(digitBone, digitBthree, digitFive, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitBthree, digitFive, digitBsix, digitEight, digitBnine);
	document.write("<br />")

	document.write(digitBone, digitBthree, digitFive, digitSix, digitBseven, digitBnine);
	document.write("<br />")


	document.write(digitBone, digitThree, digitBfour, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	document.write(digitBone, digitThree, digitBfour, digitBsix, digitEight, digitBnine);
	document.write("<br />")

	document.write(digitBone, digitThree, digitBfour, digitSix, digitBseven, digitBnine);
	document.write("<br />")

	document.write(digitBone, digitThree, digitFour, digitBfive, digitBseven, digitBnine);
	document.write("<br />")
	
	document.write(digitOne, digitBtwo, digitBfour, digitBsix, digitBeight, digitTen);
	document.write("<br />")
	
	document.write(digitOne, digitBtwo, digitBfour, digitBsix, digitEight, digitBnine);
	document.write("<br />")
	
	document.write(digitOne, digitBtwo, digitBfour, digitSix, digitBseven, digitBnine);
	document.write("<br />")

	document.write(digitOne, digitBtwo, digitFour, digitBfive, digitBseven, digitBnine);
	document.write("<br />")
	
	document.write(digitOne, digitTwo, digitBthree, digitBfive, digitBseven, digitBnine);
	document.write("<br />")
	
	document.write(digitBone, digitBthree, digitBfive, digitBseven, digitBnine);
	document.write("<br />")
	
	
// End Doubles



	
	
	






