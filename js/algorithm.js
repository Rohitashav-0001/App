window.onload = function(){
    var btn = document.getElementById("btn")
    //click event
    btn.addEventListener("click", function(){
        //input command for user
        var input = prompt("To enter numbers in array,type yes or y \n To generate random number enter no or n");
        input = input.toLowerCase(); //to convert entered input to lowercase
         var arr = []; //empty array declaration

         //if user enters yes or y
         if(input === "yes" || input === "y"){
             do{
                 var userInput = prompt("Add numbers to array \n Type exit to stop");
                 if(userInput === "exit"){
                     break;               //exit will break the loop
                 }
                 userInput = parseInt(userInput);
                 if(!isNaN(userInput)){
                     arr.push(userInput); //push user entered  numbers to the array
                 }
             }while(true);
        //if user enters no or n
         }else if(input === "no" || input === "n"){
             do{
                 var maxValue = parseInt(prompt("Enter the maximum value upto which you want to generate  the number.\n For example\n If you enter 5,browser will generate random numbers between 1 - 5"));
                 }while(isNaN(maxValue))
             do{
                 var numToGenerate = parseInt(prompt("How many random numbers you want to generate \n The value must be a number"));
             }while(isNaN (numToGenerate))

             for( var i = 0;i<numToGenerate;i++){
                 var ranNumber = Math.ceil(Math.random()*maxValue); //generating random numbers to the maximum value that user entered
                 arr.push(ranNumber);                               //push random numbers to the array
             }
         }

         //sorting algorithm

         function bubbleSort(arr){
             var len = arr.length;
             for(var i = len-1;i>=0;i--){
                 for(var j=0;j<=i;j++){
                     if(arr[j-1]>arr[j]){
                         var temp = arr[j-1];
                         arr[j-1]=arr[j];
                         arr[j] = temp;
                     }
                 }
             }
             return arr;
         }
         console.log(bubbleSort(arr));

    });
}
