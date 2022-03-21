<<<<<<< Updated upstream
function joinButtonClick
=======
//can change
const apSubjects = ["Calculus BC","French","Literature","World History","Chemistry","Studio Art"];
theStudentList = [];
//stores list of Student objects , IN ORDER OF WHEN THE STUDENTS LOGGED IN!
theSubjectGroupingList = [];
//stores list of StudyGroup objects, in the same order as the ap subjects
homeDisplay = document.getElementById("groupShowScreen");
homeDisplay.style = "block";
joinDisplay = document.getElementById("joinShowScreen");
joinDisplay.style = "block";
createdDisplay = document.getElementById("createdShowScreen");
createdDisplay.style = "block";

var theSubjectIndex = undefined;

for(s in apSubjects){
    g = new StudyGroups([],s)
    theSubjectGroupingList.push(g);
    homeDisplay.appendChild(g.elem);
}

function enterSubject(subject){
    index = undefined;
    for(i=0; i<apSubjects.length; i++){
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
function homeButtonClick(){
    homeDisplay.style = "block";
    joinDisplay.style = "none";
    createdDisplay.style = "none";
}
function joinButtonClick(){
    if(theSubjectIndex!=undefined){
        homeDisplay.style = "none";
        joinDisplay.style = "block";
        createdDisplay.style = "none";
    }
}
function createButtonClick(){
    if(theSubjectIndex!=undefined){
        homeDisplay.style = "none";
        joinDisplay.style = "none";
        createdDisplay.style = "block";
    }
}
>>>>>>> Stashed changes
