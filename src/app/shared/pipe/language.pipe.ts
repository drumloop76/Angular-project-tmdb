import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { LanguagesService } from 'src/app/service/languages.service';

@Pipe({
  name: 'language'
})

export class LanguagePipe implements PipeTransform {
  full: string  = '';
  language: any[] = [];

  constructor(private service: LanguagesService) { }

  transform(value: string): any {
    return this.service.getLanguages().pipe(map((data:any) => {
      this.language = data;
      const newLang = this.language.find((res:any) => {
        return res.iso_639_1 === value;
      })

      if(newLang) {
        this.full = newLang.english_name;
      }

      return this.full;
    }))
  }
}
