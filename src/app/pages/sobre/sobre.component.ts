import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // pegará os parametros na rota
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)
    )
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    )
    setInterval( () => {
     this.router.navigate(['404']); // indicado para navegações internas
     // this.router.navigateByUrl('404'); // indicado para navegações externa, pois ocorre o reaload da página
    }, 3000)
  }

}
