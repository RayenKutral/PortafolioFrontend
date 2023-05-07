import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { SEstudiosService } from 'src/app/service/s-estudios.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {
  nombreE : string = '';
  descripcionE : string = '';

  constructor(private sEstudios: SEstudiosService, private router: Router){}

  ngOnInit(): void {    
  }

  onCreate(): void{ 
  const est= new Estudios(this.nombreE, this.descripcionE);
  this.sEstudios.save(est).
  subscribe({
    next: (data) => {
    alert('Estudio agregado');
    this.router.navigate(['']);
    },
    error: (err) => {
    alert('Falló');
    this.router.navigate(['']);
    }
   } )
}
}