import { AnthologyModel } from "../anthology/anthology";
import { SubCategoryModel } from "../sub-category/sub-category.component";
import { UserModel } from "../user/user.component";

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
    public description: string,
  

    public subCategory: SubCategoryModel[],
    public anthology: AnthologyModel[],
    public owner: UserModel[],
  ) { }
}