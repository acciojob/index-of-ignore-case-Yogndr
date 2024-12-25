function indexOfIgnoreCase(s1, s2) {
	let str1=s1.toLowerCase();
	let str2=s2.toLowerCase();

	let ans=str1.indexOf(str2)
	return ans;
  // write your code here
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
