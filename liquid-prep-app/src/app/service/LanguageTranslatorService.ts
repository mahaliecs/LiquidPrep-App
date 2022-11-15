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
    //     //   apikey: '',
    //     // }),
    //     // url: '',
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

