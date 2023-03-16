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
        symbol: 'RAIL3.SA',
        description: 'Rumo ON',
      },
      {
        symbol: 'ALPA4.SA',
        description: 'Alpargatas PN',
      },
      {
        symbol: 'ALSO3.SA',
        description: 'Aliansce Sonae ON',
      },
      {
        symbol: 'ABEV3.SA',
        description: 'Ambev ON',
      },
      {
        symbol: 'ARZZ3.SA',
        description: 'Arezzo ON',
      },
      {
        symbol: 'BBAS3.SA',
        description: 'Banco do Brasil ON',
      },
      {
        symbol: 'BBDC3.SA',
        description: 'Bradesco ON',
      },
      {
        symbol: 'BBDC4.SA',
        description: 'Bradesco PN ',
      },
      {
        symbol: 'BEEF3.SA',
        description: 'Minerva ON',
      },
      {
        symbol: 'BPAN4.SA',
        description: 'Banco Pan PN',
      },
      {
        symbol: 'BRAP4.SA',
        description: 'Bradespar PN',
      },
      {
        symbol: 'BRFS3.SA',
        description: 'BRF ON',
      },
      {
        symbol: 'BRKM5.SA',
        description: 'Braskem PN',
      },
      {
        symbol: 'B3SA3.SA',
        description: 'B3 ON',
      },
      {
        symbol: 'CCRO3.SA',
        description: 'CCR ON',
      },
      {
        symbol: 'CIEL3.SA',
        description: 'Cielo ON',
      },
      {
        symbol: 'CMIG4.SA',
        description: 'Cemig PN',
      },
      {
        symbol: 'CPFE3.SA',
        description: 'CPFL ON',
      },
      {
        symbol: 'CPLE6.SA',
        description: 'COPEL PNB',
      },
      {
        symbol: 'CSAN3.SA',
        description: 'Cosan ON',
      },
      {
        symbol: 'CSNA3.SA',
        description: 'CSN ON',
      },
      {
        symbol: 'CYRE3.SA',
        description: 'Cyrela ON',
      },
      {
        symbol: 'DXCO3.SA',
        description: 'Dexco ON',
      },
      {
        symbol: 'ECOR3.SA',
        description: 'Ecorodovias ON',
      },
      {
        symbol: 'ELET3.SA',
        description: 'Eletrobras ON',
      },
      {
        symbol: 'ELET6.SA',
        description: 'Eletrobras PNB',
      },
      {
        symbol: 'EMBR3.SA',
        description: 'Embraer ON',
      },
      {
        symbol: 'ENBR3.SA',
        description: 'EDP Brasil ON',
      },
      {
        symbol: 'EQTL3.SA',
        description: 'Equatorial ON',
      },
      {
        symbol: 'YDUQ3.SA',
        description: 'YDUQS ON',
      },
      {
        symbol: 'EZTC3.SA',
        description: 'Eztec ON',
      },
      {
        symbol: 'FLRY3.SA',
        description: 'Fleury ON',
      },
      {
        symbol: 'GGBR4.SA',
        description: 'Gerdau PN',
      },
      {
        symbol: 'GOAU4.SA',
        description: 'Metalúrgica Gerdau PN',
      },
      {
        symbol: 'GOLL4.SA',
        description: 'Gol PN',
      },
      {
        symbol: 'PRIO3.SA',
        description: 'PetroRio ON',
      },
      {
        symbol: 'HYPE3.SA',
        description: 'Hypera',
      },
      {
        symbol: 'ITSA4.SA',
        description: 'Itaúsa PN',
      },
      {
        symbol: 'ITUB4.SA',
        description: 'Itaú Unibanco PN',
      },
      {
        symbol: 'JBSS3.SA',
        description: 'JBS ON',
      },
      {
        symbol: 'LREN3.SA',
        description: 'Lojas Renner ON',
      },
      {
        symbol: 'MGLU3.SA',
        description: 'Magazine Luiza ON',
      },
      {
        symbol: 'ENEV3.SA',
        description: 'Eneva ON',
      },
      {
        symbol: 'MRFG3.SA',
        description: 'Marfrig ON',
      },
      {
        symbol: 'MRVE3.SA',
        description: 'MRV ON',
      },
      {
        symbol: 'MULT3.SA',
        description: 'Multiplan ON',
      },
      {
        symbol: 'NTCO3.SA',
        description: 'Natura ON',
      },
      {
        symbol: 'PETR3.SA',
        description: 'Petrobras ON',
      },
      {
        symbol: 'PETR4.SA',
        description: 'Petrobras PN',
      },
      {
        symbol: 'QUAL3.SA',
        description: 'Qualicorp ON',
      },
      {
        symbol: 'RENT3.SA',
        description: 'Localiza ON',
      },
      {
        symbol: 'SANB11.SA',
        description: 'Santander Brasil Unit',
      },
      {
        symbol: 'SBSP3.SA',
        description: 'Sabesp ON',
      },
      {
        symbol: 'SLCE3.SA',
        description: 'SLC Agrícola ON',
      },
      {
        symbol: 'SMTO3.SA',
        description: 'São Martinho ON',
      },
      {
        symbol: 'EGIE3.SA',
        description: 'Engie Brasil ON',
      },
      {
        symbol: 'TIMS3.SA',
        description: 'TIM ON',
      },
      {
        symbol: 'TOTS3.SA',
        description: 'Totvs ON',
      },
      {
        symbol: 'TAEE11.SA',
        description: 'Taesa Unit',
      },
      {
        symbol: 'UGPA3.SA',
        description: 'Ultrapar ON',
      },
      {
        symbol: 'USIM5.SA',
        description: 'Usiminas PNA',
      },
      {
        symbol: 'VALE3.SA',
        description: 'Vale ON',
      },
      {
        symbol: 'VIVT3.SA',
        description: 'Telefônica Brasil ON',
      },
      {
        symbol: 'WEGE3.SA',
        description: 'Weg ON',
      },
      {
        symbol: 'COGN3.SA',
        description: 'Cogna ON',
      },
      {
        symbol: 'RADL3.SA',
        description: 'Raia Drogasil ON',
      },
      {
        symbol: 'BBSE3.SA',
        description: 'BB Seguridade ON',
      },
      {
        symbol: 'CVCB3.SA',
        description: 'CVC Brasil ON',
      },
      {
        symbol: 'KLBN11.SA',
        description: 'Klabin Unit',
      },
      {
        symbol: 'ENGI11.SA',
        description: 'Energisa Unit',
      },
      {
        symbol: 'VIIA3.SA',
        description: 'Via ON',
      },
      {
        symbol: 'BPAC11.SA',
        description: 'BTG Pactual Unit',
      },
      {
        symbol: 'AZUL4.SA',
        description: 'Azul PN',
      },
      {
        symbol: 'CRFB3.SA',
        description: 'Carrefour ON',
      },
      {
        symbol: 'SUZB3.SA',
        description: 'Suzano ON',
      },
      {
        symbol: 'VBBR3.SA',
        description: 'Vibra ON',
      },
      {
        symbol: 'HAPV3.SA',
        description: 'Hapvida ON',
      },
      {
        symbol: 'PCAR3.SA',
        description: 'Pão de Açúcar ON',
      },
      {
        symbol: 'LWSA3.SA',
        description: 'Locaweb ON',
      },
      {
        symbol: 'SOMA3.SA',
        description: 'Grupo Soma ON',
      },
      {
        symbol: 'PETZ3.SA',
        description: 'Petz ON',
      },
      {
        symbol: 'CASH3.SA',
        description: 'Méliuz ON',
      },
      {
        symbol: 'RRRP3.SA',
        description: '3R Petroleum ON',
      },
      {
        symbol: 'RDOR3.SA',
        description: "Rede D'Or ON",
      },
      {
        symbol: 'CMIN3.SA',
        description: 'CSN Mineração ON',
      },
      {
        symbol: 'ASAI3.SA',
        description: 'Assaí ON',
      },
      {
        symbol: 'RAIZ4.SA',
        description: 'Raizen PN',
      },
      {
        symbol: 'IGTI11.SA',
        description: 'Iguatemi Unt',
      },
    ];
  }
}
