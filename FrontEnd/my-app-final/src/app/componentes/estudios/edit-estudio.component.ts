import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { SEstudiosService } from 'src/app/service/s-estudios.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {

  estu: Estudios = null;

  constructor(private sEstudios: SEstudiosService, private activatedRouter: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void {
    
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.detail(id).subscribe({ next:
      (data) => {
        this.estu = data;
    }, error: (err) =>{
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
  })
  }
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.update(id, this.estu).subscribe({next:
      (data) => {
        this.router.navigate(['']);
      },error: (err) =>{
         alert("Error al modificar estudio");
         this.router.navigate(['']);
      }
  })
  }
}
