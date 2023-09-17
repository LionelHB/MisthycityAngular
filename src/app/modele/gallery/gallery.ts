import { NftModel } from "../nft/nft.component";

export interface GalleryModel {
  id: number;
  owner: {
    id: number;
    username: string;
    nft: NftModel[]; 
  };
  name: string;
  is_public: boolean;
  description: string;
  creationDate: Date;
}

