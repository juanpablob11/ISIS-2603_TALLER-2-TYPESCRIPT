export class serie {
    id: number;
    title: string;
    channel: string;
    seasons: number;
    description: string;
    url_direction: string;
    img: string;
    constructor(id: number, title: string, channel: string, 
        seasons: number, description: string, 
        url_direction: string, img: string){
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url_direction = url_direction;
        this.img = img;
    }
}