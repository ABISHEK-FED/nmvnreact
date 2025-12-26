import React from 'react'
import { useEffect,useState } from 'react'
const App = () => {
  const[name,setName]=useState("Ungal Abishek 🧜‍♂️")
  useEffect(()=>{
   document.title=`hello ! ${name}`
})
   const dis=()=>{
    setName("hey Guru jiii")
   }
    const dis1=()=>{
      setTimeout(() => {
        
      }, 6000);
    setName("welcome to another page !!")
   }
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={dis}>click Name</button>
      <button onClick={dis1}>next ?</button>
      <br></br>
      {name
      }

    </div>
  )
}

export default App













/*import React from "react";
import { useState } from "react";
const App=()=>{
const [val,setVal]=useState(0)
const dis=(event)=>{
    setVal(parseInt(event.target.value)+1)
}
return(
  <>
  <button onClick={dis} value={val}>you clicked:{val}times</button>
  </>
  )
}

export default App










/*import { useState } from "react"
function App()
{
  const[num,setNum]=useState(0)
  return(
    <>

    <button onClick={()=>setNum(num+1)}>Clicked{num}</button>
    </>
  )
}
export default App

// import { useState } from "react";
// function App()
// {
//   const[count,setCount]=useState(100)
//   const show1=(event)=>{
//     setCount(count+1)
//   }
//   const show2=(event)=>{
//     setCount(count-1)
//   }

// return(
//   <>
//   <button onClick={show1}>Increment By 1</button>
//   <button onClick={show2}>Decrement By 1</button>
//   <br></br>
//   <h2>{count}</h2>
//   </>
// )
// }
// export default App
















/*import { useState } from 'react'
import React from 'react'

const App = () => {
  const [name,setName]=useState("---")

  const dis=(event)=>{
       setName(event.target.value)
  }
  const show=(v)=>{
    console.log(v)
  }
  return (
    <div>
      <form>
      <input type="text" value={name} onChange={dis} placeholder='enter username'></input><br></br> 
       <input type="password" onChange={()=>show("12345")}placeholder='enter password'></input><br></br>
          <input type="number" placeholder='enter phone number'></input><br></br>
            <input type="email" placeholder='enter gmail'></input>
            <label>Select Gender:</label>
            <input type='radio'name='gender'></input>male
            <input type='radio'name='gender'></input>female
            <input type='radio'name='gender'></input>others
<br></br>
       <label>Select Course:</label>
           <input type='checkbox' name='c1'></input>c
              <input type='checkbox' name='c2'></input>c++
                 <input type='checkbox' name='c3'></input>Python
                    <input type='checkbox' name='c4'></input>java
                       <input type='checkbox' name='c5'></input>javascript
                          <input type='checkbox' name='c6'></input>mongoDB
<br></br>
<select>
  <option >select month</option>
   <option >JANUARY</option>
    <option >FEBURARY</option>
     <option selected >MARCH</option>
      <option >APRIL</option>
       <option >MAY</option>
</select>
<br></br>
Select Color:<input type='color' name='col'></input>
<br></br>
Select DOB:<input type='date' name='dob'></input>
<br></br>
Select Time :<input type='time' name='time'></input>
<br></br>
Select Week :<input type='week' name='month'></input><br></br>
Upload resume:<input type="file"></input><br></br>
<label>Type Your Address:</label>
<textarea rows="7" cols="25"></textarea><br></br>
<label>List box</label>
<select name="days[]"multiple>
  <option>sunday</option>
    <option>monday</option>
      <option>thusday</option>
        <option>wednesday</option>
          <option>thrusday</option>
            <option>friday</option>
              <option>saturday</option>
</select><br></br>
Volume:<input type='range' min="0" max="6"></input><br></br>
    <label>progress completed in 90% →</label>🧜‍♂️
        <progress  min="0" max="100" value="90"></progress><br></br>
                <button>clickme</button>
        <input type='submit'></input>
        <input type='button' value='clickme'></input>
</form>
    </div>
  )
}

export default App




/*import React from "react";
class App extends React.Component
{
  constructor(props)
  { 
    super(props)
    this.state={
      studentrollno:this.props.data.rno,
      studentname:this.props.data.sname,
      studentmark:this.props.data.mark,
       studentrank:this.props.data.rank,
        studentgrade:this.props.data.grade,
         studentloaction:this.props.data.location,
          studentstatus:this.props.data.issingle,

    }
  }
render()
{
  return(
  <>
          <h1>PEROSONAL INFO WITH DATA</h1>
          <h2>STUDENT ROLLNO : {this.state.studentrollno}</h2>
          <h2>STUDENT NAME : {this.state.studentname}</h2>
          <h2>STUDENT MARK: {this.state.studentmark}</h2>
           <h2>STUDENT RANK: {this.state.studentmark}</h2>
  <h2>STUDENT GRADE: {this.state.studentgrade}</h2>
  <h2>STUDENT LOCATION: {this.state.studentloaction}</h2>
  <h2>STUDENT STATUS: {this.state.studentstatus?"yes":"No"}</h2>
  </>)
}
}
export default App

















/*import React from "react";
class App extends React.Component
{
  constructor(props)
  { 
    super(props)
    this.state={
      studentname:this.props.sname,
      studentcity:this.props.city,
      stuedentphone:this.props.phone

    }
  }
render()
{
  return(<>
          <h1>PEROSONAL INFO WITH PROPS</h1>
          <h2>STUDENT NAME : {this.state.studentname}</h2>
          <h2>STUDENT CITY : {this.state.studentcity}</h2>
          <h2>STUDENT PHONE: {this.state.stuedentphone}</h2>
  
  </>)
}
}
export default App













/*import React from "react";
class App extends React.Component  // App is base , react component is derived
{
  constructor()
  {
    super()
    this.state={
      sno:111,
      sname:"ABISHEK.S",
      marks: [89,98 ,75,78,45]
      
    }
  }
  show=()=>{
              this.setState({sname:"ABISHEK SACHITHANANDHAM"})
  }
           
  dis=()=>{
               this.setState({marks: [100, 105, 77, 88, 65]
  });
  }
  dis1=()=>{
           const newnumber=[...this.state.marks]
           newnumber[3]=76
          this.setState({marks:newnumber})
  }
  
  render(){
    return (<>
                <h1>STUDENT MARK DETAIL</h1>
                <h2> STUDENT NAME : {this.state.sname}</h2>
                <h2> STUDENT NO : {this.state.sno}</h2>
                  <h2> {this.state.marks.map((v,index)=><>STUDENT MARKS {index+1}={v}<br></br></>)}</h2>
                  <button onClick={this.show}>Change Name</button>
                  <button onClick={this.dis}>Update Marks</button>
                  <button onClick={this.dis1}>Update Single Mark</button>
               </>)
  }
}
export default App












/*import Abishek from "./mycomponents/Abishek"
import { aadhar, accno, phone, sname } from "./mycomponents/commonvar"

function App(){
  return(
    <>
    <Abishek/>
    <center><h1> MY PERSONAL INFO</h1></center>
    <h1> MY NAME IS:{sname}</h1>
    <h1> MY PHONE NUMBER IS:{phone}</h1>
    <h1> MY AADHAR NO IS : {aadhar}</h1>
    <h1> MY IOB ACC NO IS :{accno}</h1>

        </>
  )
}
export default App








/*function App(){
  var arr=[11,22,33,44,55,66,77]
  return(<>
      <h1>REACT LOOP METHOD</h1>
     <h2>OLD MODEL</h2>
     {arr[0]}
      {arr[ 1]}
       {arr[2]}
        {arr[3]}
         {arr[4]}
          {arr[5]}
           {arr[6]}
    <h2>New Model of loop(loop) </h2>
    {arr.map((v)=><>{v}<br></br></>)}
      <h2>New Model of loop </h2>
      <ol type="I">
    {arr.map((v)=><li>{v+{}}</li>)}
     </ol>
      </>
  )
}
export default App*/
// function App(){
//   var arr=[105,122,133,44,55,66,77,102]
//   var s=0
//   var ma=arr[0]
//   var order=arr

