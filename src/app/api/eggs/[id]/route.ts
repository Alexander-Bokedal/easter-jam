import connectMongoDB from "@/app/lib/MongodbConnection";
import Egg from "@/app/lib/Models";
import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};
export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const {
      newSelected: selected,
      newMessage: message,
      newCode: code,
      newPrimaryColor: primaryColor,
      newSecondaryColor: secondaryColor,
    } = await request.json();
    await connectMongoDB();
    await Egg.findByIdAndUpdate(
      id,
      { selected, message, code, primaryColor, secondaryColor },
      { new: true },
    );
    return NextResponse.json({ message: "Egg updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating Egg", error);
    return NextResponse.json(
      { error: "Failed to update egg" },
      { status: 500 },
    );
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    await connectMongoDB();
    await Egg.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Egg deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting egg:", error);
    return NextResponse.json(
      { error: "Failed to delete Egg" },
      { status: 500 },
    );
  }
}

export async function GET({ params }: { params: { id: string } }) {
  try {
    await connectMongoDB();
    const egg = await Egg.findById(params.id);
    if (!egg) {
      return NextResponse.json({ error: "Egg not found" }, { status: 404 });
    }
    return NextResponse.json(egg);
  } catch (error) {
    console.error("Error fetching egg", error);
    return NextResponse.json({ error: "Failed to fetch egg" }, { status: 500 });
  }
}
