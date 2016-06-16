var pangram  = 'hello world people';

function allThings (string) {
  var a = string.replace(' ', '');
  var b = a.split('');
  if(b.length < 26) {
  	return false;
  } else {
  	return true;
  }

}

allThings(pangram);
