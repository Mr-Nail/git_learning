//计算某个字符，并执行其中的js代码
var test = '{ colkey: "col", colsinfo: "NameList" }';
var obj2 = eval("(" + test + ")");
console.log('%o', obj2);

let arrkey = [];
function test1() {
    console.log('testttt', test.length);
        for (let propName in test) {
                //document.write(propName);       
                 console.log('propName-', propName);
        }
    for (let propName in obj2) {
            //document.write(propName);        
            console.log('propName = ', propName);
            //propName =  colkey
            //propName =  colsinfo   
            arrkey.push(propName);
    }
    //验证松散类型数据    
    let msg;    
    if (msg === undefined) {
            console.log('msg = ', msg);
            //msg =  undefined
   }    
   else {
           console.log('this is a test');    
    }  
   console.log('arrkey = ',arrkey);
   //arrkey =  [ 'colkey', 'colsinfo' ]
   }
   test1();
