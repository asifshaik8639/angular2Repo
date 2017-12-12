import {FormControl} from '@angular/forms';

 export function restrictedWords(words) {
       return (control: FormControl):{[key:string]: any} => {
          if(!words) {return null};

          let invalidWords = words
          .map((word) => control.value.includes(word) ? word : null)
          .filter((filteredWord) => filteredWord != null)

          console.log(' invalidWords in the shared folder are =>', invalidWords);

          return (invalidWords) && invalidWords.length > 0 ?
                {'restrictedWords': invalidWords.join(', ')} : null; 
       }
  }
  