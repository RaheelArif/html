function Student(rollNumber , Name , City , marks){
     this.rollNumber = rollNumber;
     this.name = Name;
     this.city = City;
     this.marks = marks;
     this.sum = function abc(a , b){
          alert(a + b)
     }
}

var student1 = new Student(1 , "ali" , "jrw", 99 ,  );
var student2 = new Student(2 , "ali2" , "jrw2", 00 );
student1.sum(2 , 4);
student2.sum(4 , 5)




// var  bill = {
//     sugar : 100,
//     oil: 150,
//     lays: 50,
//     perfume: 499,
//     sum : function total(){
//         var total = bill.sugar + bill.oil + bill.lays + bill.perfume;
//          alert(total);
//     }
// }



