import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NftModel } from '../modele/nft/nft.component';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getNftsByUserId(userId: number): Observable<NftModel[]> {
    return this.http.get<NftModel[]>(`${this.baseUrl}/users/${userId}`);
  }
  getRandomNft(nftsByOwner: { [userId: number]: NftModel[] | undefined }, userId: number): NftModel | undefined {
    const nfts = nftsByOwner[userId];
    if (nfts && nfts.length > 0) {
      const randomIndex = Math.floor(Math.random() * nfts.length);
      return nfts[randomIndex];
    }
    return undefined;
  }
}


