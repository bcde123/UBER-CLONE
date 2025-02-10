import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvNTUwOVwvNmNmOGVmM2YzMjFkMTA3YThmZGVjNjY1NjJlMmVmMzctMTYyMDM3Nzc0OC5haSJ9:postmates:9KZWqmYNXpeGs6pQy4UCsx5EL3qq29lhFS6e4ZVfQrs?width=800" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-2xl font-bold'>Get started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
