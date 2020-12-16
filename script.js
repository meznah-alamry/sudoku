const validSudoku = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7],
];


$('#easy-level').click(function (e) { 
    e.preventDefault();
    window.location.href='./level1.html';
});

$('#med-level').click(function (e) { 
    e.preventDefault();
    window.location.href='./level2.html';
});

$('#hard-level').click(function (e) { 
    e.preventDefault();
    window.location.href='./level3.html';
});

$('#home').click(function (e) { 
    e.preventDefault();
    window.location.href='./index.html';
});

var counter=5;
$('#hint_btn').click(function () { 
    // e.preventDefault();
    counter--;
    if (counter <= 0){
        alert('You have not hint left');
        $('#hint_btn').prop('disabled', true);
    } else alert('You have ' + counter + ' hint left');
    var currGrid = filledGrid();
    //console.log(currGrid);
    var randomCell = Math.floor(Math.random()*9);
    console.log(randomCell);
    var emptyRow = [];
    var emptyCol = [];
    for(key in currGrid){
        for(index in currGrid[key]){
            if(currGrid[key][index] === ""){
                emptyRow += key;
                emptyCol += index;
            }
        }
    }
    var randomRow = emptyRow[randomCell];
    var randomCol = emptyCol[randomCell];
    var validNumber = validSudoku[randomRow][randomCol];
    console.log(randomRow + ' ' + randomCol);

    var temp = document.querySelectorAll('input');
    var x=0;
    var y=0;
    for(let i=0; i<81; i++){ 
        for(let j=0; j<9; j++){
            temp[i].id = `${x}-${y}`;
            if (y==9) {y=0;
            x++;}
        } y++; 
    }

    var targetInput = document.getElementById(randomRow+'-'+randomCol);
    targetInput.style.color='#c12020';
    targetInput.value = validNumber;
});

$("form").submit((event)=>{
    event.preventDefault();
    var sudokuGrid = filledGrid();
    //console.log(sudokuGrid);
    if(isSolved(sudokuGrid)){
        alert("Congratulation you solved it");
    }
    else{
        alert("Try again");
    }
});

filledGrid = ()=>{     
    var user_input =[];
    for(let i=0; i<81; i++){
        user_input[i]=document.querySelectorAll('input')[i].value;
    }
    // console.log(user_input);

    //store user input in 2D array
    var newUserInput=[[], [], [], [], [], [], [], [], []];
    let x = 0;
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            newUserInput[i][j]=user_input[x]; 
            x++;
        }
    }
    //console.log(newUserInput);
    return newUserInput;
}

isSolved = (sudokuGrid) => {
    checkRows(sudokuGrid);
    if(checkRows(sudokuGrid)){
       var rnr = rowNotRepeat(sudokuGrid);
        //console.log(rnr);
    }
    
   var cnr = columnNotRepeat(sudokuGrid);
    //console.log(cnr);

   var snr = squareNotRepeat(sudokuGrid);
    //console.log(snr);

    if(rnr && cnr && snr){
        return true;
    } else return false;

}

checkRows = (sudokuGrid) =>{
    var rangeNumber = ['1','2','3','4','5','6','7','8','9'];
    for(row in sudokuGrid){
        for(index in sudokuGrid[row]){
            if(jQuery.inArray(sudokuGrid[row][index], rangeNumber)<=-1){
                return false;
            }
        }
    } return true;
}

rowNotRepeat = (sudokuGrid) => {
    var count = 1;
    while(count<=9){
        for(row in sudokuGrid){
            count = 1;
            for(index in sudokuGrid[row]){
                if(sudokuGrid[row][index] == sudokuGrid[row][count]){
                    return false;
                } else count++;
            }
        }
    } return true;
}

columnNotRepeat = (sudokuGrid) => {

    //doesn't return 'true' just gives an error "Cannot read property '0' of undefined at ColumnNotRepeat"
    // var count = 1;
    // while(count<=9){
    //     for(let j=0; j<9; j++){
    //         count =1;
    //         for(let i=0; i<9; i++){
    //             if(sudokuGrid[i][j] === sudokuGrid[count][j]){
    //                 return false;
    //             } else count++;
    //         }
    //     } 
    // }return true;


    //store one column in a row then can check every column as a rwo
    var oneCulmn = [[], [], [], [], [], [], [], [], []];
    for(let count=0; count<9; count++){
        for(let i=0; i<9; i++){
            oneCulmn[count][i] = sudokuGrid[i][count]
        }
    }
    //console.log(oneCulmn);

    for(row in oneCulmn){
        var count = 1;
        for(index in oneCulmn[row]){
            if(oneCulmn[row][index] == oneCulmn[row][count]){
                return false;
            } else count++;
        }
    } return true;
}

squareNotRepeat = (sudokuGrid) => {
    for(let threeRows=0; threeRows<9; threeRows+=3){
        for(let threeCols=0; threeCols<9; threeCols+=3){
            var rangeNumber = ['1','2','3','4','5','6','7','8','9'];
            for(let i=threeRows; i<threeRows+3; i++){
                for(let j=threeCols; j<threeCols+3; j++){
                    if(jQuery.inArray(sudokuGrid[i][j], rangeNumber)<=-1){
                        return false;
                    }
                }
            }
        }
    } return true;
}


window.onload = ()=> {
    let hr = $('#hours');
    let min = $('#minutes');
    let sec = $('#seconds');
    let counter = 0;
    $('#start').on('click', start);
    $('#pause').on('click', function () {
        clearInterval(counter);
        $('#start').on('click', start);
    });
    function start() {
        counter = setInterval(step, 1000);
        $('#start').off('click');
    }

    function step() {
        sec.val(+sec.val() + 1);
        if (sec.val() > 59) {
            sec.val('00');
            min.val(+min.val() + 1);
            min.text(formatTime(min.val()));
        }
        if (min.val() > 59) {
            min.val('00');
            hr.val(+hr.val() + 1);
            min.text(formatTime(min.val()));
            hr.text(formatTime(hr.val()));
        }
        sec.text(formatTime(sec.val()));
    }
 
    function formatTime(value) {
        let partial = `${('0' + value % 60).slice(-2)}`;
        return partial;
    }
}
