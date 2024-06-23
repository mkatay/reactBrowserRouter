import React from 'react'
import { useQuery } from 'react-query'
import { getNemzetek } from '../utils'


export const Sport = () => {
    const {data,isLoading,status}=useQuery('nemzetek',getNemzetek)

    status=='success' && console.log(data);

  return (
    <div>Sport</div>
  )
}
