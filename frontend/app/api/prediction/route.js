import connectDB from "@/lib/mongodb";
import Prediction from "@/models/Prediction";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const prediction = await Prediction.create({
    userId: session.user.email,
    ...body,
  });

  return Response.json(prediction);
}
export async function GET() {
  await connectDB();

  const session = await getServerSession(authOptions);

  console.log("SESSION:", session?.user?.email);   // DEBUG

  if (!session?.user?.email) {
    return Response.json([]);
  }

  const predictions = await Prediction.find({
    userId: session.user.email
  }).sort({ createdAt: -1 });

  console.log("FOUND:", predictions.length);      // DEBUG

  return Response.json(predictions);
}