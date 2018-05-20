module.exports = function(sequelize, Sequelize) {

    var Composition = sequelize.define('composition', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        type: {
            type: Sequelize.STRING,
        },

        week: {
            type: Sequelize.INTEGER
        },

        collection: {
            type: Sequelize.INTEGER
        },

        status: {
            type: Sequelize.ENUM('notDelivered', 'notCorrected', 'corrected'),
            defaultValue: 'notDelivered'
        },

        grade: {
            type: Sequelize.INTEGER
        },

        grade1: {
            type: Sequelize.INTEGER
        },

        grade2: {
            type: Sequelize.INTEGER
        },

        grade3: {
            type: Sequelize.INTEGER
        },

        grade4: {
            type: Sequelize.INTEGER
        },

        grade5: {
            type: Sequelize.INTEGER
        },

        archive: {
          type: Sequelize.STRING
        },

        comments: {
          type: Sequelize.STRING
        },

        studentEmail: {
          type: Sequelize.STRING,
        }

    });

    return Composition;

}
