module.exports = function multiply(first, second) {
  // your solution
 
    var a = first.split('').reverse();
    var b = second.split('').reverse();
  
    var c = [];
  
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < b.length; j++) {
        var multipl = a[i] * b[j];
        c[i + j] = (c[i + j]) ? c[i + j] + multipl : multipl;
      }
    }
  
    for (var i = 0; i < c.length; i++) {
      var num = c[i] % 10;
      var step = Math.floor(c[i] / 10);
      c[i] = num;
  
      if (c[i + 1])
        c[i + 1] += step;
      else if (step!= 0)
        c[i + 1] =step;
    }
  
  
    return c.reverse().join('');
  


}


