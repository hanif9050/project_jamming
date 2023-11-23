import data from "./MockData"
function dataJs(endpoint){
    return new Promise((resolve,reject)=>{
        // const sentData=data.filter(item=>item.name.includes(endpoint))
        resolve(data)
        // console.log(data)
       /*  if(sentData.length>0){
            resolve(data)
        }else{
            reject("not found :"+endpoint)
        } */

    })
};

export default dataJs