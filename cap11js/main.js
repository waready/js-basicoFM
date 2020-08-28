//global
var varaibleGlobal = "Esta es global";

var miFuncion = function(){
    //variableLocal = "se volvio Global";
    var variableLocal = "esta es local";
    alert (varaibleGlobal);

    varaibleGlobal = "esta es global modificada";
    alert(varaibleGlobal);
    var funcionLocal = function(){
        var variableLocal ="esta variable local, dento de funcionlocal";
        alert(variableLocal);
    }
}
miFuncion();

//local 