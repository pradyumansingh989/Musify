const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const AVATAR_PATH=path.join('/uploads/songs');
const musicSchema=new mongoose.Schema({
    name:{
        type:String
    },
    singername:{
        type:String
    },

    duration:{
        type:Number
    },
    song:{
        type:String
    },
    user:
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:'User'
        }
},{
    timestamps:true
})

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
        
      cb(null, file.originalname)
    }
  });

//   static methods
musicSchema.statics.uploadedAvatar=multer({storage:storage}).single('song');
musicSchema.statics.avatarPath=AVATAR_PATH;


const Music=mongoose.model('Music',musicSchema);
module.exports=Music;