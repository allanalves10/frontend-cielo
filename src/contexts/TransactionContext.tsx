import {
    createContext,
    ReactNode, useCallback, useEffect, useState,
  } from "react";
import { useLoading } from "../hooks/useLoading";
import Api from "../services/Api";
import { ChannelData } from "../types/ChannelTypes";
import { ItemData } from "../types/ItemTypes";
import { SummaryData } from "../types/SummaryTypes";
import { PromiseStatus } from "../utils/enums/statusPromiseEnum";
import { infoChannels } from "../utils/infoChannels";
  
interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextType {
  getTransactionsAndDetails?: () => void
  channelData: ChannelData[]
  items: ItemData[]
  summary: SummaryData | undefined
}

const TransactionContext = createContext({} as TransactionContextType);

function TransactionProvider({ children }: TransactionProviderProps) {
  const [items, setItems] = useState<ItemData[]>([])
  const [summary, setSummary] = useState<SummaryData>()
  const [channelData, setChannelData] = useState<ChannelData[]>([])
  const { toggleLoading } = useLoading()

  const getTransactionsAndDetails = useCallback(async () => {
    toggleLoading(true)
    try {
        const [resultPromiseItems, resultPromiseSummary] = await Promise.allSettled([
            Api.get('/items'),
            Api.get('/summary'),
        ])

        if (resultPromiseItems.status === PromiseStatus.FULFILLED) {
            const responseDataItem = resultPromiseItems.value.data;
            setItems(responseDataItem);

            const getChannelsAndCount = infoChannels(responseDataItem)
            setChannelData(getChannelsAndCount)
        }

        if (resultPromiseSummary.status === PromiseStatus.FULFILLED) {
            const responseDataSummary = resultPromiseSummary.value.data;
            setSummary(responseDataSummary);
        }
    } catch (err) { 
        console.error(err);
    } finally {
      toggleLoading(false)
    }
  }, [])

  useEffect(() => {
    (async () => {
      await getTransactionsAndDetails()
    })()
  }, [])

  return (
    <TransactionContext.Provider value={{
      getTransactionsAndDetails,
      channelData,
      items,
      summary
    }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export {
  TransactionContext,
  TransactionProvider,
};