var myNumber = 42;
var myName = Cameron;

myNumber = myName;
myName = myNumber;

for(var i = -52; i<=1066; i++) {
    console.log(i);
}

function beCheerful() {
    console.log("good morning!");
}

for (var a=0; a<=98;a++){
    beCheerful();
}

for(var b=-300; b<=0;b++){
    if(b%3 == 0) {
      if(b == -3 || b == -6){
        return null;
      }else
      console.log(b);
    }
  }

var c = 2000;

while(c<=5280){
    console.log(c);
    c++
}

sum = 0;

for(var d=512; d<=4096; d++){
  if(d%5 == 0){
    console.log(d);
    sum++
  }
}
console.log(sum);
  
var num = 0;

while(num<=60000){
  if(num%6==0){
    console.log(num);
  }
  num++
}

for(var e = 0; e<=100; e++){
    console.log(e); 
    if(e%5==0){
      console.log("coding")
    }
    if(e%10==0){
      console.log("dojo")
    }
  }

  var f = -300000
odd = 0;

while(f<=300000){
  if(f%2!=0){
    odd+=f;
  }
  f++
}
console.log(odd);

var even = 2016;

while(even>=1){
  if(even%2==0){
    console.log(even);
    even = even-4;
  }
}

// a few of the questions did not make sense to me and were given no examples there for i did not do them including You Say It’s Your Birthday, What Do You Know?, Flexible Countdown, The Final Countdown