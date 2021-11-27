//print country name ,capital and flag using foreach .

fetch("https://restcountries.com/v2/all")
.then (function(data){
return data.json()
})

.then(function(dataObj){
  console.log(dataObj)


dataObj.forEach(element=>{
  console.log(element.name)
  console.log(element.capital)
  console.log(element.flag)

})
})


//--------------------------------------------------------------------------------

//print population <200000 using fiter method

fetch("https://restcountries.com/v2/all")
.then(function(data){
  return data.json()
})

 .then(function(dataObj){
    console.log(dataObj)

    var res=dataObj.filter((element)=>element.population<200000)
    console.log(res)
  })


  //--------------------------------------------------------------------------------

//print asian countries using filter method

  fetch("https://restcountries.com/v2/all")
  .then (function(data){
    return data.json()
  })
  .then(function(dataObj){
    console.log(dataObj)
    
    var res1=dataObj.filter ((element)=>element.region=="Asia")
    console.log(res1)

   })
  

   //---------------------------------------------------------------------------------

// print total population using reduce function 

    fetch("https://restcountries.com/v2/all")
   .then(function(data){
     return data.json()
   })
   
   .then(function(dataObj){
     console.log(dataObj)

     var arr=dataObj.reduce((acc,element)=>{
       return acc+element.population
     },0)
     console.log(arr)
   })


   //----------------------------------------------------------------------------------

   //print countries using usd dollars 

   async function getalldata(){
     try{
       var data=await fetch("https://restcountries.com/v2/currency/{currency}")
       console.log(data)
        for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code==="USD")
        {
            console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
        }
        
      
      } 
     }catch(error){
       console.log(error)
     }
   }
   
          getalldata()
  
  
    
  
