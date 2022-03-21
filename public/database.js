//can change
const apSubjects = ["Calculus BC","French","Literature","World History","Chemistry","Studio Art"];
var theSubjectGroupingList = [];
//stores list of StudyGroup objects, in the same order as the ap subjects
var viewDisplay = document.getElementById("groupShowScreen");
//currently selected subject
var theSubjectIndex = undefined;
//you should be set to the student who is the user
var you = undefined;
//what it says on the created group confirmation page
var createdHead = document.getElementById("createdPageHead");

for(var s in apSubjects){
    var g = new StudyGroups([],s)
    theSubjectGroupingList.push(g);
    viewDisplay.appendChild(g.elem);
}

function enterSubject(subject){
    var index = undefined;
    for(var i=0; i<apSubjects.length; i++){
        if(subject==apSubjects[i]){
            index = i;
            break;
        }
    }
    theSubjectGroupingList[theSubjectIndex].hide();
    theSubjectIndex = index;
    if(theSubjectIndex!=undefined){
        theSubjectGroupingList[theSubjectIndex].show();
    }
}
//current index showing on the dropdown menu
theGroupIndex = undefined;
function clickJoinButton(){
    inputField = document.getElementById("joiningGroupField");
    var index;
    for(var i=0; i<apSubjects.length; i++){
        if(apSubjects[i]==inputField){
            index = i;
            break;
        }
    }
    selectGroupIndexToJoin(index);
}
function selectGroupIndexToJoin(index){
    var theStudyGroups = theSubjectGroupingList[theSubjectIndex];
    theStudyGroups.removeStudentFrom(you,theGroupIndex);
    theGroupIndex = index;
    theStudyGroups.addStudentIn(you,theGroupIndex);
}
function createGroup(){
    var theStudyGroups = theSubjectGroupingList[theSubjectIndex];
    var f = theStudyGroups.addStudent(you);
    if(f){
        createdHead.innerHTML = "Cool! You are now in group "+theStudyGroups.groupList.length;
    }else{
        createdHead.innerHTML = "You are already in a group";
    }
}
