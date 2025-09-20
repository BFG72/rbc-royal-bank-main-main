import { ChakraProvider } from "@chakra-ui/react";
import "component/styles/globals.css";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);
  /*
  {getLayout(<Component {...pageProps} />)}
*/
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
