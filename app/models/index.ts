import { Post } from './post';
import { User } from './user';

Post.sync({ alter: true });
User.sync({ alter: true });

export { Post, User };
