import { PrismaClient } from '@prisma/client'

let prisma

try {
  console.log('Initializing Prisma Client...')
  console.log('Environment:', process.env.NODE_ENV)

  // Check DATABASE_URL format without exposing credentials
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) {
    throw new Error('DATABASE_URL is not set')
  }

  // Log URL format (without credentials)
  const urlParts = dbUrl.split('@')
  if (urlParts.length !== 2) {
    console.error('Invalid DATABASE_URL format: Missing @ symbol')
    throw new Error('Invalid DATABASE_URL format')
  }

  const protocol = urlParts[0].split('://')[0]
  if (protocol !== 'mongodb' && protocol !== 'mongodb+srv') {
    console.error('Invalid DATABASE_URL protocol:', protocol)
    throw new Error('DATABASE_URL must start with mongodb:// or mongodb+srv://')
  }

  console.log('Database URL format check passed:', {
    hasProtocol: !!protocol,
    protocol: protocol,
    hasHost: !!urlParts[1],
  })

  if (process.env.NODE_ENV === 'production') {
    console.log('Creating new Prisma Client for production')
    prisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
    })
  } else {
    if (!global.prisma) {
      console.log('Creating new Prisma Client for development')
      global.prisma = new PrismaClient({
        log: ['query', 'error', 'warn'],
      })
    }
    prisma = global.prisma
  }
  console.log('Prisma Client initialized successfully')
} catch (error) {
  console.error('Failed to initialize Prisma Client:', {
    name: error.name,
    message: error.message,
    stack: error.stack,
  })
  throw new Error(`Database connection failed: ${error.message}`)
}

export default prisma