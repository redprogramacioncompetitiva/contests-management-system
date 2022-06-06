import Head from 'next/head'
import React from 'react'

const RPCContainer = ({children}) => {
  return (

    <div>
        <Head>
          {/*CDN Injection create a _document file for this configuration just usefull for development enviroment Ⓜ️*/}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        </Head>
            <div className="container-md my-4 shadow-lg p-4 bg-body rounded">
                {children}
            </div>
        </div>
  )
}

export default RPCContainer