import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });

    // If post not found
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    // Update views in a separate operation
    await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" }, 
      { status: 500 }
    );
  }
};