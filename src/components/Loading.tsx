import { Flex, Spinner } from "@chakra-ui/react";

interface LoadingProps {
  isLoading: boolean;
}
export function Loading({ isLoading }: LoadingProps) {
  return (
    <Flex
      display={isLoading ? "flex" : "none"}
      position="absolute"
      inset="0px"
      justifyContent="center"
      alignItems="center"
      backgroundColor={"black"}
      opacity={0.5}
      zIndex="tooltip"
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='brand.500'
        size='xl'
      />
    </Flex>
  );
}