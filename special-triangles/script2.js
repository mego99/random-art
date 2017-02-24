var fl = fourQuest.length;
console.log(fl);
for (var c=0;c<fl;c++) {
	if (answers[notAnAnswerNew[n]] !== answers[fourQuest[c]]) {
		console.log(answers[notAnAnswerNew[n]]+ " is not the same as "+answers[fourQuest[c]]);
		TorF[n] = true;
	}
	else {
		console.log("oops! "+answers[notAnAnswerNew[n]]+" was the same as "+answers[fourQuest[c+1]]);
		TorF[n] = false; //if function returns false, it has a duplicate//
	}
}
var v=0;
for (var t=0;t<TorF.length+v;t++) {
	if (TorF[t] == true) {
		fourQuest.push(notAnAnswerNew[TorF[t]]);
	}
	else {
		v++;
	}
}
	
n++;
console.log("fourQuest: "+ fourQuest)