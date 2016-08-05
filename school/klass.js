/**
 * Created by Administrator on 2016/8/5.
 */
var student  = require('./student.js');
var teacher  = require('./teacher.js');

function add(teacherName,students){
    teacher.add(teacherName);
    students.forEach(function(item,index){
        student.add(item);
    });
}

exports.add=add
