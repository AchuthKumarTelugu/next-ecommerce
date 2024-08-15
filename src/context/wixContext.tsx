"use client"
import { products,collections } from "@wix/stores";
import { createClient, OAuthStrategy } from "@wix/sdk";
import Cookie from 'js-cookie' //since we can acessa cookie from client directly we use this js-cookie package
import { createContext, ReactNode } from "react";
const refreshToken=JSON.parse(Cookie.get('refreshToken')||"{}") //checking refreshtoken presence and converting from string if present

const wixClient = createClient({
    modules: {
      products,//import product from @wix/stores
      collections
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,//client id is created by going settings->headless settings->createAuth->genreating name and token
      tokens: {
        //refresh token is created whenever user visits our website,so that he can add items to cart without login and on refresh of page items in cart becomes unchanged,if user never vists page then cookie for refresh token will never be generated
        //accessToken is useful for authentication
      refreshToken,accessToken:{value:"",expiresAt:0}
      }
    })
  })
//to make our context avaiable throught application follow below steps
export  type WixClientType=typeof wixClient//making type

export const wixClientContext=createContext<WixClientType>(wixClient) //creating context

export const WixClientContextProvider=({children}:{children:ReactNode})=>{
  return (<wixClientContext.Provider value={wixClient}>
    {children}
  </wixClientContext.Provider>)
}
