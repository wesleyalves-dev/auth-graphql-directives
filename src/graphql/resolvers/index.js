module.exports = {
  Query: {
    getPublicMessage: () => ({ message: 'Public message' }),
    getPrivateMessage: () => ({ message: 'Private message' }),
    getLimitedMessage: () => ({ message: 'Limited message' })
  }
}
