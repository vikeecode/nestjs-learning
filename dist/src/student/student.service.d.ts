export declare class StudentService {
    private students;
    getAllStudents(): {
        id: number;
        name: string;
        age: number;
    }[];
    getStudentId(id: number): {
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
    updateStudent(id: number, data: {
        name: string;
        age: number;
    }): {
        id: number;
        name: string;
        age: number;
    };
    patchStudent(id: number, data: Partial<{
        name: string;
        age: number;
    }>): {
        id: number;
        name: string;
        age: number;
    };
    deleteStudent(id: number): {
        message: string;
        student: {
            id: number;
            name: string;
            age: number;
        };
    };
}
