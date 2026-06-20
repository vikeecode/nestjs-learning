"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
let StudentService = class StudentService {
    students = [
        {
            id: 1,
            name: "Rahul",
            age: 23
        },
        {
            id: 2,
            name: "Rohit",
            age: 22
        },
        {
            id: 3,
            name: "Raj",
            age: 21
        }
    ];
    getAllStudents() {
        return this.students;
    }
    getStudentId(id) {
        const students = this.students.find(s => s.id === id);
        if (!students)
            throw new common_1.NotFoundException('Student not found!');
        return students;
    }
    createStudent(data) {
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(id, data) {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1)
            throw new common_1.NotFoundException('Student not found!');
        this.students[index] = {
            id,
            ...data
        };
        return this.students[index];
    }
    patchStudent(id, data) {
        const student = this.getStudentId(id);
        Object.assign(student, data);
        return student;
    }
    deleteStudent(id) {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1)
            throw new common_1.NotFoundException('Student not found!');
        const deleted = this.students.splice(index, 1);
        return {
            message: "Student deleted successfully",
            student: deleted[0]
        };
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=student.service.js.map