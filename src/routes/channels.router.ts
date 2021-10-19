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
        if(parseInt(id) === 2) {
            res.status(200).send(articles.channel)
        } else {
            res.status(404).send(Error("Information not available"))
        }
    } catch(error) {
        res.status(404).send(error)
    }
})

channelsRouter.get('/:channelId/:articleId', async(req: Request, res: Response) => {
    const channelId = req?.params?.channelId
    const articleId = req?.params?.articleId
    try {
        if(parseInt(channelId) === 2 && parseInt(articleId) === 1) {
            res.status(200).send(article.article)
        } else {
            res.status(404).send(Error("Information not available"))
        }
    } catch(error) {
        res.status(404).send(error)
    }
})