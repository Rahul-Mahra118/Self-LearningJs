// we will check whether two string are anagrams or not 
// Two string are said to anagram if they both contain same letters with same frequency
//  abcd  bcda
let str1= "silent"   // ['s' ,'i']
let str2= "listen"
// here  we are spliting the string into array and then sorting it
let str1sorted= str1.split("").sort().join("")
let str2sorted= str2.split("").sort().join("")
console.log(str1sorted)
console.log(str2sorted)

if(str1sorted===str2sorted){
    console.log("Anagrams")
}
else{
    console.log("No anagrma")
}