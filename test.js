
var i=Math.floor(Math.random()*10)
var a;
v=true
while(v==true){
s=prompt("bienvenue , choisiez le difficulté : 1:difficule 2: moyen 3: facile")
if((s!=1)&&(s!=2)&&(s!=3))
     alert("tu choisie un entier differant de 1 ,2 ,3 ");
else {var x=0;
     var m=s;
     var i=Math.floor(Math.random()*10);
     while(x<s){
a=prompt("donner un entier  (il vous reste "+m+" tentatives )");
if(a==i) {
        alert("tu as reussi :)");
         x=s+1}
else if((a>i)&&(x<s-1)) alert(":( ,essayer avec un entier plus petit");
else if((a<i)&&(x<s-1)) alert(":( ,essayer avec un entier plus grand");
x++;
m--;
}
if(x==s) alert("tu as perdu :( ,l'entier est "+i);}
v=confirm("confirmer si vous voulez rejouer")
}