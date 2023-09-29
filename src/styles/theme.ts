import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        brand: {
            500: '#017CEB',
        }
    },
    fonts: {
        heading: 'Montserrat, serif',
        body: 'Montserrat, serif',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})