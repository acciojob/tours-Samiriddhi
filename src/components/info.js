import React,{useState} from 'react'

let Info = (props)=>{
    let [string,Setstring]=useState(props.a.substring(0,200))
    console.log(string.length)
    function changedata(){
      if(string.length==200){
         Setstring(props.a)
      }
      else{
       
        Setstring(props.a.substring(0,200))
      }
    }
   
    return (
       <div>
        <div id='tour-item-para-rec6d6T3q5EBIdCfD'>{string}</div>
     <button onClick={changedata} id='see-more-rec6d6T3q5EBIdCfD'>{string.length==200 ? 'See more' : 'Show less'}</button>
       </div>
    )
}
export default Info;