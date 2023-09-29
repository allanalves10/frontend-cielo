import {
    createContext,
    ReactNode, useCallback, useState,
  } from "react";
  import { Box } from "@chakra-ui/react";
  
  import { Loading } from "./../components/Loading";
  
  interface LoadProviderProps {
    children: ReactNode;
  }
  
  interface LoadContextType {
    toggleLoading: (loading: boolean) => void;
  }
  
  const LoadContext = createContext({} as LoadContextType);
  
  function LoadProvider({ children }: LoadProviderProps) {
    const [isLoading, setIsLoading] = useState(false);
  
    const toggleLoading = useCallback((loading: boolean) => {
      setIsLoading(loading);
    }, []);

    return (
      <LoadContext.Provider value={{
        toggleLoading,
      }}
      >
        <Box
          position="relative"
          width="full"
          height="100vh"
        >
          <Loading isLoading={isLoading} />
          {children}
        </Box>
      </LoadContext.Provider>
    );
  }
  
  export {
    LoadContext,
    LoadProvider,
  };