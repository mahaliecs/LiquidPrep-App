import { Observable, Observer } from 'rxjs';
import LanguageTranslatorV3, { TranslateParams } from 'ibm-watson/language-translator/v3'
import { IamAuthenticator } from 'ibm-watson/auth'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})

@Injectable()
export class LanguageTranslatorService {
  public constructor() {}

  // public Translate(text: string[], modelId: string): Observable<any>{
	// console.log("GOODBYE")
	// return new Observable();
  // }
  public Translate(text: string[], modelId: string): string {

    // const translator = new LanguageTranslatorV3({
    //     version: '2018-05-01',
    //     // authenticator: new IamAuthenticator({
    //     //   apikey: 'ZghpOfAbpgdLuoAgV7-kOEYlG6CJSTem-wSHo9NrWues',
    //     // }),
    //     // url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/b0491abd-7640-4d72-98e6-a68035a39968',
    //   });

    const translateParams:TranslateParams = {
      text: text,
      modelId: modelId,
    };

    // translator.translate(translateParams)
    // .then(translationResult => {
    //   console.log(JSON.stringify(translationResult, null, 2));
    // })
    // .catch(err => {
    //   console.log('error:', err);
    // });

    return "HELLOLOLLLLLLLL"
      // observer.complete();
    }
  
}

