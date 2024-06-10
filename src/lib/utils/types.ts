export type Post = {
    "name": string,
    "year": number,
    "description": string,
    "source": string,
    "artist": {
        "image": string,
        "name": string
    },
    "images": {
        "thumbnail": string,
        "hero": {
            "small": string,
            "large": string
        },
        "gallery": string
    },
    "slug": string
}

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string
};