import React from 'react'
import { useQuery } from 'react-query'
import { getNemzetek } from '../utils'


export const Sport = () => {
    const {data:dataNemzetek,isLoading,status:statusNemzetek}=useQuery('nemzetek',getNemzetek)

    statusNemzetek=='success' && console.log(dataNemzetek);

  return (
    <div>Sport</div>
  )
}
