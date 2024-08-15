import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";//to get cookies from next server components
const wixClientServer = async ()=>{

    let refreshToken;
    try {
        let cookieStore=cookies()//cookies() returns collection of all cookies
        refreshToken=JSON.parse(cookieStore.get('refreshToken')?.value || "{}")//accessing required cookie using .get
    } catch (error) {
        console.log(error)
    }
    const wixClient = createClient({
        modules: {
            products,
            collections
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
            tokens: {
                refreshToken,accessToken:{value:"",expiresAt:0}
            }
        })
    })
    return wixClient
}
export default wixClientServer
