function fibonnaci (n){

	if (n==0){
		return 0;
	}
	else if (n==1){
		return 1;
	}
	else{
		return fibonnaci(n-1)+fibonnaci(n-2);
	}

};

function gcd (a, b) {
	if (b>a){
		return gcd(b,a);
	}
	if (a%b == 0){
		return b;
	}

	return gcd (b,a%b);

};

function getRandInt(numb) {
  return Math.floor(Math.random() * numb);
};

function randomStudent(l){
	return l[getRandInt(0,l.length)];
};