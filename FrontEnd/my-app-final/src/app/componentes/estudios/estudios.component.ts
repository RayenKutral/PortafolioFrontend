import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { SEstudiosService } from 'src/app/service/s-estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{

  est: Estudios[] = [];

  constructor(private sEstudios: SEstudiosService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void { 

    this.cargarEstudios();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarEstudios(): void{
    this.sEstudios.lista().subscribe(data => {this.est = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sEstudios.delete(id).subscribe({ next:
        (data) => {
          this.cargarEstudios();
        }, error: (err) => {
          alert("No se pudo borrar estudio");
        }
})
}
  }
}