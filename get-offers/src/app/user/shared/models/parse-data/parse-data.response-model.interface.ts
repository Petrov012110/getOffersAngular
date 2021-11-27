export interface IParseData {
    name: string,
    data: IData[]
}

interface IData {
    price: string,
    postId: string,
    text: string,
    date: number,
    post: string,
    hrefImg: string[],
}