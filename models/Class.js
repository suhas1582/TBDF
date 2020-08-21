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
        unique: true
    },
    teacher: {
        type: ObjectId,
        ref: "Teacher",
        required: true
    },
    institute: {
        type: String,
        required: true,
        trim: true
    }
});

classSchema.virtual("classId")
    .set(function() {
        this._classId = "";
        // noinspection JSUnresolvedVariable
        if(!this.courseCode) {
            // noinspection JSUnresolvedVariable
            let instituteNameList = this.institute.split(' ');
            let abbvr = "";
            instituteNameList.forEach((name) => {
                if(name === "of" || "in" || "at" ) {
                    abbvr += "";
                } else {
                    abbvr += name.charAt(0).toUpperCase();
                }
            })
            // noinspection JSUnresolvedVariable
            this.classId = `${abbvr}${this.standard.toString()}${this.section.toUpperCase()}${this.subject.substring(0,2).toUpperCase()}`;
        } else {
            // noinspection JSUnresolvedVariable
            this._classId = this.courseCode;
        }
    })
    .get(function() {
        // noinspection JSUnresolvedVariable
        return this._classId;
    });

module.exports = mongoose.model("Class", classSchema);