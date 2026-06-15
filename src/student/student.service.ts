import { Injectable, Param,NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students =[
        {
            id:1,
            name:"Rahul",
            age:23
        },
        {
            id:2,
            name:"Rohit",
            age:22
        },
        {
            id:3,
            name:"Raj",
            age:21
        }
    ];
    getAllStudents(){
       return this.students;
    }

    getStudentId(id:number){
       const students =  this.students.find(s => s.id === id);
        if(!students) throw new NotFoundException('Student not found!');
        return students;
    }

    //Post
    createStudent(data:{ name:string; age:number}){
        const newStudent = {
            id:Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    //Put
    updateStudent(id:number, data:{ name:string; age:number}){
       const index = this.students.findIndex(s => s.id === id);
       if(index === -1) throw new NotFoundException('Student not found!');
       this.students[index] = {
        id,
        ...data
       };
       return this.students[index];
    }

    //Patch

    patchStudent(id:number , data:Partial<{name:string; age:number}>){
        const student = this.getStudentId(id);
        Object.assign(student,data);
        return student;
    }

    //Delte
    deleteStudent(id:number){
        const index = this.students.findIndex(s => s.id === id);
        if(index === -1) throw new NotFoundException('Student not found!');
      const deleted=   this.students.splice(index,1);
        return {
            message:"Student deleted successfully",
            student:deleted[0]
        };
    }
}
