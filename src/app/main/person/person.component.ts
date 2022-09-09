import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';
import SwiperCore, { Navigation, Virtual } from 'swiper';

SwiperCore.use([Navigation, Virtual]);

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: any;
  id!: number;
  credit_id!: string;
  images: any[] = [];
  imageUrl = 'https://image.tmdb.org/t/p/w500';
  noImage = './assets/images/no_img2.png';

  castAll: any[] = [];
  castSF: any[] = [];
  crewAll: any[] = [];
  crewSF: any[] = [];

  slides = Array.from({ length: 20 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  constructor(private personService: PersonService, 
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.credit_id = params['credit_id'];
      this.getPersonDetails(this.id);
      this.getPersonImages(this.id);
      // this.getPersonTaggedImages(this.id);
      this.getPersonMovieCredits(this.id);
      // this.getMovieCredit(this.credit_id)
    });
  }

  getPersonDetails(id: number) {
    this.personService.getPerson(id).subscribe((data: any) => {
      // console.log(data)
      this.person = data;
    });
  }

  getPersonImages(id: number) {
    this.personService.getPersonImages(id).subscribe((data: any) => {
      // console.log(data.profiles)
      this.images = data.profiles;
    });
  }

  // getPersonTaggedImages(id: number) {
  //   this.personService.getPersonTaggedImages(id).subscribe((data: any) => {
      // console.log(data)
      // this.images = data.profiles;
  //   });
  // }

  getPersonMovieCredits(id: number) {
    this.personService.getPersonMovieCredits(id).subscribe((data: any) => {
      console.log(data)
      this.castAll = data.cast;
      this.crewAll = data.crew;

      let castArr = data.cast;
      castArr.filter((cs:any) => {
        if(cs.genre_ids.includes(878) || cs.genre_ids.includes(10765)) {
          this.castSF.push(cs);
        }
      });

      let crewArr = data.crew;
      crewArr.filter((cs:any) => {
        if(cs.genre_ids.includes(878) || cs.genre_ids.includes(10765)) {
          this.crewSF.push(cs);
        }
      });
    });
  }

  // getMovieCredit(credit_id:any) {
  //   this.personService.getMovieCredit(credit_id).subscribe((data: any) => {
  //     console.log(data)
  //     // this.person = data;
  //   });
  // }

}
