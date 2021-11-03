import React, {useState, useEffect} from "react";
import { createPopper } from "@popperjs/core";
import Layout from '../component/Background';
import Overlay from "../component/Overlay"
import ImageCard from "../component/ImageCard"
import axios from "axios";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from 'react-infinite-scroll-component'


function Journey(props) {
  const {REACT_APP_PEXEL_API} = __SNOWPACK_ENV__
  const [images,set_images] = useState([])
 const [page_number,set_page_number] = useState(1)
  const fetchImages = async () => {
    // console.log('api key',REACT_APP_PEXEL_API)
     const apiRoot = `https://api.pexels.com/v1/curated?per_page=12&page=${page_number}`
     const res = await axios.get(`${apiRoot}`, {
      headers: {
        'Authorization': `${REACT_APP_PEXEL_API}`
      }
    })
        .then(res => set_images(images.concat(res.data.photos)))
        .catch(err => console.log(err))

     
  }

  // const fetchMore = async() => {

  //   const res =  await axios.get(`https://api.pexels.com/v1/curated?per_page=1&page=${page_number}`, {
  //     headers: {
  //       'Authorization': `${REACT_APP_PEXEL_API}`
  //     }
  //   })
  //   const data = await res.json()
  //   return data
  // }
  const fetchNext = async () => {
      // const moreImages = await fetchMore()
      //   .then(res => {
      //     set_images([...images, ...moreImages])
      //     set_page_number(page_number + 1)
      //   })
      //   .catch(err => console.log(err))
      set_page_number(page_number + 1)
  }

  
  useEffect(()=>{
    fetchImages()
  }, [page_number])

  console.log(images)
  console.log(page_number)
  return (
    
   <>
   <Overlay>
   <Layout></Layout>
   <div className="container mx-auto">
   <InfiniteScroll
  dataLength={images.length} //This is important field to render the next data
  next={fetchNext}
  hasMore={true}
  loader={<h1>Loading...</h1>}
  className="grid grid-cols-4 gap-4">

        {images.map(image=>(
        <ImageCard key={image.id} image={image} />
        ))}
     </InfiniteScroll>
  </div>
  </Overlay>
   </>
   
  );
}

export default Journey;
