export class Cat {

    id: number;
    name: string;
    gender: string;
    url: string;
    score: number;
    nbvote: string;
    rank:number;

    constructor(cat: any = null) {

        this.id = cat && cat.id || null;
        this.name = cat && cat.name || null;
        this.gender = cat && cat.gender || null;
        this.url = cat && cat.url || null;
        this.score = cat && cat.score || null;
        this.nbvote = cat && cat.nbvote || null;
        this.rank = cat && cat.rank || null;

    }

}