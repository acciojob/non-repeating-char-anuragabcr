function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length; i++) {
		sub = str.slice(0, i) + str.slice(i+1, str.length)
		if(!sub.includes(str[i])) {
			return str[i]
		}
	}
	return null

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
