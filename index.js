const fs = require('fs');
const path = require('path');
const replaceThis = "moaz" 
const repaceWith = "moeez"
const perview = false;
const folder = __dirname

try {
   fs.readdir(folder,(err,data)=>{
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let oldFile = path.join( folder ,item )
        let newFile = path.join( folder , item.replaceAll(replaceThis , repaceWith))
        if(!perview){
            fs.rename(oldFile ,newFile,()=>{
                console.log("Rename Done")
            })
        }
        else{
            if("data/" +  item !== newFile) console.log("data/" +  item + " will be rename to this "+ newFile)
        }
    }
  })
} catch (err) {
  console.error(err);
}