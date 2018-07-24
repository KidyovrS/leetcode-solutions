module.exports = {
  args: [
    [
      {
        val: 1,
        left: {
          val: 3,
          left: {
            val: 5,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
        right: {
          val: 3,
          left: null,
          right: {
            val: 7,
            left: null,
            right: null,
          },
        },
      },
    ],
  ],
  expected: [
    {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 5,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
      right: {
        val: 5,
        left: null,
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    },
  ],
};
