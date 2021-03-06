import { JSDOM } from 'jsdom'

export const sampleCrawler = async () => {
  const dom = await JSDOM.fromURL("https://github.com/jsdom/jsdom")
  const { document } = dom.window
  console.log(document
    .getElementsByClassName("repository-meta-content")[0]
    .innerHTML)
}
