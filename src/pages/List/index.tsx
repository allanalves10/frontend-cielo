import { Flex, Heading } from "@chakra-ui/react";
import { TransactionTable } from "../../components/Table";
import { useTransaction } from "../../hooks/useTransaction";
import { generalStrings } from "../../utils/generalStrings";

export function List() {
    const { items } = useTransaction()
    const { titleList } = generalStrings

    return (
        <Flex direction="column" padding={{ base: 0, md: "3rem" }}>
            <Heading as='h2' color='white' fontWeight={'bold'} size={{ base: 'lg', md: '2xl' }} textAlign='center' pb={{ base: 5, md: 20 }}>
                {titleList || ''}
            </Heading>
            {!!items.length && (
                <TransactionTable transactions={items} />
            )}
        </Flex>
    )
}