const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const {entryId, userId} = req.query
                const bookmark = await Bookmark.findOne({
                    where: {
                        EntryId: entryId,
                        UserId: userId
                    }
                })
            if (bookmark) {
                res.send(true)
            } else {
                res.send(false)
            }
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while fetching bookmark'
            })
        }
    },
    async post (req, res) {
        try {
            const bookmark = req.body.params
            const exists = await Bookmark.findOne({
                where: {
                    EntryId: bookmark.EntryId,
                    UserId: bookmark.UserId
                }
            })
            if (exists) {
                return res.status(400).send({
                    error: 'This entry is already bookmarked'
                })
            }
            const created = await Bookmark.create(bookmark)
            res.send(created)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while creating the bookmark'
            })
        }
    },
    async delete (req, res) {
        try {
            const {UserId, EntryId} = req.query
            const exists = await Bookmark.findOne({
                where: {
                    UserId: UserId,
                    EntryId: EntryId
                }
            })
            if (!exists) {
                return res.status(400).send({
                    error: 'This entry was not bookmarked'
                })
            }
            await Bookmark.destroy({
                where: {
                    UserId: UserId,
                    EntryId: EntryId
                }
            })
            res.send({
                data: 'Bookmark destroyed'
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while deleting the bookmark'
            })
        }
    }
}
