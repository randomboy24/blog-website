import React from 'react'
import { BlogCard } from '../components/blogCard'


export const Blogs = () => {
  return (
    <div className='flex flex-row justify-center mt-24 '>
        <div className='flex flex-col'>
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate={(new Date()).toString()}
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            <BlogCard
                authorName='jatin'
                title='title of the day'
                content='content of the month'
                publishedDate='23-dec 2004'
                />
            </div>
    </div>
  )
}

