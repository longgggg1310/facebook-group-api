import db from '../../../database/models/db';
import { getCoordinateLatCondition, getCoordinateLngCondition, getPriceCondition } from './post.util';


const CommentAndImgInclude = [
    {
        model: db.Comments,
        where: { commentId: null },
        as: 'postComment',
        include: {
            model: db.Comments,
            as: 'replyComment',
            required: false,
            separate: true,
        },
        required: false,
        separate: true,
    },
    {
        model: db.ImageLinks,
        as: 'postImg',
        required: false,
        separate: true,
    }
]

export const getAll = async ({ limit, offset }) => {
    const pagintationQuery = limit !== undefined ? { limit, offset } : {}
    const rs = await db.Posts.findAndCountAll({
        order: [
            ['updatedAt', 'DESC']
        ],
        include: CommentAndImgInclude,
        ...pagintationQuery,
        nest: true,
    })


    return rs;
}

export const getById = async (id) => {

    const rs = await db.Posts.findOne({
        where: {
            id,
        },
        include: CommentAndImgInclude,
        nest: true,
    })

    return rs;
}

export const filter = async ({ district, minPrice, maxPrice, minLat, maxLat, minLng, maxLng, isForRenter, limit, offset }) => {
    const priceCondition = getPriceCondition(minPrice, maxPrice)
    const districtCondition = district ? { district } : {}
    const latCondition = getCoordinateLatCondition(minLat, maxLat)
    const lngCondition = getCoordinateLngCondition(minLng, maxLng)

    const pagintationQuery = limit !== undefined ? { limit, offset } : {}

    const rs = await db.Posts.findAndCountAll({
        where: {
            isForRenter,
            ...districtCondition,
            ...priceCondition,
            ...latCondition,
            ...lngCondition,
            isForRenter,
        },
        include: CommentAndImgInclude,
        ...pagintationQuery,
        nest: true,
    })

    return rs;
}

export const updateCount = async (id) => {
    const postData = await db.Posts.findOne({
        where: {
            id,
        },
        raw: true
    })
    console.debug("post data: ", postData)

    // const rs = await db.Posts.increment('count', { by: 1, where: { id } })
    const rs = await db.Posts.update({ count: (postData.count || 0) + 1 }, { where: { id } })

    return rs;
}