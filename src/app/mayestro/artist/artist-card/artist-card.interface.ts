import { Time } from '@angular/common';

export interface IACard{
    id: string;
    image: string;
    name: string;
    totalTracks: number;
    duration: number;
    isLiked: boolean;
    type:string;
}