var paragarph=`Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's conflict with Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).

The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references. According to Rowling, the main theme is death. Other major themes in the series include prejudice, corruption, and madness.`
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')

paragarph=paragarph.split(" ");

var newarray=[]
var number='8';
var count=1;
for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){   
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}
		}
		
		newarray.push([paragarph[i],count]);
		count=1;
	}
}

for(let k=0;k<newarray.length;k++){
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
		}
	}
}
var textarray=newarray.slice(0,9);
var text=""

for(let z=0;z<textarray.length;z++){
	console.log(textarray[z]);
	text=text+"<h1>"+textarray[z][0]+"  :  "  +textarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;