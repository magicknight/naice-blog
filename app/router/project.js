/**
 * @file
 * @author 何文林
 * @date 2017/6/29
 */
const router = require('koa-router')()
const articles = require('../controllers/article')
const comments = require('../controllers/comment')

router.get('/', articles.getArticles)
router.post('/add', articles.add)
router.post('/edit', articles.editArticle)
router.get('/tag', articles.getTags)
router.get('/serch', articles.getAllArticles)
router.post('/remove', articles.removeOneArticle)
module.exports = router
