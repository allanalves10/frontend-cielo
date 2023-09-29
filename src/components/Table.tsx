import { useDisclosure, Table, Thead, Tr, Th, Tbody, Td, Badge, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Tag, ModalFooter, Box } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { ItemData } from "../types/ItemTypes";
import formatMoney from "../utils/formatMoney";
import { generalStrings } from "../utils/generalStrings";

interface TransactioProps {
    transactions: ItemData[]
}

export const TransactionTable = ({ transactions }: TransactioProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTransaction, setSelectedTransaction] = useState<ItemData>();
    const { button, table, detailsTransaction } = generalStrings
  
    const handleViewClick = (item: ItemData) => {
        setSelectedTransaction(item);
        onOpen();
    };
  
    return (
        <Box overflowX={'auto'}>
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.id || ''}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.paymentType || ''}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.cardBrand || ''}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.grossAmount}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.netAmount}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.channel}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.status}</Th>
                    <Th fontSize='lg' fontWeight={'bold'} color='brand.500'>{table.view}</Th>
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
                <ModalHeader color='brand.500'>{detailsTransaction}</ModalHeader>
                <ModalCloseButton color='brand.500' />
                <ModalBody>
                    {selectedTransaction && (
                    <Box display='flex' flexDirection='column'>
                        <Tag color='black'><b>{table.id || ''}:</b>{' '}{selectedTransaction.id}</Tag>
                        <Tag color='black'><b>{table.paymentType || ''}:</b>{' '}{selectedTransaction.paymentType}</Tag>
                        <Tag color='black'><b>{table.cardBrand || ''}:</b>{' '}{selectedTransaction.cardBrand}</Tag>
                        <Tag color='black'><b>{table.grossAmount || ''}:</b>{' '}{formatMoney(selectedTransaction.grossAmount)}</Tag>
                        <Tag color='black'><b>{table.netAmount || ''}:</b>{' '}{formatMoney(selectedTransaction.netAmount)}</Tag>
                        <Tag color='black'><b>{table.channel || ''}:</b>{' '}{selectedTransaction.channel}</Tag>
                        <Tag color='black'><b>{table.status || ''}:</b>{' '}{selectedTransaction.status}</Tag>
                    </Box>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button bg="brand.500" color='white' onClick={onClose}>
                        {button.close || ''}
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};