//     return (<>
//              <h2>TASK: SUM OF ARRAY</h2>
//              <div style={{display:"none"}}>
//              {arr.map((item)=><>{s=s+item}<br></br></>)}
//              </div>
//              <h3>Sum of Array:{s}</h3>
           
//               <div style={{display:"none"}}>
//              { arr.map((v)=><>{ma<v&&<>{ma=v}</> }</>)}
//              </div>
//                <h3>Max of Array:{ma}</h3>
//                 <h2>ASCENDING ORDER</h2>
//                 <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
//                  {order.map((item)=><>+{item+" "} </>)}
//                    <h2>DESCENDING ORDER</h2>
//                 <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
//                  {order.map((item)=><>{item} </>)}
//                        <h2>ADD IN ELEMENT WITH PUSH</h2>
//                 <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}{order.push(650)}</div>
//                  {order.map((item)=><>{item} </>)}
//                             <h2>REMOVE LAST ELEMENT WITH POP</h2>
//                  <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}{order.pop()}</div>
//                   {/* <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}{order.pop()}</div>
//                         <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}{order.pop()}</div> */}
//                  {order.map((item)=><>{item} </>)} 
                 


//                  </>)

//  }
//  export default App








/*function App()
{
  var arr=[11,22,33,44,55,66,88,99,100]
  var[v1,v2,...v3]=arr
  return(<>
     <h2>spread operator</h2>
     <h3>index0:{v1}</h3>
      <h3>index1:{v2}</h3>
       <h3>index2:{v3}</h3>
   
  </>)
}
export default App
/*function App()
{
  var arr=[11,22,33,44,55,66]
  return(<>
     <h2>array function</h2>
     <h3>index0:{arr[0]}</h3>
      <h3>index1:{arr[1]}</h3>
       <h3>index2:{arr[2]}</h3>
        <h3>index3:{arr[3]}</h3>
         <h3>index4:{arr[4]}</h3>
          <h3>index5:{arr[5]}</h3>
  </>)
}
export default App




/*function App(){
  var mark=35
  return(<>
      <h1>React simple if statement</h1>
      <h2>{(mark>34&&"PASS")||"FAIL"}</h2>
  
  </>)
}*/
//Even or Odd
// function App(){
//   let num=19
//   return(
//     <>
//     <h1>React simple if statement </h1>
//     <h2>{num%2==0 && "even" || "odd"}</h2>
//     </>
//   )
// }
// export default App
/*function App(){
  let avg=75
  return(
    <>
    <h1>React simple if-else statement </h1>
    <h1>{(avg>=85&&"Outstanding")||(avg>=70&&"v GOOD")||(avg>=55&&"GOOD")||(avg>=35&&"PASS")}</h1>
    </>
  )
}
export default App*/
/*function App(){
     var res="PASS"
     var avg=35
     return(<>
     <h1>{
      (res==="PASS"&&
    ( (avg>=85&&"Outstanding")||
     (avg>=70&&"v GOOD")||
     (avg>=55&&"GOOD")||
     (avg>=35&&"PASS")
      ||"FAIR"))||"No grade because fail"}
      </h1>
     </>
     )
}
export default App







/*function App(){
   var unit=124
  return(
    <>
    <center><h1>Electricity Bill Calculation </h1></center>
    <h3>{(unit<=100&&"₹0")||
     (unit>=101&& unit<=125&&"₹50"+(unit-100)*2)||
     (unit>=126&& unit<=300&&"₹"+(200+(unit-200)*3))||
      (unit>=301&& unit<=400&&"₹"+(500+(unit-300)*4))||
      (unit>=401&& unit<=500&&"₹"+(900+(unit-400)*5))
    }
  </h3>
    </>
  )
}
export default App*/

