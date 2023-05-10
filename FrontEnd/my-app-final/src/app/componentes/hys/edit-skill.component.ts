import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
  
skill: Skills = null;

constructor(private skills: SkillsService, private activatedRouter: ActivatedRoute, private router: Router){

} 

ngOnInit(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.skills.detail(id).subscribe({ next:
    (data) => {
      this.skill = data;
  }, error: (err) =>{
      alert("Error al modificar skill");
      this.router.navigate(['']);
    }
})
}


OnUpdate(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.skills.update(id, this.skill).subscribe({ next:
    (data) => {
      this.router.navigate(['']);
    },error: (err) =>{
       alert("Error al modificar skill");
       this.router.navigate(['']);
    }
})
}
}

