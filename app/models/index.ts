import { Post } from './post';
import { User } from './user';
import { setupAssociations } from './associations';


(async () => {
  setupAssociations();

  await Post.sync({ alter: true });
  await User.sync({ alter: true });
})();

export { Post, User };
