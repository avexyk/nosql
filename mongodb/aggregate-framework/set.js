/**
 * Set
 */

db.users.aggregate(
  {
    $match: {
      scores: { $exists: true }
    }
  },
  {
    $project: {
      _id:false,
      name:true,
      scores:true
    }
  },
  {
    $set: {
      sum: { $sum: '$scores'}
    }
  },
  {
    $set: {
      avg: { $avg: '$scores' }
    }
  },
  {
    $match: {
      avg: { $gt: 9 }
    }
  }
)