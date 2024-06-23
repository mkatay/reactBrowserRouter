import React from 'react'
import { getTours } from '../utils';
import { useQuery } from 'react-query';
import { MyCard } from './MyCard';

export const Tours = () => {
  const {data,isLoading,status}=useQuery('tours',getTours)

    status=='success' && console.log(data);

  return (
    <div className='d-flex flex-wrap gap-2 justify-content-center'>
      <h2 className='w-100 text-center'>Our Tours</h2>
      {status=='success'&& data.map(obj=><MyCard key={obj.id} {...obj}/>)}
    </div>
  )
}

