import { Flex, Heading } from "@chakra-ui/react";
import { TransactionTable } from "../../components/Table";
import { useTransaction } from "../../hooks/useTransaction";

export function List() {
    const { items } = useTransaction()

    return (
        <Flex direction="column" padding={{ base: 0, md: "3rem" }}>
            <Heading as='h2' color='white' fontWeight={'bold'} size={{ base: 'lg', md: '2xl' }} textAlign='center' pb={{ base: 5, md: 20 }}>
                Listagem de Transações
            </Heading>
            {!!items.length && (
                <TransactionTable transactions={items} />
            )}
        </Flex>
    )
}