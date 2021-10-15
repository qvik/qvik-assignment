import express, { Request, Response } from "express"
import * as channels from "../data/channels.json"
import * as articles from "../data/articles.json"
import * as article from "../data/article.json"

export const channelsRouter = express.Router()

channelsRouter.use(express.json())

channelsRouter.get('/', async(_req: Request, res: Response) => {
    try {
        res.status(200).send(channels.channels)
    } catch(error) {
        res.status(500).send(error)

    }
})

channelsRouter.get('/:channelId', async(req: Request, res: Response) => {
    const id = req?.params?.channelId
    try {
        res.status(200).send(articles.channel)
    } catch(error) {
        res.status(404).send(error)
    }
})

channelsRouter.get('/:channelId/:articleId', async(req: Request, res: Response) => {
    const id = req?.params?.articleId
    try {
        res.status(200).send(article.article)
    } catch(error) {
        res.status(404).send(error)
    }
})