'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('comments', [
      {
        // id: 1,
        postId: 1,
        username: 'Quang Toàn',
        userAvatar: '',
        userProfileLink: 'https://www.facebook.com/leetoan.vanlaanh?comment_id=Y29tbWVudDoyMDc3ODI4NTAyMzQxODAwXzIwNzc4NDg4NzkwMDY0Mjk%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentIdFb: '1',
        commentPictureLink: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/s261x260/109713396_1232212713783514_4276583580658074314_n.jpg?_nc_cat=111&_nc_sid=dbeb18&_nc_ohc=AYEo9rMFFVgAX9Kzk3O&_nc_ht=scontent.fsgn2-1.fna&_nc_tp=7&oh=0d52233777fb2ff04b252bd3e8c9135b&oe=5F39A738',
        time: 'Thứ bảy, 18 Tháng 7, 2020 lúc 17:24',
        content: 'Ánh sáng đủ nhé bạn',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 2,
        postId: 1,
        username: 'Tina Hoàng',
        userAvatar: '',
        commentIdFb: '2',
        userProfileLink: 'https://www.facebook.com/hoangtunhi91?comment_id=Y29tbWVudDoyMDc3ODI4NTAyMzQxODAwXzIwODUxNjI5NzgyNzUwMTk%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentPictureLink: null,
        time: 'Thứ bảy, 18 Tháng 7, 2020 lúc 17:24',
        content: 'phòng này k có ánh sáng tự nhiên hả b?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 3,
        postId: 1,
        username: 'Nguyễn Hạ Linh',
        userAvatar: '',
        commentIdFb: '3',
        userProfileLink: 'https://www.facebook.com/profile.php?id=100049024569725&comment_id=Y29tbWVudDoyMDgxMTU1MzA1MzQyNDUzXzIwODgzMzk2NDQ2MjQwMTk%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentPictureLink: null,
        time: 'Thứ bảy, 18 Tháng 7, 2020 lúc 23:15',
        content: 'Có cho thuê theo ngày ko bạn',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 4,
        postId: 1,
        username: 'Tuyết Ngọc',
        userAvatar: '',
        commentIdFb: '4',
        userProfileLink: 'https://www.facebook.com/profile.php?id=100049024569725&comment_id=Y29tbWVudDoyMDgxMTU1MzA1MzQyNDUzXzIwODgzMzk2NDQ2MjQwMTk%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentPictureLink: null,
        time: 'Thứ Sáu, 17 Tháng 7, 2020 lúc 15:33',
        content: 'Studio giá 8tr/tháng, 1PN giá 9tr/tháng nha bạn',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 5,
        postId: 2,
        username: 'Thư Thư',
        userAvatar: '',
        commentIdFb: '5',
        userProfileLink: 'https://www.facebook.com/vo.chiri.50?comment_id=Y29tbWVudDoyMDg1MTEyODY0OTQ2Njk3XzIwODUxNTE4NTQ5NDI3OTg%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentPictureLink: null,
        time: 'Thứ Sáu, 17 Tháng 7, 2020 lúc 15:33',
        content: 'Check inb nha chị',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 6,
        postId: 1,
        username: 'Quang Toàn',
        userAvatar: '',
        commentIdFb: '6',
        userProfileLink: 'https://www.facebook.com/leetoan.vanlaanh?comment_id=Y29tbWVudDoyMDc3ODI4NTAyMzQxODAwXzIwNzc4NDg4NzkwMDY0Mjk%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentPictureLink: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/s261x260/109713396_1232212713783514_4276583580658074314_n.jpg?_nc_cat=111&_nc_sid=dbeb18&_nc_ohc=AYEo9rMFFVgAX9Kzk3O&_nc_ht=scontent.fsgn2-1.fna&_nc_tp=7&oh=0d52233777fb2ff04b252bd3e8c9135b&oe=5F39A738',
        time: 'Thứ bảy, 18 Tháng 7, 2020 lúc 17:24',
        content: 'Ánh sáng đủ nhé bạn',
        commentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: 7,
        postId: 1,
        username: 'Quang An',
        userAvatar: '',
        commentIdFb: '7',
        userProfileLink: 'https://www.facebook.com/leetoan.vanlaanh?comment_id=Y29tbWVudDoyMDc3ODI4NTAyMzQxODAwXzIwNzc4NDg4NzkwMDY0Mjk%3D',
        commentVideoLink: null,
        commentGIFLink: null,
        commentPictureLink: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/s261x260/109713396_1232212713783514_4276583580658074314_n.jpg?_nc_cat=111&_nc_sid=dbeb18&_nc_ohc=AYEo9rMFFVgAX9Kzk3O&_nc_ht=scontent.fsgn2-1.fna&_nc_tp=7&oh=0d52233777fb2ff04b252bd3e8c9135b&oe=5F39A738',
        time: 'Thứ bảy, 18 Tháng 7, 2020 lúc 17:24',
        content: 'Nhà trọ có gác, đầy đủ tiện nghi',
        commentId: 1,
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
    return queryInterface.bulkDelete('comments', null, {});
  }
};
