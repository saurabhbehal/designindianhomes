'use client'

import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'
import Slider from '../../slider/Page'
import Head from 'next/head'
import Image from 'next/image'
const Page = ({}) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>(
    []
  )
  useEffect(() => {
    const categoryIds = [119] // Add the category IDs you want to fetch
    const fetchImages = async () => {
      try {
        const timestamp = Date.now()
        const response = await fetch(
          `https://api.designindianwardrobe.com/api/images/${categoryIds}?timestamp=${timestamp}`
        )
        if (response.ok) {
          const data = await response.json()
          setImages(data)
        } else {
          console.error('Error fetching images:', response.statusText)
        }
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchImages()
  }, [])
  const handleImageClick = (index: number) => {
    setPhotoIndex(index)
    setShowSlider(true)
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }
  const [title, setTitle] = useState(
    'Studio Apartment Interior Designs | Studio Interiors India'
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])
  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <head>
        <title>Best Designed Kids Room - Kids Room Design Ideas in Delhi - NCR</title>

<meta name="description" content ="check out some of our top designed kids rooms, we are the top largest interior designing & architectural brand across new delhi, india." />


<meta name="Author" content="Design Indian Homes" />
<meta name="Generator" content="www.designindianhomes.com" />
<meta name="Language" content="en" />
<meta name="robots" content="index, follow" />
<meta name="Copyright" content="©www.designindianhomes.com" />
<meta name="Designer" content="Design Indian Homes Unit" />
<meta name="Publisher" content="www.designindianhomes.com" />
<meta name="Distribution" content="Global" />
<meta name="Rating" content="general" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="canonical" href="https://designindianhomes.com/soulful-kids-room-designs/" />
<meta name="googlebot" content="index, follow" />
<meta name="Yahoobot" content="index, follow" />
<meta name="MSNbot" content="Index, Follow" />
<meta name="allow-search" content="yes" />
<meta name="country" content="India"/>
<meta name="contactNumber" content="+91-98-99-26-49-78"/>
<meta name="dc.language" content="english"/>
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Delhi" />
<meta property="og:url" content="https://designindianhomes.com/" />
<meta property="og:title" content="Best Designed Kids Room - Kids Room Design Ideas in Delhi - NCR" />
<meta property="og:description" content="check out some of our top designed kids rooms, we are the top largest interior designing & architectural brand across new delhi, india." />

        </head>
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/selected-homes-exclusive-interior-designs-india">
              Selected Homes
            </Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Soulful Kids Room</span>
        </div>

        {/* tabs */}

        <Tabs id={3} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                width={1000}
                height={1000}
                src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                alt={image.filename}
                style={{
                  width: '450px',
                  height: '250px',
                  borderRadius: '10px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {showSlider && (
        <Slider
          images={images}
          initialSlide={photoIndex}
          onClose={handleCloseSlider}
          onNextSlide={() =>
            setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          onPrevSlide={() =>
            setPhotoIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        />
      )}

      <Footer />
    </>
  )
}

export default Page
