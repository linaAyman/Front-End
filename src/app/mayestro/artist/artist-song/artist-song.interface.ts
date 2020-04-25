import { Time } from '@angular/common';

export interface IASong{
    name: string;
    duration:Time;
    image:string;
    isLiked:boolean;
    id:string;
    url:string
}