/*+ve or -ve
function App(){
  let num=5
  return(
    <>
    <h1>React simple if-else statement </h1>
    <h1>{num>0?"Positive":num<0?"Negative":"Zero"}</h1>
    </>
  )
}
export default App*/

/*leap year or not
 function App(){
let year=2028
   return(
   <>
    <h1>React simple if statement </h1>
   <h2>{(year%4==0 && "Leap Year") || "Not a leapyear"}</h2>
    </>
 )
}
export default App*/

//eligible vote or not
// function App(){
//   let age=20
//   return(
//     <>
//     <h1>React simple if statement </h1>
//     <h2>{age>=18 && "Eligible for Vote" || "Not Eligible"}</h2>
//     </>
//   )
// }
// export default App



/*function App(){
  if(true)
  {
    var v=100
    let l=200
    const c=300
    l++;
    v++;
    console.log("let:"+l);
   // c++;
   // console.log("const:"+c); constant is permanent /no increment/no decrement
  }
  return(
    <>
    <h1>variable: global:{v}</h1>
     <h1>does not work let and const :because local</h1>
     <div id="res"></div>
    
    
    </>
  )
}*/






/*function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
           document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`
  }
  return(<>
     <h2>Click here👇</h2>
     <button onClick={()=>myfun(10,150,160)}>Click me</button>
     <div id="res"></div>
  </>)
}*/
/*import myimg from './images/images.jpg'
function App(){
  return(
    <>
    <center>
    <h2>CHELLAMEEEE !!!!</h2>
    <img src={myimg} width="400" height="auto" alt="path is wrong"></img>
    </center>
    </>
  )
}*/




