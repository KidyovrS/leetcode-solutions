module.exports = {
  args: [
    [
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: null,
              },
            },
          },
        },
      },
    ],
    [
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: {
                  val: 6,
                  next: null,
                },
              },
            },
          },
        },
      },
    ],
  ],
  expected: [
    {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
    {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 6,
          next: null,
        },
      },
    },
  ],
};
