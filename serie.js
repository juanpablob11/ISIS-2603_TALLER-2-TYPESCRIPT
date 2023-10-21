export class serie {
    id;
    title;
    channel;
    seasons;
    description;
    url_direction;
    img;
    constructor(id, title, channel, seasons, description, url_direction, img) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url_direction = url_direction;
        this.img = img;
    }
}
