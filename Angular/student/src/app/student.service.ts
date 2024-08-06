import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
url:string;
student:Student;
studentArr:Student[];
  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/students";
    this.student=new Student();
    this.studentArr=[];
   }

   insertStudent(student:Student){
    this.http.post<Student>(this.url,student).subscribe();
    return "Student details added";
   }

   updateStudent(student:Student){
    this.http.put<Student>(this.url+"/"+student.id,student).subscribe();
    return "Student details updated";
   }
   deleteStudent(id:number){
     this.http.delete<Student>(this.url+"/"+id).subscribe();
   return  "Student details deleted";
   }
   findStudent(id:number){
    this.http.get<Student>(this.url+"/"+id).subscribe(data => this.student=data);
    return this.student;
   }
   findallStudent(){
    this.http.get<Student[]>(this.url).subscribe(data => this.studentArr=data);
    return this.studentArr;
   }
}
