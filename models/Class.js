const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const classSchema = new mongoose.Schema({
    standard: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    section: {
        type: String,
        trim: true,
    },
    courseCode: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    institute: {
        type: String,
        required: true,
        trim: true
    }
});

// classSchema.virtual("classId")
//     .set(function() {
//         this._classId = "";
//         // noinspection JSUnresolvedVariable
//         if(!this.courseCode) {
//             // noinspection JSUnresolvedVariable
//             let instituteNameList = this.institute.split(' ');
//             let abbvr = "";
//             instituteNameList.forEach((name) => {
//                 name = name.toLowerCase();
//                 if(name === "of" || name === "in" || name === "at" || name === "the") {
//                     abbvr += "";
//                 } else {
//                     abbvr += name.charAt(0).toUpperCase();
//                 }
//             })
//             // noinspection JSUnresolvedVariable
//             this._classId = `${abbvr}${this.standard.toString()}${this.section.toUpperCase()}${this.subject.substring(0,2).toUpperCase()}`;
//         } else {
//             // noinspection JSUnresolvedVariable
//             this._classId = this.courseCode;
//         }
//     })
//     .get(function() {
//         // noinspection JSUnresolvedVariable
//         return this._classId;
//     });

module.exports = mongoose.model("Class", classSchema);