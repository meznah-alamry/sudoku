$("form").submit((event)=>{
    event.preventDefault();
    var sudoku_grid = filledGrid();
    console.log(sudoku_grid);
    // if(isSolved(sudoku_grid)){
    //     alert("Congratulation you solved it");
    // }
    // else{
    //     alert("Try again");
    // }
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
    return user_input;
}

// isSolved = () => {
//     // check_rows()
//     // check_columns()
//     // check_square()
// }