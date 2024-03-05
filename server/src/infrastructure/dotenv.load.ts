import app from '../app'
import dotenv from './dotenv'

export default async (): Promise<void> => {
  await dotenv(app)
}
