const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').then(() => {
console.log('Connected to MongoDB Successfully..!');
}).catch(() => {
    console.log(err);
}) 

const student = mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
});

const Student = mongoose.model('student', student);

//Create Data
const Create_Data = async() => {
    const create_student_data = await Student.create({
            name: 'Mayur',
            workout: true,
            height: 6.5
    })
    console.log(create_student_data);
}

Create_Data();


//Read Data
const Read_Data = async() => {
    const read_student_data = await Student.find();
    console.log(read_student_data);
}
Read_Data();

//To find height 
//$eq - equal to, $gte - greather than equal to, $lte - less than equal to
const Find_Height = async() => {
    const find_student_height = await Student.find({height: {$eq:6}});
    console.log(find_student_height);
}
Find_Height();