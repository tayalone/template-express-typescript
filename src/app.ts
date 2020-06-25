import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  return res.send({ message: 'OK' })
})

// tslint:disable-next-line: no-console
app.listen(5000, () => console.log('Server running @5000'))
