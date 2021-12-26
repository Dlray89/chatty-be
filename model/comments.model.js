
module.exports = (sequelize, Sequelize) => {
    const comments = sequelize.define('comments', {
        content: {
            type: Sequelize.STRING
        },
        replyingTo: {
            type: Sequelize.STRING
        }
    })

    return comments
}