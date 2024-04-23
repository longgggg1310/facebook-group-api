import { Sequelize } from 'sequelize';
import db from '../../../database/models/db';
const Op = Sequelize.Op;



export const getPriceCondition = (min, max) => {
    if (!min && !max) {
        return {}
    }

    if (!max) { // only min
        return {
            price: {
                [Op.gte]: min
            }
        }
    }

    return {
        price: {
            [Op.between]: [min || 0, max]
        }
    }

}

export const getCoordinateLatCondition = (min, max) => {
    if (!min && !max) {
        return {}
    }

    if (!max) { // only min
        return {
            lat: {
                [Op.gte]: min
            }
        }
    }

    return {
        lat: {
            [Op.between]: [min || 0, max]
        }
    }

}

export const getCoordinateLngCondition = (min, max) => {
    if (!min && !max) {
        return {}
    }

    if (!max) { // only min
        return {
            lng: {
                [Op.gte]: min
            }
        }
    }

    return {
        lng: {
            [Op.between]: [min || 0, max]
        }
    }

}