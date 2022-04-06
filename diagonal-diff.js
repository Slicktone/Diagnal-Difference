function diagonalDifference(arr) {
    // thought process is to create 2 arrays with the left diagonal numbers and right diagonal numbers
    // add the left diagonal
    // add the right diagonal
    // take the two sums and subtract them (absolute value)
    // place this value as a single integer

    /* given input from challenge: 
        11 2 4
        4 5 6
        10 8 -12

        The left diagonal is 11, 5, -12
        The right diagonal is 4, 5, 10

        The sum of the left is 4, and the sum of the right is 15
        The absolute value of both is |4 - 19| = 15
        Math stuff: |x| is the absolute value of x
    */

    // declare both diagonals
     let leftSum = 0
     let rightSum = 0
     
     // conditional loop through the diagonals
     for (var i = 0; i < arr.length; i++) {
         var j = i
         var j2 = arr.length - (i + 1)

     }
}