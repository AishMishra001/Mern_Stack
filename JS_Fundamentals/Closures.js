function a(){
  var b = 10 ; 
  function c(){
    var d = 100 ; 
    function e(){
      console.log(d,b) ; 
    }
    e() ; 
  }
  c() ; 
}
a() ; 