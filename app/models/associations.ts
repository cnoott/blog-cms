import User from './user';
import Post from './post';

export function setupAssociations() {
  User.hasMany(Post, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'posts',
  });

  Post.belongsTo(User, {
    targetKey: 'id',
    foreignKey: 'userId',
    as: 'user',
  });
}
