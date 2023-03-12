import { Injectable } from '@angular/core';
import { AvailableAsset } from '../../models/available-asset.model';

@Injectable({
  providedIn: 'root',
})
export class AvailableAssetsService {
  constructor() {}

  getAssets(): AvailableAsset[] {
    return [
      {
        symbol: 'PETR4.SA',
        description: 'Petróleo Brasileiro S.A. - Petrobras',
      },
      {
        symbol: 'HAPV3.SA_ERR',
        description: 'Hapvida Participações e Investimentos S.A.',
      },
      {
        symbol: 'MGLU3.SA',
        description: 'Magazine Luiza S.A.',
      },
      {
        symbol: 'VIIA3.SA',
        description: 'Via S.A.',
      },
      {
        symbol: 'B3SA3.SA',
        description: 'B3 S.A.',
      },
      {
        symbol: 'CVCB3.SA',
        description: 'CVC Brasil Operadora e Agência de Viagens S.A.',
      },
      {
        symbol: 'BBDC4.SA',
        description: 'Banco Bradesco S.A.',
      },
      {
        symbol: 'ITUB4.SA',
        description: 'Itaú Unibanco Holding S.A.',
      },
      {
        symbol: 'COGN3.SA',
        description: 'Cogna Educação S.A.',
      },
      {
        symbol: 'GOLL4.SA',
        description: 'Gol Linhas Aéreas Inteligentes S.A.',
      },
      {
        symbol: 'AMER3.SA',
        description: 'Americanas S.A.',
      },
      {
        symbol: 'AZUL4.SA',
        description: 'Azul S.A.',
      },
      {
        symbol: 'EMBR3.SA',
        description: 'Embraer S.A.',
      },
      {
        symbol: 'CIEL3.SA',
        description: 'Cielo S.A.',
      },
      {
        symbol: 'ABEV3.SA',
        description: 'Ambev S.A.',
      },
      {
        symbol: 'ASAI3.SA',
        description: 'Sendas Distribuidora S.A.',
      },
      {
        symbol: 'RAIZ4.SA',
        description: 'Raízen S.A.',
      },
      {
        symbol: 'ITSA4.SA',
        description: 'Itaúsa S.A.',
      },
      {
        symbol: 'CASH3.SA',
        description: 'Méliuz S.A.',
      },
      {
        symbol: 'PETZ3.SA',
        description: 'Pet Center Comércio e Participações S.A.',
      },
      {
        symbol: 'OIBR3.SA',
        description: 'Oi S.A.',
      },
      {
        symbol: 'VALE3.SA',
        description: 'Vale S.A.',
      },
      {
        symbol: 'NTCO3.SA',
        description: 'Natura &Co Holding S.A.',
      },
      {
        symbol: 'RRRP3.SA',
        description: '3R Petroleum Óleo e Gás S.A.',
      },
      {
        symbol: 'PRIO3.SA',
        description: 'Petro Rio S.A.',
      },
    ];
  }
}
