import { Student } from "../../entity/student";
import { Grade } from "../../entity/grade";
import { Observable } from "rxjs/Observable";
import axios, { AxiosResponse } from "axios";
import { IAjaxReturn } from "../index.type";

interface IStuAndCountNum {
  countNum: number,
  students: Student[]
}

export class StudentService {

  public static getGrade (): Observable<AxiosResponse<IAjaxReturn<Grade[]>>> {
    return Observable.fromPromise(axios.get('/api/student/getGrade'));
  }

  public static getStuByGidCid (gradeId: number, classId: number): Observable<AxiosResponse<IAjaxReturn<Student[]>>> {
    return Observable.fromPromise(axios.post('/api/student/getStuBygidcid', { gradeId, classId }));
  }

  public static getStudent (page: number): Observable<AxiosResponse<IAjaxReturn<IStuAndCountNum>>> {
    return Observable.fromPromise(axios.get('/api/student/getStudent', { params: { page } }));
  }

  public static addStudent (students: Student[]): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.put('/api/student/addStudent', { students }));
  }

  public static updateStudent (student: Student): Observable<AxiosResponse<IAjaxReturn<null>>> {
    const { id, name, studentNumber, sex, classId, gradeId } = student
    return Observable.fromPromise(axios.post('/api/student/updateStudent', { id, name, studentNumber, sex, classId, gradeId }));
  }

  public static deleteStudent (ids: number[]): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/student/deleteStudent', { ids }));
  }

}