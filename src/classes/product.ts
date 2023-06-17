export class Product {
    constructor (  
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public status:string,
        public img: string,) {
            this.id = id
            this.description = description
            this.title = title
            this.img = img
            this.status=status
            this.price=price
        }
}
