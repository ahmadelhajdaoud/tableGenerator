function Course(id,title,duration,isForBeginners,cost){

    this.id =id;

    this.title =title;

    this.duration =duration;

    this.isForBeginners =isForBeginners;

    this.cost = cost;

    /*this.showTitle = function(){
        console.log('il titolo di questo corso è ${this.title}');
    };*/
}

Course.prototype.showTitle = function(){
    console.log(`il titolo di questo corso è ${this.title}`);
};

let c1 = new Course(1, "Java for dummies", 200,true,20);
let c2 = new Course(1, "SQL for dummies", 100,true,30);

c1.showTitle(); //se creriamo 1000 corso si crea la funzione showTitle() anche 100 volte

let p1 = c1.__proto__; //dunder double underscore (tipo una variabile privata)
console.log(p1);

let pp1 = c1.constructor.prototype; // il parente è ancora vivo ma puoi avere tutto quello che ha nello stesso tempo, constructor è la funzione Course()
console.log(p1 == pp1);

//x.constuctor.prototype = x.__proto__

//constructor.prototype; il costruttore crea un oggetto e gli passa il prototype usando .prototype

/* let o1 = {
    name: "Ciccio"
};

o1.name = " Pippo";
o1.job = "Developer";

let o2 = {
    ...o1, //creare un altro oggetto o2 con i valore di o1
    age: 27
}; */

function AcademicCourse(id,title,duration,isForBeginners,cost,points){
    //richiamo il constructor padre (super)
    Course.call(this,id,title,duration,isForBeginners,cost);

    this.id =id;

    this.title =title;

    this.duration =duration;

    this.isForBeginners =isForBeginners;

    this.cost = cost;

    this.points = points;
};
let academicCoursePrototype = new Course();


//settiamo il nuovo prototype e il nuovo constructor
AcademicCourse.prototype = academicCoursePrototype;
AcademicCourse.prototype.constructor = AcademicCourse;


AcademicCourse.prototype.addPoints =function(points){
    this.points = points;
    console.log(`Mi sono quasi laureato ${this.points}`);
};

let ac1 = new AcademicCourse(3,"titolo",300,false,3000,15);
console.log(ac1.constructor);

ac1.addPoints(20);
ac1.showTitle();