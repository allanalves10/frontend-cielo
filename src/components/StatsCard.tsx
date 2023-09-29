import { Stat, useColorModeValue, Flex, StatLabel, StatNumber, Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface StatsCardProps {
    title: string
    stat: string | number
    icon: ReactNode
}
  
export default function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      bg="white"
      color="black"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'} gap={'1'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={20} fontWeight={'bold'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber color='brand.500' fontSize={'2xl'} fontWeight={'bold'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}