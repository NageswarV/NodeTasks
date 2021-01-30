const readline=require('readline');
const crypto=require('crypto');
const fs=require('fs');
const path=require('path');
module.exports=function recursiveDirRead(current_dir){
 
    fs.readdir(current_dir,{encoding:'utf-8'},(err,files)=>{
        if(files){
            
        files.forEach(file=>{
            file= path.join(current_dir,file);
            var hashCodesha1='',hashCodemd5='';
            
            if(fs.statSync(file).isDirectory()){
                console.log(file);
                recursiveDirRead(file);
            }
            else{
                var read=readline.createInterface({
                input:fs.createReadStream(file,{encoding:'utf-8'}),
                output:process.stdout,
                terminal:false
            });
            read.on('line',line=>{
                hashCodesha1+=crypto.createHash('SHA256').update(line).digest("hex");
                hashCodemd5+=crypto.createHash('md5').update(line).digest("hex");
            }).once("close",function(){
            console.log(file +"   -  "+ hashCodesha1 + "   -   "+ hashCodemd5);
            });
        }
        });
        }
       });
 }