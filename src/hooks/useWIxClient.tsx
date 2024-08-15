import { wixClientContext } from "@/context/wixContext";
import { useContext } from "react";

const useWixClient = ()=>{
    return useContext(wixClientContext)
}
export default useWixClient