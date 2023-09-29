import { useEffect, useState } from "react"
import Api from "../../services/Api"
import { ItemData } from "../../types/ItemTypes"
import { SummaryData } from "../../types/SummaryTypes"
import { PromiseStatus } from "../../utils/enums/statusPromiseEnum"
import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { GrTransaction } from 'react-icons/gr'
import formatMoney from "../../utils/formatMoney"
import formatNumber from "../../utils/formatNumber"
import StatsCard from "../../components/StatsCard"

export function Home() {
    const [items, setItems] = useState<ItemData[]>([])
    const [summary, setSummary] = useState<SummaryData>()

    useEffect(() => {
        (async() => {
            try {
                const [resultPromiseItems, resultPromiseSummary] = await Promise.allSettled([
                    Api.get('/items'),
                    Api.get('/summary'),
                ])

                if (resultPromiseItems.status === PromiseStatus.FULFILLED) {
                    const responseDataItem = resultPromiseItems.value.data;
                    setItems(responseDataItem);
                }

                if (resultPromiseSummary.status === PromiseStatus.FULFILLED) {
                    const responseDataSummary = resultPromiseSummary.value.data;
                    setSummary(responseDataSummary);
                }
            } catch (err) { 
                console.error(err);
            }
        })()
    }, [])

    return(
        <>
            <h1>Home</h1>
            {summary && (
                <>
                  <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                      <StatsCard title={'Quantidade Total'} stat={formatNumber(summary.totalAmount)} icon={<GrTransaction size={'3em'} />} />
                      <StatsCard title={'Montante Total'} stat={formatMoney(summary.totalAmount)} icon={<AiOutlineDollarCircle size={'3em'} />} />
                      <StatsCard title={'Valor Líquido'} stat={formatMoney(summary.totalNetAmount)} icon={<AiOutlineDollarCircle size={'3em'} />} />
                      <StatsCard title={'Valor Médio'} stat={formatMoney(summary.totalAverageAmount)} icon={<AiOutlineDollarCircle size={'3em'} />} />
                    </SimpleGrid>
                  </Box>
                </>
            )}
            {!!items.length && items.map(item => (
                <div key={item.id}>
                    <p>{item.administrationFee}</p>
                    <p>{item.authorizationCode}</p>
                    <p>{item.cardBrand}</p>
                    <p>{item.channel}</p>
                    <p>{item.channelCode}</p>
                    <p>{item.cnpjRoot}</p>
                    <p>{item.date}</p>
                    <p>{item.grossAmount}</p>
                    <p>{item.id}</p>
                    <p>{item.mdrFeeAmount}</p>
                    <p>{item.mdrTaxAmount}</p>
                    <p>{item.merchantId}</p>
                    <p>{item.minimumMDRAmmount}</p>
                    <p>{item.netAmount}</p>
                    <p>{item.paymentNode}</p>
                    <p>{item.paymentType}</p>
                    <p>{item.status}</p>
                    <p>{item.terminal}</p>
                    <p>{item.truncatedCardNumber}</p>
                    <p>{item.withdrawAmount}</p>
                </div>
            ))}
        </>
    )
}