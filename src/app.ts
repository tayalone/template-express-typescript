// import express, { Application, Request, Response } from 'express'

// const app: Application = express()

// app.get('/', (req: Request, res: Response) => {
//   return res.send({ message: 'OK' })
// })

// // tslint:disable-next-line: no-console

import server from './server'

// tslint:disable-next-line: no-console
server.listen(5000, () => console.log('Server running @5000'))
