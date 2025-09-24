import Papa from 'papaparse'

export function parseTradeData(csvText: string) {
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true })
  return parsed.data.map(item => ({
    date: item['DATE'],
    itemName: item['ITEM NAME'],
    type: item['TYPE'],
    qty: Number(item['QTY.']),
    buyPrice: Number(item['BUY PRICE']),
    buyTime: item['BUY TIME'],
    stopLossPrice: Number(item['STOP LOSS PRICE']),
    slTime: item['SL TIME'],
    rp11: Number(item['R:P 1:1']),
    rp12: Number(item['R:P 1:2']),
    tpPrice: Number(item['TP PRICE']),
    tpTime: item['TP TIMe'],
    tpP2: Number(item['TP P2']),
    tpT2: item['TP T2'],
    exitPrice: Number(item['EXIT PRICE']),
    exitTime: item['EXIT TIME'],
    profitLoss: Number(item['PROFIT/LOSS']),
    remarks: item['REMARKS']
  }))
}
