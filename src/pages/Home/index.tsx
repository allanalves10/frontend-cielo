import { useEffect, useState } from "react"
import Api from "../../services/Api"
import { ItemData } from "../../types/ItemTypes"
import { SummaryData } from "../../types/SummaryTypes"
import { PromiseStatus } from "../../utils/enums/statusPromiseEnum"

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
                <div>
                    <p>{summary.initialDate}</p>
                    <p>{summary.finalDate}</p>
                    <p>{summary.totalAmount}</p>
                    <p>{summary.totalAverageAmount}</p>
                    <p>{summary.totalNetAmount}</p>
                    <p>{summary.totalQuantity}</p>
                </div>
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