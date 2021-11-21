import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body {
    color: white;
    font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width: 700px)  {
.form {
margin-top:75px;
}
h3{position:relative;display:flex;text-align:center}
h4,h2 {display:none;}

.button-position1 {
position:absolute;
right:6%;
top:2%;
}


.button-position2 {
position:absolute;
right:6%;
top:6%;
}
}


li {
    list-style: none;
}
h3{
    color: rgba(204, 94, 260, 0.85);
    position: absolute;
    left:20px;
    font-size: 32px;
}

h3::before{
    content: '   {     ';
    font-size: 30px;
    margin:0px;
    color:darkred  ;
}

h3::after {
    content: '      } ';
    font-size: 30px;
    margin:0px;
    color:darkred;
}



.container{

    display: flex;
    justify-content: center;
    text-align: center;
    
}

input {
    background-color:lightgrey;
    border:black 1px solid;
    font-size: 14px;
    margin:4px;
    padding:5px;
    color: rgb(0, 0, 0);
    width: 275px;
    border-radius:5px;
    margin-bottom:10px;
}

form {
    background-color:rgba(102, 26, 130);
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid black;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    animation-name:tored;
    animation-duration: 1.5s;
  animation-iteration-count:1;
  animation-fill-mode: forwards;
  animation-play-state: paused;

}

@keyframes tored {
    0% { background-color: rgba(102, 26, 130, 0.50);}
    30% { background-color: rgba(102, 26, 130,0.8);}
    100% { background-color: darkviolet;filter:grayscale(0.2);}
}
/* rgba(60, 14, 84) */
@keyframes var{
    0% { filter: hue-rotate(0deg)}
    50% { filter: hue-rotate(-15deg) sepia(0)}
    100% { filter: hue-rotate(0deg)}
}

.effect {
    animation-name:effect;  
    animation-direction: initial;
    animation-iteration-count:1;
    animation-duration: 0.75s;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes effect{  0% {transform: rotate(360deg) scale(0.5,0.5)} }

button{
    background-color: magenta;
    filter: hue-rotate(0deg);
    width: 80px;
    height: 35px;
    border: transparent;
    border-radius: 5px;
    text-align: center;
    margin: 10px auto;
    color:white; 
    animation-name:var;
  animation-duration: 1s;
  animation-iteration-count:infinite;
  animation-fill-mode: forwards;
  animation-play-state: paused;   
  animation-timing-function: linear;
}

form:hover {
    animation-play-state: running; 
}

button:hover{
    animation-play-state: running;  
    cursor:pointer;
}

h4{
    margin:0;
    padding:10px;
    color:white;
}

.cyborg{
/*     background-image: url("./a.png");
    background-size: cover;
    width: 200px;
    height: 200px; */

}

.passwordContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.password{
    width: 127px;
}

.errors{
    position: relative;
    font-size: 11px;
    max-width: 289px;
    align-items: center;
}

.checkbox{
    display:flex;
    max-width: 289px;
}

.check{
    margin-bottom: 0px auto;
    width: 39px;
}

.terms{
width: 200px;
margin-top:5px;
font-size: 11px;
}


.button-position1 {
position:absolute;
right:3.5%;
top:3.5%;
}


.button-position2 {
position:absolute;
right:11.5%;
top:3.5%;
}

.inputLogin {
display:flex;
flex-direction: column;
width: 316px;
margin-top:100px;
padding: 14px;
border-radius:15px;
background-color: gray;
border: 1px solid black;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    animation-name:tored;
    animation-duration: 1.5s;
    animation-delay: 0s;
  animation-iteration-count:1;
  animation-fill-mode: forwards;
  animation-play-state: running;

}

.inputSenha{
    margin-bottom: 10px;
}


h2 {
    display:flex;
    margin:180px;
    line-height: 1.5;
    justify-content: left;
}

h2:after {
    content:"</>";
    font-size:120px;
    color:darkviolet;
}


.form2{
    margin-top:20px;
    margin-bottom:0px;
    border:0px;
    border-radius: 15px;
    padding:8px;
    box-shadow:0px 0px 0px 0px;
    animation-name:tored;
    animation-duration: 1.5s;
  animation-iteration-count:1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.info {
    padding-top: 125px;
}
h6{
    font-size:19px;
    margin: 0;
    padding: 5px;
    justify-content: center;
    text-align: center;
    
}
`


export default GlobalStyles;
