import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"


cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUDNAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' 
});

const uploadonCloudinary = async (localFilePath)=> {
    try{
if(!localFilePath) return null
//upload file on cloudinary
cloudinary.uploader.upload( localFilePath,{
    resource_type: "auto"
}) 
//local file has been upload
console.log(response.url); 
return response;
    } catch(error){
    fs.unlinkSync(localFilePath)//remove local saved temp file as the upload opp got failed
    return null;
    }
}

export {uploadonCloudinary}