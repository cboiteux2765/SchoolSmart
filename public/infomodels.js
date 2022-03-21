class Student{
    constructor(name, classList , contactsList, username, password, number){
        this.name = name;
        this.classList = classList;
        this.contactsList = contactsList;
        this.username = username;
        this.password = password;
        this.number = number
        //number makes students unique; a number is assigned every time a student
        //logs into the system.
        //should be [["",""],["",""],["",""]]
        //elem for displaying
        this.elem = document.createElement('div');
        this.initiateDiv();
    }
    initiateDiv(){
        var title = document.createElement("div");
        title.innerHTML = this.name;
        this.elem.id = this.name;
        this.elem.appendChild(title);
        for(var s2 in contactsList){
            var el = document.createElement('p')
            el.innerHTML = s2[0]+" : "+s2[1]
            this.elem.appendChild(el);
        }
    }
}
class Group{
    constructor(name, studentList, subject){
        //name could be number
        if(typeof(name)=="number"){
            this.name = "Group "+name;
        }else{
            this.name = name;
        }
        this.studentList = studentList;
        //make sure studentlist is in order of student numebr in case you need to
        //binary search if this gets really big
        this.elem = document.createElement("div");
        this.elem.id = subject+this.name;
        this.posting = document.createElement("p");
        this.initPosting();
        for(var student in this.studentList){
            this.elem.appendChild(student.elem);
        }
        
    }
    initPosting(){
        this.posting.id = this.elem.id+"posting";
        this.posting.innerHTML = this.name;
        this.elem.appendChild(this.posting);
    }
    addStudent(student){
        if(!this.found(student)){
            this.studentList.push(student);
            this.elem.appendChild(student.elem);
            console.log("student "+student.name+" added to group "+this.name);
        }else{
            console.log("student "+student.name+" already in group "+this.name);
        }
    }
    removeStudent(student){
        var ind = this.giveIndexOf(student)
        if(ind != undefined){
            this.studentList.splice(ind,1);
        }else{
            console.log("you tried to remove "+student.name+" from group "+this.name+" that they were not in");
        }
    }
    giveIndexOf(student1){
        //you could change it to binary search later;
        //students unique by number
        for(i=0; i<this.studentList.length; i++){
            var student = this.studentList[i];
            if(student.number==student1.number){
                return i;
                break;
            }
        }
        return undefined;
    }
    found(student1){
        return this.giveIndexOf(student1) != undefined;
    }
    productivity(student){
        //gives ranking for how well a given student would work in this group
        //not done
        return 0;
    }
}
class StudyGroups {
    constructor(groupList, subject){
        this.subject = subject;
        this.elem = document.createElement("div");
        this.elem.id = subject;
        this.title = document.createElement("p");
        this.initTitle();
        this.elem.appendChild(this.title);
        for(var group in groupList){
            this.elem.appendChild(group.elem);
        }
    }
    initTitle(){
        this.title.id=this.elem.id+"title";
        this.title.innerHTML = this.subject;
    }
    addStudentIn(student,index){
        if(index!=undefined){
            this.groupList[index].addStuent(student);
        }
    }
    removeStudentFrom(student,index){
        if(!index==undefined){
            this.groupList[index].removeStudent(student);
        }
    }
    addStudent(student){
        if(!this.found(student)){
            var n = this.groupList.length;
            var newgroup = new Group(n+1,[student],this.subject);
            this.groupList.push(newgroup);
            this.elem.appendChild(newgroup.elem);
            console.log("added student "+studnet.name);
            return true;
        }else{
            console.log(student.name+" already in a group");
            return false;
        }
    }
    found(student){
        var f = false
        for(var group in this.groupList){
            if(group.found(student)){
                f = true;
                break;
            }
        }
        return f;
    }
    giveRecomendationIndicies(student){
        //maximzie productivity; method not done
        return undefined;
    }
}