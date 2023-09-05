import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { textInterface } from 'src/app/container/textInterface';

@Component({
  selector: 'ns-nft-explication',
  templateUrl: './nft-explication.component.html',
  styleUrls: ['./nft-explication.component.scss']
})
export class NftExplicationComponent {
  nftTexts: textInterface[] = [
    {
      title: 'Comprendre les NFTs : L\'Art du Numérique Unique',
      content: [
        ' Dans le monde numérique en constante évolution, les NFTs, ou Tokens Non-Fongibles, se sont élevés comme une nouvelle forme de propriété numérique unique et authentique. ',

        'L\'acronyme "NFT" renvoie à la notion de "non-fongible", ce qui signifie qu\'un NFT est unique et ne peut pas être remplacé ou échangé à un autre NFT de la même manière qu\'une monnaie traditionnelle.',
      ],
    },
    {
      content: [
        "Les NFTs sont basés sur la technologie blockchain, une infrastructure sécurisée et décentralisée qui sous-tend les cryptomonnaies telles que Bitcoin et Ethereum. Cependant, contrairement aux cryptomonnaies qui sont interchangeables, chaque NFT détient des informations spécifiques qui le distinguent. ",

        'En d\'autres termes, un NFT représente la propriété numérique d\'un actif unique et singulier, qu\'il s\'agisse d\'une œuvre d\'art, d\'une vidéo, d\'une musique, d\'un tweet, d\'un GIF, ou même d\'un article virtuel dans un jeu.',
      ],
    },
    {
      content: [
        'La magie des NFTs réside dans leur capacité à fournir une preuve incontestable de propriété et d\'authenticité pour des actifs numériques. ',

        'Chaque NFT est associé à un contrat intelligent sur la blockchain, contenant des métadonnées spécifiques et des détails sur l\'objet qu\'il représente. ',

        ' Cette information confère aux créateurs la possibilité de vérifier leur œuvre comme étant originale et à l\'acheteur de prouver qu\'il possède le NFT légitime.',
      ],
    },
    {
      content: [
        'L\'achat et la vente de NFTs se déroulent généralement sur des places de marché en ligne spécialisées. Les transactions sont enregistrées sur la blockchain, ce qui garantit la transparence et la traçabilité de chaque échange.',

        ' Les artistes, créateurs et même les célébrités ont adopté les NFTs comme un moyen novateur de monétiser leur travail numérique et de créer de nouvelles sources de revenus.',

        ' Les collectionneurs peuvent ainsi posséder des œuvres numériques uniques et rares, tout en soutenant les créateurs qu\'ils apprécient.',
      ],
    },
    {
      content: [
        'En somme, les NFTs offrent une opportunité révolutionnaire de valoriser et de posséder des actifs numériques originaux dans un monde de plus en plus numérique. ',

        'Ils transcendent les frontières traditionnelles de la propriété en donnant vie à des biens numériques, ce qui ouvre des possibilités passionnantes pour la création, la collecte et la transaction d\'œuvres numériques uniques et authentiques.',
      ],
    },
  ];


}
