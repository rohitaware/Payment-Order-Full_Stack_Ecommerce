import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import productCategory from '../helpers/productCategory'

import VerTicalCard from '../components/VerTicalCard'
import SummaryApi from '../common'


const CategoryProduct = () => {

    const [data,setData] = useState([])
    const nevigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const location = useLocation()
    const urlSearch = new URLSearchParams(location.search)
    const urlCategoryListInArray = urlSearch.getAll('category')
     const urlCategoryListObject = {}

     urlCategoryListInArray.forEach(el =>{
      urlCategoryListObject[el] = true
     })


    const [selectCategory,setSelectCategory] = useState(urlCategoryListObject)
    const [filterCategoryList,setFilterCategoryList] = useState([])

    const [sortBy,setSortBy] = useState('')

  

    const fetchData = async()=>{
      const response = await fetch(SummaryApi.filterProduct.url,{
        method : SummaryApi.filterProduct.method,
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify({
          category : filterCategoryList
        })

      })

      const dataResponse = await response.json()
      
      setData(dataResponse?.data || [])
      
    }

    const handleSelectCategory = (e) =>{
      const {name ,value , checked} = e.target

      setSelectCategory((preve)=>{

        return{
          ...preve,
          [value] : checked
        }
      })

      console.log('select category',name,value,checked)
    }

   useEffect(()=>{
    fetchData()
   },[filterCategoryList])
    useEffect(()=>{
       const arrayOfCategory = Object.keys(selectCategory).map(categoryKeyName => {
        if(selectCategory[categoryKeyName]){
          return categoryKeyName
        }
          return null
       }).filter(el => el)

       setFilterCategoryList(arrayOfCategory)

       //format for url change when change on the check box
       const urlFormat = arrayOfCategory.map((el,index) =>{
        if((arrayOfCategory.length - 1)===index){
          return `category=${el}`
        }
        return `category=${el}&&`
       })

       nevigate('/product-category?'+urlFormat.join(''))
    },[selectCategory])

    const handleOnChangeSort = (e)=>{
      const {value} = e.target

      setSortBy(value)

      if(value === 'asc'){
        setData(preve => preve.sort((a,b)=>a.sellingPrice-b.sellingPrice))
      }
      if(value === 'dsc'){
        setData(preve => preve.sort((a,b)=>b.sellingPrice-a.sellingPrice))
      }
    }

    useEffect(()=>{
        
    },[sortBy])
    
  return (
    <div className='container mx-auto p-4'>
      {/* Desktop version */}
      <div className='hidden lg:grid grid-cols-[200px,1fr]'>
        {/* left side */}
        <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
          {/* Sort By */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort By</h3>

            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input type='radio' name='sortBy' checked={sortBy==='asc'} value={'asc'} onChange={handleOnChangeSort}/>
                <label>Price - Low to High</label>
              </div>

              <div className='flex items-center gap-3'>
                <input type='radio' name='sortBy' checked={sortBy==='dsc'} value={'dsc'} onChange={handleOnChangeSort}/>
                <label>Price - High to Low</label>
              </div>
            </form>
          </div>


           {/* filter By */}
           <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>

            <form className='text-sm flex flex-col gap-2 py-2'>
              {
                productCategory.map((categoryName,index)=>{
                  return(
                    <div className='flex items-center gap-3'>
                      <input type='checkbox' name={'category'} checked={selectCategory[categoryName?.value]} value={categoryName?.value} id={categoryName?.value} onChange={handleSelectCategory}/>
                      <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                    </div>
                  )
                })
              }
            </form>
          </div>
        </div>
         {/* right side (product) */}
         <div className='px-4'>
          <p className='font-medium text-lg text-slate-800 my-2'>Search Results : {data.length}</p>
            <div className="min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]">
            {
              data.length !== 0 &&  (
                <VerTicalCard data={data} loading={loading}/>

              )
            }
            </div>
         </div>
      </div>
    </div>
  )
}

export default CategoryProduct
