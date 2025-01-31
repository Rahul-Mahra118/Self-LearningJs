// for a given array -> find the sum of any two elements whose sum is equal to target otherwise return -1;
let arr=[2,3,4,5,3,6];
let target= 9
// to solve this->
/*
1-> Iterate through the array and store the elements with their index value. 
2-> sort the array 
3-> iterate over arrays using two pointer and check whether the sum of i+j==target
4-> check if i+j<sum i++ else j--;
*/