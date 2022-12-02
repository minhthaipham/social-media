import Comment from "../model/comment.js";
import Posts from "../model/posts.js";
import User from "../model/user.js";
export const createComment = async (req, res) => {
  const { id } = req.params;
  // const { content, tag, rely } = req.body;
  const comment = req.body;
  const cmt = [];
  try {
    const post = await Posts.findById(id).populate("creator");
    const user = await User.findById(req.userId);
    const newComment = {
      ...post,
      comments: post.comments.push({
        content: comment.content,
        creator: user,
        postId: id,
        createdAt: new Date().toISOString(),
      }),
    };
    // console.log(newComment);
    const result = await Posts.findByIdAndUpdate(id, newComment, { new: true })
      .populate("creator")
      .populate("comments.creator");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const likeComment = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id).populate("creator");
    // console.log(content);
    // const comment = await Comment.findById(data);
    // console.log(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
