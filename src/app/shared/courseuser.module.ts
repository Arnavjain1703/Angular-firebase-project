export class CourseUser
{
    public name:string;
    public description:string;
    public imagePath:string;
    public price :number;
    public category:string;
    public videoPath:string;
    

    constructor(name:string,desc:string,imagePath:string,price:number,category:string,videoPath :string)
    {
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.price=price;
        this.category=category;
        this.videoPath=videoPath;
        
    }
}