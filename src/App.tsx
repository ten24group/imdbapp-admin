import React from 'react';
import { UI24 } from "@ten24group/ui24";

export default function App() {

    return <UI24 
        
        ui24config={{
            appName: "Admin",
            baseURL: process.env.REACT_APP_API_URL,
            appLogo: require('./assets/logo.png').default,
            uiConfig: {
                auth: process.env.AUTH_CONFIG_URL,
                menu: process.env.MENU_CONFIG_URL,
                pages: process.env.PAGES_CONFIG_URL,
                dashboard: process.env.DASHBOARD_CONFIG_URL,
            },
            formatConfig:{
                date: process.env.DATE_FORMAT,
                time: process.env.TIME_FORMAT,
                datetime: process.env.DATE_TIME_FORMAT,
                boolean: {
                    true: process.env.BOOLEAN_FORMAT_TRUE,
                    false: process.env.BOOLEAN_FORMAT_FALSE,
                }
            }
        }} 
        
    />
}