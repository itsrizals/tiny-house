// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-extended').load()

import { ObjectId } from 'mongodb'
import { connectDB } from '../src/db'
import { Listing } from '../src/lib/types'

const seed = async () => {
  try {
    console.log(`[seed]: running..`)

    const db = await connectDB()

    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title:
          'Clean and fully furnished apartment. 5 min away from Monument Nasional',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg',
        address: 'Jl. Merdeka Selatan, Gambir, Jakarta Pusat.',
        price: 1000000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: 'Luxurious home with private pool',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg',
        address: 'Gading River View, Kelapa Gading, Jakarta Utara.',
        price: 1500000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 4,
      },
      {
        _id: new ObjectId(),
        title: 'Single bedroom located in the heart of downtown San Fransisco',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg',
        address: 'Jl. Boulevard Barat Raya, Kelapa Gading, Jakarta Utara.',
        price: 2500000,
        numOfGuests: 3,
        numOfBeds: 2,
        numOfBaths: 2,
        rating: 3,
      },
    ]

    for (const listing of listings) {
      await db.listings.insertOne(listing)
    }
    console.log(`[seed]: success.`)
  } catch (error) {
    throw new Error(`Failed to seed DB ${error}.`)
  }
}

seed()
