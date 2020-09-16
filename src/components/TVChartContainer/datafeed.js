import { dyvolsheet } from '../../data/dyvolsheet.js';


const dvol = dyvolsheet

const configurationData = {
    supported_resolutions: ['1D'],
}
 
export async function makeApiRequest() {
    try {
        return dvol;
    } catch(error) {
        throw new Error(`request error: ${error.status}`);
    }
}

async function getAllSymbols() {

            let allSymbols = [];
            let products = Object.keys(dvol[0])
            products.forEach(ts => {
                allSymbols = [...allSymbols, {
                    description: ts.replace('_','').replaceAll('_', ' '),
                    exchange: '',
                    full_name: ts.replace('_','').replaceAll('_', ' '),
                    full_name2: ts,
                    symbol: ts.replace('_','').replaceAll('_', ' '),
                    type: 'ALT',
                }];  
            });
            
            return allSymbols;
        }

export default {
    onReady: (callback) => {
        console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData))
    },
    searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback) => {
        console.log('[searchSymbols]: Method call');
        const symbols = await getAllSymbols();
		const newSymbols = symbols.filter(symbol => {
			const isExchangeValid = exchange === '' || symbol.exchange === exchange;
			const isFullSymbolContainsInput = symbol.full_name
				.toLowerCase()
				.indexOf(userInput.toLowerCase()) !== -1;
			return isExchangeValid && isFullSymbolContainsInput;
		});
		onResultReadyCallback(newSymbols);
    },
    resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        console.log('[resolveSymbol]: Method call', symbolName);
        const symbols = await getAllSymbols();
        const symbolItem = symbols.find(({ full_name }) => full_name === symbolName.replace('_','').replaceAll('_', ' '));
        if (!symbolItem) {
            console.log('[resolveSymbol]: Cannot resolve symbol', symbolName.replace('_','').replaceAll('_', ' '));
            onResolveErrorCallback('cannot resolve symbol');
            return;
        }
        const symbolInfo = {
            name: symbolItem.symbol,
            name2: symbolItem.full_name2,
            description: symbolItem.description,
            type: symbolItem.type,
            exchange: symbolItem.exchange,
            supported_resolutions: configurationData.supported_resolutions,
        };

        console.log('[resolveSymbol]: Symbol resolved', symbolInfo);
        onSymbolResolvedCallback(symbolInfo);
    },
    getBars: async (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
        console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
        try {
            const data = await makeApiRequest();
            if (data.Response && data.Response === 'Error') {
                // "noData" should be set if there is no data in the requested period.
                onHistoryCallback([], { noData: true });
                return;
            }
            let bars = [];
            let full_name = symbolInfo.name2
            data.forEach(bar => {
                if (bar.time >= from && bar.time < to) {
                    bars = [...bars, {
                        time: bar.index,
                        low: bar[full_name],
                        high: bar[full_name],
                        open: bar[full_name],
                        close: bar[full_name],
                    }];
                }
            });
            
            console.log(`[getBars]: returned ${bars.length} bar(s)`);
            onHistoryCallback(bars, { noData: false });
        } catch (error) {
            console.log('[getBars]: Get error', error);
            onErrorCallback(error);
        }
    },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
    },
    unsubscribeBars: (subscriberUID) => {
        console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
    },
};

