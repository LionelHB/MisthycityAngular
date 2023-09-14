export class NftModel {
  constructor(
    public id: number,
    public name: string,
    public nftPath: string,
    public creator: string,
    public creationDate: Date,
    public firstDateSale: Date,
    public lastDateSale: Date, 
    public identificationKey: string,
    public price: number, 
    public isPublic: boolean,
    public quantity: number,
    public view: number,
    public likes: number,
    public favoris: number,
    private description: string,
  

    // public dubCategory: SubCategoryModel[],
    // public anthology: AnthologyModel[],
    // public owner: UserModel[],
  ) { }
}