"use strict";
// import { v2 as cloudinary } from "cloudinary";
// import * as fs from "fs";
// import { ICloudinaryResponse, IUploadFile } from "../interfaces/file";
// import multer from "multer";
// // cloudinary.config({
// // cloud_name: config.cloudinary.cloudName,
// // api_key: config.cloudinary.apiKey,
// // api_secret: config.cloudinary.apiSecret
// // });
// cloudinary.config({
//   cloud_name: "dcmxhfmga",
//   api_key: "356855981144784",
//   api_secret: "mIDeKu1BJ14feBw8kxspboVuaaE",
// });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
// const uploadToCloudinary = async (
//   file: IUploadFile
// ): Promise<ICloudinaryResponse | undefined> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       file.path,
//       (error: Error, result: ICloudinaryResponse) => {
//         fs.unlinkSync(file.path);
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       }
//     );
//   });
// };
// // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// //   { public_id: "olympic_flag" },
// //   function(error, result) {console.log(result); });
// export const FileUploadHelper = {
//   uploadToCloudinary,
//   upload,
// };
