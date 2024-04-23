'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert('posts', [
      {
        // id: 1,
        district: "3",
        price: 4000000,
        content: 'Căn hộ tháng 7 cho khách.\nCăn hộ siu to khổng lồ với đầy đủ tiện ích.\nĐ/c: 21/5 - Trường Sơn - P4 - Tân Bình. ( kế sân bay )\nL/h: 097.31.32.993 để được tư vấn.',
        timeStamp: '1594711897',
        datePosting: 'Thứ Ba, 14 tháng 7, 2020 lúc 14:31',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 2,
        district: "2",
        price: 6540000,
        content: '💯💯 ESTELLA HEIGHTS 59m2-1PN, Full nội thất - GIÁ TỐT |$1000/tháng BP, VSL House-0906719788\n#EH1004\n💁 Hân hạnh được hỗ trợ quý khách trong các giao dịch bất động...\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nXem thêm',
        timeStamp: '1594798219',
        datePosting: 'Thứ Tư, 15 tháng 7, 2020 lúc 14:30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 3,
        district: "2",
        price: 7560000,
        content: '[English below]👇👇\n🌟𝙲𝚑𝚞𝚢𝚎̂𝚗 𝚌𝚑𝚘 𝚝𝚑𝚞𝚎̂ 𝙿𝚊𝚕𝚖 𝙷𝚎𝚒𝚐𝚑𝚝𝚜- 𝙶𝚒𝚘̉ 𝚑𝚊̀𝚗𝚐 𝚑𝚘̛𝚗 𝟻0 𝚌𝚊̆𝚗 𝚝𝚞̛̀ 𝚌𝚘̛ 𝚋𝚊̉𝚗 đ𝚎̂́𝚗 𝚏𝚞𝚕𝚕 𝚗𝚘̣̂𝚒 𝚝𝚑𝚊̂́𝚝🌟\n☎️𝐇𝐨𝐭𝐥𝐢𝐧𝐞: 𝟎𝟗𝟎𝟐𝟔𝟖𝟓𝟔𝟐𝟗 - 𝐌𝐬 𝐍𝐠𝐚̂𝐧 (𝐙𝐚𝐥𝐨/ 𝐕𝐢𝐛𝐞𝐫/...\nXem thêm',
        timeStamp: '1594804128',
        datePosting: 'Thứ Tư, 15 tháng 7, 2020 lúc 16:08',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkDelete('posts', null, {});
  }
};
