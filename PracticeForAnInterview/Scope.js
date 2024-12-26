function a() {
  console.log(b);
}

var b = 10;
a();

function c() {
  d();
  function d() {
    console.log(e);
  }
}

var e = 20;
c();


function f() {
  var h = 30;
  g();
  function g() {
    console.log(h);
  }
}
f();

function i() {
  var j = 40;
  k();
  function k() {
    console.log(j);
  }
}

i();
// console.log(j);


function m() {
  var x = 100;
  t();
  function t() {


  }
}
m();
// console.log(x);



function z() {
  var o = 40;
  p();
  function p() {
    console.log(o);
  }
}

z();
// console.log(o);