/**
 * Created by Administrator on 2016/8/5.
 */
var klass=require('./klass.js');

exports.add=function(klasses){
    klasses.forEach(function(item,index){
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students);
    })
}

klass.add('xs',["帅帅","么妹"]);