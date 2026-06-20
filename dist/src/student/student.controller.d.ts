import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudents(): {
        id: number;
        name: string;
        age: number;
    }[];
    getStudentById(id: string): {
        id: number;
        name: string;
        age: number;
    };
    createStudent(data: {
        name: string;
        age: number;
    }): {
        name: string;
        age: number;
        id: number;
    };
    updateStudent(id: string, data: {
        name: string;
        age: number;
    }): {
        id: number;
        name: string;
        age: number;
    };
    patchStudent(id: string, data: Partial<{
        name: string;
        age: number;
    }>): {
        id: number;
        name: string;
        age: number;
    };
    removeStudent(id: string): {
        message: string;
        student: {
            id: number;
            name: string;
            age: number;
        };
    };
}
