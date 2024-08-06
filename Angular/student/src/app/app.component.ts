import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../../model/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'student';
  // name: string = "";
  // regno: string = "";
  // date: string = "";
  // gender: string = "";
  // fname:string="";
  // mname:string="";
  // selectedOption: string="";
  // options = [
  //   { value: 'male', label: 'Male' },
  //   { value: 'female', label: 'Female' },
  //   { value: 'other', label: 'Other' }
  // ];
  // bg: string = "";
  // phone: string = "";
  result:string;
student:Student;
studentArr:Student[];
flag:boolean;
  constructor(private service:StudentService) {
    this.student=new Student();
    this.result="";
    this.studentArr=[];
    this.flag=false;
  }
  insertStudent(data:any){
    this.student.id=data.id;
    this.student.regno=data.regno;
    this.student.fname=data.fname;
    this.student.mname=data.mname;
    this.student.phone=data.phone;

     this.result=this.service.insertStudent(this.student);
    alert(data.id+""+data.regno+""+data.fname+""+data.mname+""+data.phone);
  }

  updateStudent(data:any){
    this.student.id=data.id;
    this.student.regno=data.regno;
    this.student.fname=data.fname;
    this.student.mname=data.mname;
    this.student.phone=data.phone;

     this.result=this.service.updateStudent(this.student);
    alert(data.id+""+data.regno+""+data.fname+""+data.mname+""+data.phone);
  }
  deleteStudent(data:any){
    this.result=this.service.deleteStudent(data.id);
  }
  findStudent(data:any){
    this.student=this.service.findStudent(data.id); 
    this.result=this.student.id+" "+this.student.regno+" "+this.student.fname+" "+this.student.mname+" "+this.student.phone; 
  }
  findallStudent(){
    this.studentArr=this.service.findallStudent(); 
    this.flag=true;
  }
}
