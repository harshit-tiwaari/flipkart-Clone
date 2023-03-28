//it is to switch state from login to header as we want to display name of user on header and otehr component.
import { createContext, useState} from "react"; //here createContext is a hook

export const DataContext = createContext(null);
const DataProvider = ({ children }) => { //forwarding children passed in App,js
  //MAKING STATE
  const [account, setAccount] = useState('')
  return (
    <DataContext.Provider value={{
      account,
      setAccount
    }}>
        {children}
    </DataContext.Provider>//here we use Provider attribute
  )
  //we have to wrap dataprovider with component in which we want to use State.
}
export default DataProvider;