import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//activated routes reads from the route while router is useful for writing into the route
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm:String = "";
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
  }

  Search():void{
    if(this.searchTerm)
    this.router.navigateByUrl('/search/' + this.searchTerm)

  }

}
