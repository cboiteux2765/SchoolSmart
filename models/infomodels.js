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
        title = document.createElement("div");
        title.innerHTML = this.name;
        this.elem.id = this.name;
        this.elem.style = "block";
        this.elem.appendChild(title);
        for(s2 in contactsList){
            el = document.createElement('p')
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
        this.elem.style = "block";
        for(student in this.studentList){
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
    found(student1){
        //you could change it to binary search later;
        f = false;
        for(student in this.studentList){
            if(student.number==student1.number){
                f = true;
                break;
            }
        }
        return f;
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
        for(group in groupList){
            this.elem.appendChild(group.elem);
        }

        //default hidden
        this.elem.style = "none";
    }
    initTitle(){
        this.title.id=this.elem.id+"title";
        this.title.innerHTML = this.subject;
    }
    show(){
        this.elem.style = "block";
    }
    hide(){
        this.elem.style = "none";
    }
    addStudentIn(student,index){
        if(index==undefined){
            this.addStudent(student);
        }else{
            this.groupList[index].addStuent(student);
        }
    }
    addStudent(student){
        if(!this.found(student)){
            n = this.groupList.length;
            newgroup = new Group(n+1,[student],this.subject);
            this.groupList.push(newgroup);
            this.elem.appendChild(newgroup.elem);
            console.log("added student "+studnet.name)
        }else{
            console.log(student.name+" already in a group");
        }
    }
    found(student){
        f = false
        for(group in this.groupList){
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