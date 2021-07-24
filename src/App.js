import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import './style.css';

function App() {
  const [diff, setdiff] = useState(0)
  const [win, setwin] = useState("No_One")

  const [myArray, setMyArray] = useState([])
  const [myArray2, setMyArray2] = useState([])
  const [teama, setteama] = useState("Team A")
  const [teamb, setteamb] = useState("Team B")

  var a_score =0
  var b_score =0

  const add = () =>{
    if (document.getElementById("inputA").value === "" || document.getElementById("inputB").value === ""){
      alert("What is this Sagar ? Are you dumb ? Add Values for both Team A and Team B. You CheAteR !!")
      return
    }
    var a = myArray
    a.push(parseInt(document.getElementById("inputA").value))
    setMyArray(a)

    var a = myArray2
    a.push(parseInt(document.getElementById("inputB").value))
    setMyArray2(a)

    for(var i=0 ; i<myArray.length;i++){
      a_score += myArray[i]
    }
    
    for(var i=0 ; i<myArray2.length;i++){
      b_score += myArray2[i]
    }

    if (a_score > b_score) {
      setdiff(a_score - b_score)
      setwin(teama)
    } else {
      setdiff(b_score - a_score)
      setwin(teamb)
    }

    document.getElementById("inputB").value=""
    document.getElementById("inputA").value=""

  }

  const clickA =()=>{
    var a = prompt("What would you like to rename Team A , Sagar ?")
    if (a != ""){ setteama(a)}
   
  }
  const clickB =()=>{
    var a = prompt("What would you like to rename Team B , Sagar ?")
    if (a != ""){ setteamb(a)}
  }


  return (
    <div className="App">
      <form>
      <Row className="heading">
        <Col align="center"><h1 className="heading" onClick={clickA}>{teama}</h1></Col>
        <Col align="center"><h1 className="heading" onClick={clickB}>{teamb}</h1></Col>
      </Row><div className="restapp">
      <Row><br></br></Row>
      <Row>
        <Col><div class="ui input"><input type="number" placeholder={teama + " Round Score"} id="inputA"/></div></Col>
        <Col><div class="ui input"><input type="number" placeholder={teamb + " Round Score"} id="inputB"/></div></Col>
      </Row>
      <Row><br></br></Row>
      <Row>
      <Button variant="secondary" size="lg" onClick={add}>Add Round Result</Button>
      </Row>
      <Row>
        <Col align="center">
                      <ol>
              {myArray.map((item,index) => 
                  <li key={index}>{item}</li>
              )}
              </ol>
        </Col>
        <Col align="center">
                        <ol>
                {myArray2.map((item,index) => 
                    <li key={index}>{item}</li>
                )}
                </ol>
        </Col>
      </Row>
      <Row>
      <Alert variant="secondary" className="bigfont"><b>{win}</b> is winning by <b>{diff}</b></Alert>
      </Row>
    </div></form></div>
  );
}

export default App;
