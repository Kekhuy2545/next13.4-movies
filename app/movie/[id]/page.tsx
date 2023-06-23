//เรียกใช้คอมโพเน้นด้วย tsrfc
import { data } from 'autoprefixer';
import React from 'react'
import Image from 'next/image';

type Props = {
    params: any;
}

export default async function MovieDetail({params}: Props) {
    // const key = process.env.NEXT_PUBLIC_API_KEY
    const { id } = params ;
    const imagePath = "http://image.tmdb.org/t/p/original"
    const data  = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=095fc92a9340dcb67bdd53448e1eda21`, 
    {next :{revalidate:10}}
    );
    const res = await data.json();
    return (
    <div>MovieDetail:{params.id}
        <div className='container mx-auto mt-7'>
            <h2 className='text-4xl'>เรื่อง {res.title}</h2>
            <h2 className='text-4xl'>ความยาว {res.runtime} นาที</h2>
            <Image  className='my-12 w-full'
            src={imagePath + res.backdrop_path }
            width={800} height={800} alt={res.title}
            priority
            />
            <p>{res.overview}</p>
        </div>
    </div>
  )
}