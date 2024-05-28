import { Pipe, PipeTransform } from '@angular/core';

import { IListItem } from '../form-utils';

@Pipe({
   name: 'enumToList',
})
export class EnumToListPipe implements PipeTransform {
  transform<T extends {}>(enumType: T): IListItem[] {
    return Object.keys(enumType).map((item: string, index: number) => {
      return { 
        id: `${item}_${index}`,
        value: item,
        name: item,
      }
    });
  }
}