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

// var pre_filled_grid = [
//     [0, 2, 0, 0, 0, 4, 3, 0, 0],
//     [9, 6, 0, 0, 2, 0, 0, 0, 8],
//     [0, 0, 0, 6, 0, 9, 0, 5, 0],
//     [5, 0, 3, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 5, 0, 3, 6, 8, 0],
//     [0, 0, 8, 0, 7, 0, 0, 0, 0],
//     [0, 8, 0, 2, 0, 5, 0, 0, 0],
//     [1, 6, 0, 0, 9, 0, 8, 0, 3],
//     [0, 0, 9, 8, 0, 0, 0, 6, 0]
// ];


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
        rowNotRepeat(sudokuGrid);
        //console.log(rowNotRepeat(sudokuGrid));
    }
    
    ColumnNotRepeat(sudokuGrid);
    console.log(ColumnNotRepeat(sudokuGrid));
    // checkSquare()
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

ColumnNotRepeat = (sudokuGrid) => {

    //doesn't return 'true' just gives an error Cannot read property '0' of undefined at ColumnNotRepeat
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