import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  about: About = null;

  constructor(private aboutService: AboutService ,
    private activatedRouter: ActivatedRoute,
    private router: Router  
    ) { }

ngOnInit(): void {

  const id = this.activatedRouter.snapshot.params['id'];

  this.aboutService.detail(id).subscribe( data => {
    this.about = data;
  }, err =>{
    alert("Error al modificar el proyecto");
    this.router.navigate(['']);
  });
  
}

onUpdate(){

  const id = this.activatedRouter.snapshot.params['id'];
     
  this.aboutService.update( id, this.about ).subscribe( data => {
    
    this.router.navigate(['']);
  },err =>{
    
    alert("Error al modificar la about");
    this.router.navigate(['']);
  });
}
}
