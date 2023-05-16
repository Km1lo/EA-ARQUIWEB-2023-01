import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/cvtask';
import { Subject, map } from 'rxjs';

const base_url = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class CvtaskService {


  private cvurl = `${base_url}/tasks`;

  constructor(private cvhttp:HttpClient) { }
  private cvconfirmDeletion = new Subject<Boolean>()
  private cvlistChange = new Subject<Task[]>()

  getArtistCount(){
    return this.cvhttp.get<Task[]>(this.cvurl).pipe(
      map((artists: Task[]) => artists.length)
    )
  }

  list(){
    return this.cvhttp.get<Task[]>(this.cvurl);
  }
  listId(cvid:number){
    return this.cvhttp.get<Task>(`${this.cvurl}/${cvid}`);
  }

  insert(cvcomment : Task){
    return this.cvhttp.post(this.cvurl, cvcomment);
 }
 getConfirmDelete(){
  return this.cvconfirmDeletion.asObservable();
}
setConfirmDelete(cvstate:Boolean){
  this.cvconfirmDeletion.next(cvstate);
}
delete(cvid: number) {
  return this.cvhttp.delete(`${this.cvurl}/${cvid}`)
}
setList(cvlistNew: Task[]) {
  this.cvlistChange.next(cvlistNew);
}
getList(){
  return this.cvlistChange.asObservable();
}
}
