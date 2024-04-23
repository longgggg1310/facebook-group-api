'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('imageLinks', [
      {
        // id: 1,
        postId: 1,
        link: 'https://www.facebook.com/photo.php?fbid=3288465547883616&set=pcb.2085112864946697&type=3&ifg=1&__tn__=HH-R&eid=ARDHCMToY3Azyp6KMK4GNoAcZPiL3eHyXlpNZFWFdG6sQaL2VE5g3WLxpmmdkqG4p2k2ANekp2hbgzNb&size=960%2C720&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 2,
        postId: 1,
        link: 'https://www.facebook.com/photo.php?fbid=3288465541216950&set=pcb.2085112864946697&type=3&ifg=1&__tn__=HH-R&eid=ARCtRZgGz1Z05e5CW-shCWlu0jWFgqq6eOnFuGSoH5Sb1CJXzcAF-D4BFI8xw8ys8sCJJI3CAJbWk5XE&size=960%2C720&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 3,
        postId: 1,
        link: 'https://www.facebook.com/photo.php?fbid=3288465534550284&set=pcb.2085112864946697&type=3&ifg=1&__tn__=HH-R&eid=ARD3rt8kw9CwalmVUlAl7EusRh7Lpuajn4s3auvRAt0bFN-F9vPROeHH0-d9K_F2dxk41cifQz4v67Hu&size=960%2C720&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 4,
        postId: 1,
        link: 'https://www.facebook.com/photo.php?fbid=3288465617883609&set=pcb.2085112864946697&type=3&ifg=1&__tn__=HH-R&eid=ARD3pYSQ3C1QvS2zlfJtfYhrwuuvQ5kBiVtLaIkC-XgtINMs6-0GgxW1Ptq57-M4-ReDDnTANrcWVwkn&size=960%2C720&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 5,
        postId: 1,
        link: 'https://www.facebook.com/photo.php?fbid=3288465624550275&set=pcb.2085112864946697&type=3&ifg=1&__tn__=HH-R&eid=ARAjv31NMwru9D3y03zpaT4wjwWxV9TfqG_160R4Y2SmXDtkwkiej8LFx-ONb0EKPyyVBJkvORhxxChh&size=960%2C720&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 6,
        postId: 2,
        link: 'https://www.facebook.com/photo.php?fbid=161637692118133&set=pcb.2085393458251971&type=3&ifg=1&__tn__=HH-R&eid=ARCirNMA38dVuxufKyaSjrW5YPy86LsH48kMwzTAbfc_YW2feIIrDDO5xh0laf-JvDs79zjLOWmhaA7p&size=1365%2C2048&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 7,
        postId: 2,
        link: 'https://www.facebook.com/photo.php?fbid=161637722118130&set=pcb.2085393458251971&type=3&ifg=1&__tn__=HH-R&eid=ARDYgp46VdZT6hldtu62onDLFodkb-0enPqTbJ6nPxLawpwzIjq5M7n51IqowM2bApzxwJnsInAsLbBF&size=1920%2C1280&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 7,
        postId: 2,
        link: 'https://www.facebook.com/photo.php?fbid=161637722118130&set=pcb.2085393458251971&type=3&ifg=1&__tn__=HH-R&eid=ARDYgp46VdZT6hldtu62onDLFodkb-0enPqTbJ6nPxLawpwzIjq5M7n51IqowM2bApzxwJnsInAsLbBF&size=1920%2C1280&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 8,
        postId: 2,
        link: 'https://www.facebook.com/photo.php?fbid=161645328784036&set=pcb.2085424661582184&type=3&ifg=1&__tn__=HH-R&eid=ARCW8bSxZ6QbyHsX_y_xaGMgepmuXp1IfjjVIt95_gdsUADV0Y6OVPIt7ZcNjL5yKx0LY8xMrrLVi2L0&size=1920%2C1280&source=17&player_origin=groups',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('imageLinks', null, {});
  }
};
