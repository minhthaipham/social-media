import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    images: {
      type: Array,
    },
    // images: [
    //   {
    //     public_id: {
    //       type: String,
    //     },
    //     url: {
    //       type: String,
    //     },
    //   },
    // ],
    // video: {
    //   public_id: {
    //     type: String,
    //   },
    //   url: {
    //     type: String,
    //   },
    // },
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    // comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
    // user: { type: mongoose.Types.ObjectId, ref: "user" },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("post", postSchema);
