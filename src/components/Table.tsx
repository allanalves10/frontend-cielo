import { useDisclosure, Table, Thead, Tr, Th, Tbody, Td, Badge, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Tag, ModalFooter, Box } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { ItemData } from "../types/ItemTypes";
import formatMoney from "../utils/formatMoney";

interface TransactioProps {
    transactions: ItemData[]
}

export const TransactionTable = ({ transactions }: TransactioProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTransaction, setSelectedTransaction] = useState<ItemData>();
  
    const handleViewClick = (item: ItemData) => {
        setSelectedTransaction(item);
        onOpen();
    };
  
    return (
        <Box overflowX={'auto'}>
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>ID</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Tipo de Pagamento</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Cartão</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Valor Bruto</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Valor Líquido</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Canal</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Status</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>Visualizar</Th>
                </Tr>
                </Thead>
                <Tbody>
                {transactions.map((transaction) => (
                    <Tr key={transaction.id}>
                    <Td fontWeight={'bold'} fontSize={'lg'}>{transaction.id}</Td>
                    <Td fontWeight={'bold'} fontSize={'lg'}>{transaction.paymentType}</Td>
                    <Td fontWeight={'bold'} fontSize={'lg'}>{transaction.cardBrand}</Td>
                    <Td fontWeight={'bold'} fontSize={'lg'}>{formatMoney(transaction.grossAmount)}</Td>
                    <Td fontWeight={'bold'} fontSize={'lg'}>{formatMoney(transaction.netAmount)}</Td>
                    <Td fontWeight={'bold'} fontSize={'lg'}>{transaction.channel}</Td>
                    <Td>
                        {transaction.status === 'Aprovada' ? (
                        <Badge colorScheme="green" fontWeight={'bold'} fontSize={'sm'}>Aprovada</Badge>
                        ) : (
                        <Badge colorScheme="red" fontWeight={'bold'} fontSize={'sm'}>Negada</Badge>
                        )}
                    </Td>
                    <Td fontWeight={'bold'} fontSize={'lg'} textAlign='center'>
                        <Button 
                            onClick={() => handleViewClick(transaction)} 
                            _hover={{ bg: 'brand.500', color: 'white' }} 
                            fontWeight={'bold'} 
                            fontSize={'lg'}
                        >
                            <AiFillEye />
                        </Button>
                    </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader color='brand.500'>Detalhes da Transação</ModalHeader>
                <ModalCloseButton color='brand.500' />
                <ModalBody>
                    {selectedTransaction && (
                    <Box display='flex' flexDirection='column'>
                        <Tag color='black'><b>ID:</b>{' '}{selectedTransaction.id}</Tag>
                        <Tag color='black'><b>Tipo de Pagamento:</b>{' '}{selectedTransaction.paymentType}</Tag>
                        <Tag color='black'><b>Cartão:</b>{' '}{selectedTransaction.cardBrand}</Tag>
                        <Tag color='black'><b>Valor Bruto:</b>{' '}{formatMoney(selectedTransaction.grossAmount)}</Tag>
                        <Tag color='black'><b>Valor Líquido:</b>{' '}{formatMoney(selectedTransaction.netAmount)}</Tag>
                        <Tag color='black'><b>Canal:</b>{' '}{selectedTransaction.channel}</Tag>
                        <Tag color='black'><b>Status:</b>{' '}{selectedTransaction.status}</Tag>
                    </Box>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button bg="brand.500" color='white' onClick={onClose}>
                    Fechar
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};