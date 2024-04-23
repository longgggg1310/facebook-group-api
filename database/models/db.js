import Posts from './post'
import Comments from './comment'
import ImageLinks from './imagelink'

Posts.hasMany(Comments, { as: 'postComment', foreignKey: 'postId' })
Posts.hasMany(ImageLinks, { as: 'postImg', foreignKey: 'postId' })

Comments.belongsTo(Posts, { foreignKey: 'postId' })
Comments.hasMany(Comments, { as: 'replyComment', foreignKey: 'commentId' })
Comments.belongsTo(Comments, { foreignKey: 'commentId' })

ImageLinks.belongsTo(Posts, { foreignKey: 'postId' })


export default {
    Posts,
    Comments,
    ImageLinks,
}