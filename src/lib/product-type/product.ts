

export type Product = {
    uuid: string;
    thumbnail: string;
    name: string;
    computerSpec?: {
        processor: string;
        ram: string;
        storage: string;
        gpu: string;
    };
    description: string;
    priceOut: number;
}