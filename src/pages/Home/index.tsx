import {
  Box,
  Flex,
  Grid,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from '@chakra-ui/react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { GrTransaction } from 'react-icons/gr'
import formatMoney from "../../utils/formatMoney"
import formatNumber from "../../utils/formatNumber"
import StatsCard from "../../components/StatsCard"
import Chart from "react-apexcharts"
import { useTransaction } from "../../hooks/useTransaction"
import { useEffect } from "react"
import { generateHexColors } from "../../utils/generateHexColors"
import { infoCardBrands } from "../../utils/infoCardBrands"

const pieChartData = {
  options: {
    labels: [] as string[],
    colors: [] as string[],
    legend: {
      fontSize: '30px',
      fontWeight: 'bold',
      labels: {
        colors: '#4A5568',
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            fontSize: '16px',
            position: 'bottom',
          },
        },
      },
    ],
  },
  series: [] as number[],
};

export function Home() {
    const { items, summary, channelData } = useTransaction()

    useEffect(() => {
      if (items?.length) {
        const getCardBrandsAndCount = infoCardBrands(items)
  
        pieChartData.options.labels = getCardBrandsAndCount.map(item => item.cardBrand)
        pieChartData.series = getCardBrandsAndCount.map(item => item.count)
        pieChartData.options.colors = generateHexColors(getCardBrandsAndCount.length)
      }
    }, [items])

    return(
      <Flex direction="column" padding={{ base: 0, md: "3rem" }} mb='20'>
        <Heading as='h2' color='white' fontWeight={'bold'} size={{ base: 'lg', md: '2xl' }} textAlign='center' pb={{ base: 5, md: 20 }}>
          Dashboard de Transações
        </Heading>
        {summary && (
          <>
            <Box maxW="100%" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Quantidade Total'} stat={formatNumber(summary.totalAmount)} icon={<GrTransaction size={'3em'} />} />
                <StatsCard title={'Montante Total'} stat={formatMoney(summary.totalAmount)} icon={<AiOutlineDollarCircle size={'3em'} />} />
                <StatsCard title={'Valor Líquido'} stat={formatMoney(summary.totalNetAmount)} icon={<AiOutlineDollarCircle size={'3em'} />} />
                <StatsCard title={'Valor Médio'} stat={formatMoney(summary.totalAverageAmount)} icon={<AiOutlineDollarCircle size={'3em'} />} />
              </SimpleGrid>
              {!!items.length && (
                <Box pt={20}>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} autoFlow={{ base: 'row', md: 'column' }}>
                    <Box bg='gray.100' rounded={'lg'} margin={{ base: 0, md: 10}} borderRadius={16} p={10}>
                      <Heading as='h2' color='brand.500' size={{ base: 'sm', md: 'xl' }} textAlign='center' pb={{ base: 5, md: 20 }}>
                        Bandeiras nas Transações
                      </Heading>
                      <Chart options={pieChartData.options} series={pieChartData.series} type="pie" height={400} />
                    </Box>
                    <Box bg='gray.100' margin={{ base: 0, md: 10}} rounded={'lg'} p={10}>
                      <Heading as='h2' color='brand.500' size={{ base: 'sm', md: 'xl' }} textAlign='center' pb={{ base: 5, md: 20 }}>
                        Canais de Transações + Quantidade
                      </Heading>
                      <UnorderedList px={10} color='gray.600'>
                        {!!channelData.length && channelData.map(channelItem => (
                          <ListItem fontSize={{ base: 16, md: 40}} key={channelItem.channel}><b>{channelItem.channel}</b> - {channelItem.count}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  </Grid>
                </Box>
              )}
            </Box>
          </>
        )}
      </Flex>
    )
}