/*function App()
{
  var a=600
  var b=900
  var c=1000
  return(
    <>
        <h2>Biggest Among 2 no's using conditional or ternaray operator</h2>
        
        <h1>Biggest Number:{(a>b && a>c)?a:(b>c)?b:c}</h1>
        </>
  )
}*/
 // export default App
/*function App(){
  //javascript learned code 
  var a=50
  var b=30
  return(<>
        <h1>total:{a+b}</h1>
  </>)
}
export default App*/
/*function App(){
  return(
    <div>
      <center>
    <h1>Welcome To React JS</h1>
     <h2>Welcome buddy !!</h2>
      <p>lorefenfne kfneinveavnkaen kanfeinfienvkaefnvk ae fkaenfiaenneaklf kenfienienloenmvl mgoegoemoemr kengoengroengrmlo kngofenrglenrglewnmrl ngoenblomblsml goenmvoemvolemvlo elgqelgkmqelrmgolqerngloe oeveongoqengoern olognqeorngoqerngo oaefjqeromgoqengro ojfqeorjgoqrejmg olfjerogoqerjgo ojrfoqerjgoer oanfoqejroqer oagjoqeerjgoqerja oajaeojgeoajro ogjeqoajgoqer 
      
      </p>
      </center>
        </div>
  )
}*/
// class compnents

   /* import React from "react"
    class Parent extends React.Component
    {
      render(){
              return(<>   
              <center>   
                 <h1>UNGAL ABISHEK</h1>
                <h2>Exercitation eiusmod reprehenderit et veniam. Excepteur ea anim deserunt minim id Lorem quis enim duis tempor aliquip consequat. Mollit magna eu cillum enim qui eiusmod ea do laborum eu ex. <mark>Anim aliqua excepteur excepteur sint qui </mark>irure tempor deserunt. Exercitation nostrud magna enim officia excepteur nulla amet. Deserunt minim minim aliqua minim dolore ullamco adipisicing ad consequat reprehenderit fugiat id aute. Cillum nulla dolor do ipsum sunt.

Laboris amet anim ad duis aliqua commodo est. Consequat proident ea deserunt commodo amet nostrud. Eiusmod nisi velit cillum nulla amet dolor magna eu incididunt enim mollit Lorem occaecat aliquip. Elit adipisicing tempor ullamco qui et id consectetur et. Ipsum id excepteur ea commodo ea voluptate.

Quis anim commodo nisi voluptate exercitation velit laborum velit irure id. Elit consectetur adipisicing ad velit proident fugiat proident enim amet. Sit id consectetur ipsum sunt enim qui laboris amet culpa. Amet tempor Lorem adipisicing adipisicing id sint elit adipisicing. Cillum velit occaecat nulla nulla magna voluptate ut. Do Lorem aliquip aute aliquip duis deserunt eu excepteur.

Cupidatat deserunt ad voluptate consequat culpa elit voluptate do magna duis. Proident laborum nulla nisi occaecat est. Minim incididunt fugiat exercitation tempor consectetur nostrud proident veniam excepteur. Lorem aute irure ipsum ut minim aliqua ut do sunt elit enim nisi enim Lorem. Qui occaecat voluptate dolor occaecat. Consequat ipsum consectetur consequat commodo sit et eiusmod. Nisi elit nisi laboris veniam exercitation amet Lorem enim fugiat esse.

Magna nisi consequat culpa dolore veniam fugiat duis ex incididunt ea ex. Cupidatat consequat minim est incididunt sit aliquip proident est elit ut duis pariatur. Aliqua adipisicing elit duis sit labore nostrud sint sunt duis officia ullamco.</h2></center>
             </>
 )
      }
    }
    class App extends React.Component
    {
      render(){
        return(<>        
          <Parent/>
          
            <center>
            <h1> RAJINI MURUGAN THUNAI</h1>
            <h2> Welcome Abishek !!</h2>
   Qui reprehenderit nulla culpa incididunt elit pariatur magna commodo est consequat. Eu excepteur incididunt officia commodo reprehenderit ut. Qui cupidatat qui est adipisicing Lorem anim adipisicing culpa aute fugiat incididunt magna. Ea amet ut do tempor aliquip excepteur eiusmod sint. <mark>Aliquip dolore proident officia consectetur pariatur magna reprehenderit veniam Lorem</mark> reprehenderit eiusmod duis sit. Culpa esse ullamco aliquip non mollit elit reprehenderit excepteur proident.Ex mollit laborum anim incididunt laboris anim velit ad. Consequat tempor minim proident exercitation duis nostrud. Nisi quis enim ut nisi id irure deserunt eu occaecat ea id deserunt. Irure velit dolor in incididunt eu consectetur excepteur nulla. Est ut proident veniam minim qui nostrud. Quis dolor laborum pariatur fugiat ipsum est est laboris ut consequat commodo.

Pariatur eiusmod adipisicing irure dolore deserunt nostrud aliquip adipisicing. Ea et duis nostrud anim sunt qui. Enim magna <mark>laboris mollit exercitation irure. Consectetur exercitation fugiat velit do nisi labore </mark> sit enim id laborum fugiat aliquip do.

Ex quis proident veniam excepteur occaecat id sit enim esse anim labore fugiat. Magna ut ex consequat dolor consequat non. Ea ad amet mollit pariatur deserunt Lorem.

Tempor Lorem laboris et Lorem consectetur ipsum Lorem amet aute consequat. Non adipisicing voluptate sunt do voluptate ad cillum. Anim nulla ad occaecat elit pariatur non nulla aliquip dolor occaecat laboris in.

Consectetur occaecat magna laborum reprehenderit in minim sunt nisi dolor exercitation nostrud labore est officia. Sint ut dolore dolore exercitation excepteur laboris excepteur tempor occaecat proident. Adipisicing do et elit consectetur aliquip officia ea. Non do laboris in qui ullamco eu magna enim aliquip sunt aute exercitation mollit nostrud. Aliqua cupidatat excepteur aliquip velit est culpa sunt minim. Sunt exercitation exercitation minim nulla culpa voluptate sit ad ut occaecat nisi commodo deserunt veniam.

Et do dolore aute sunt voluptate duis officia laborum excepteur sint irure. Eu nisi anim sit incididunt eiusmod fugiat qui ea fugiat dolor consectetur dolore. Excepteur culpa minim nisi ullamco adipisicing aliqua magna ea qui mollit. Anim deserunt aliquip eiusmod laborum sint adipisicing officia cupidatat quis fugiat tempor eu consectetur.

Sint eu officia ullamco ipsum dolor cupidatat deserunt exercitation dolore proident enim magna irure ullamco. Tempor enim eiusmod consectetur culpa laboris cillum est occaecat magna. Consectetur et ut tempor dolore elit pariatur excepteur excepteur cillum ipsum. Sunt laborum eu ex cillum irure laboris ex ex laboris consectetur commodo irure. Eu quis pariatur occaecat ullamco nostrud adipisicing cillum id sint ipsum. Commodo nulla adipisicing occaecat non ullamco qui in sint dolor consectetur ex adipisicing. Eiusmod occaecat officia ipsum enim amet ipsum in qui eu proident ex officia voluptate.

In tempor veniam aute qui voluptate. Duis dolore do esse officia irure magna reprehenderit esse cillum velit enim laborum. Commodo veniam pariatur ex ea est magna incididunt non.Occaecat fugiat consequat commodo laboris ullamco minim id aliqua occaecat non commodo reprehenderit in occaecat. Duis laboris voluptate voluptate eiusmod amet sint commodo tempor anim consequat dolore officia officia aliquip. Id aute ipsum anim ipsum non dolore dolor eu et anim ea quis magna irure. Ut consectetur duis cillum ad. Ad labore consequat et est magna.
            Sunt ea id laboris velit veniam est magna sint do fugiat non reprehenderit. Aliqua ad nisi nulla nisi laboris nisi mollit cupidatat excepteur mollit. Minim culpa dolor non officia voluptate consectetur mollit sit aute occaecat officia consectetur. Voluptate laborum consequat nisi consectetur.Est non tempor sint elit sunt nulla occaecat consequat non ut. Veniam quis proident nisi sit quis laboris nulla reprehenderit ullamco. Et occaecat voluptate ad aute consequat enim quis do veniam occaecat voluptate esse labore ad. Adipisicing nisi ex nostrud cupidatat excepteur cillum Lorem aute consequat duis officia. Est magna laborum est elit proident.
            
            </center>
          
       </>
 )
      }
    }

export default App*/
/*import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/