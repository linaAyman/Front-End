import { IPlaylist } from './playlists.interface';

export class ICategory{
    name: string;
    description: string;
    ID: string;
    playlists:IPlaylist[];
}