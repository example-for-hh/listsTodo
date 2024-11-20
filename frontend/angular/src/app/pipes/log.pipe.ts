import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'log',
})
export class LogPipe implements PipeTransform {
  transform(value: any, _args?: any): null {
    console.log(value)
    return null
  }
}
